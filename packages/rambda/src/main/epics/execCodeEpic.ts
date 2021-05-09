import { map, type, anyPass, includes, waitFor, uniq } from 'rambdax'
import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { SET_CODE } from '../../constants'
import { setResults } from '../actions'

const stringifyResult = x => {
  if(Array.isArray(x)){
    return x.toString()
  }
  if(type(x) === 'Object'){
    return JSON.stringify(x, null, 2)
  }
  
  return JSON.stringify(x)
}

const stringifyLog = map(stringifyResult)

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
        console.log(`flag`, flag )
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
          console.warn(`result`, result )
          observer.next(setResults({
            logResult: stringifyLog(log),
            result: stringifyResult(result),
          }))
        }

        const codeToEvaluate = `
void async function main() {
  ${code};
  readyState = true;
  resultHolder = result;
}();
`
console.warn(`codeToEvaluate`, uniq([null, undefined]) )
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
