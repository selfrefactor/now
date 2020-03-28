import {delay} from 'rambdax'
import {interval} from 'rxjs'
import {take, publish, refCount} from 'rxjs/operators'
import {foo} from './foo'

test('happy', () => {
  console.log(foo(1))
})

test.skip('happy', async () => {
  const obs = interval(500).pipe(take(10), publish(), refCount())

  setTimeout(() => {
    obs.subscribe(data => console.log('sub1', data))
  }, 1100)

  setTimeout(() => {
    obs.subscribe(data => console.log('---', data))
  }, 1200)

  await delay(4000)
})
