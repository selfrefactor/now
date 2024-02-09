import { map, anyPass, includes, waitFor } from 'rambdax'
import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { SET_CODE } from '../../constants'
import { Stringify } from '../../modules/stringify'
import { setResults } from '../actions'

const stringifyLog = map(Stringify)

const getFlag = anyPass([
  includes('const result ='),
  includes('const result='),
  includes('let result='),
  includes('let result ='),
])

export const execCodeEpic = (
  action$: ActionsObservable<ExecCodeAction>,
  store,
): Observable<Action> =>
  action$
    .ofType(SET_CODE)
    .switchMap(() => {
      return new Observable(observer => {
        const code = store.getState().store.code
        const flag = getFlag(code)
        if (!flag) return observer.complete()

        let resultHolder
        let readyState = false
        const logResultHolder = []
        const consoleLogHolder = console.log
        console.log = (...input) => logResultHolder.push(...input)

        const onComplete = () => {
          console.log = consoleLogHolder
          observer.complete()
        }

        const onResult = ({ result, log }) => {
          observer.next(setResults({
            logResult: stringifyLog(log),
            result: Stringify(result),
          }))
        }

        const codeToEvaluate = `
void async function main() {
  ${code};
  readyState = true;
  resultHolder = result;
}();
`

        try {
          eval(codeToEvaluate)
          if(readyState){
              onResult({
                log: logResultHolder,
                result: resultHolder,
              })
              return onComplete()
          }
          const waitForResult = waitFor(() => readyState, 5000)
          waitForResult()
            .then(()=>{
              onResult({
                log: logResultHolder,
                result: resultHolder,
              })
              onComplete()
            })
            .catch(err => {
              onResult({
                log: logResultHolder,
                result: err.message || 'ERROR',
              })
              onComplete()
            })
        } catch (e) {
          onResult({
            log: logResultHolder,
            result: e.message || 'ERROR',
          })
          onComplete()
          if(e instanceof SyntaxError === false){
            console.log(e)
          }
        }
      })
    })
