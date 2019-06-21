import { delay, nextIndex } from 'rambdax'
import { waitForAnt } from '../ants/waitFor'
import { incIndex } from '../actions'
import { convert } from '../../stories'
import { pushUniq } from 'client-helpers'
import { dispatcher } from '../../reduxed'
import { updateDbBee } from './updateDb'

const condition = getState => !getState().loading

const WHEN_TO_FETCH = 12

export async function playBee(getState){
  while (true){
    const { play, subreddit, index, db, marker } = getState()
    if (db.length - index < WHEN_TO_FETCH){
      await updateDbBee(subreddit, marker)
    }

    // Waiting for gif to load
    // ============================================
    const gifLoaded = await waitForAnt(
      condition,
      5000,
      20,
    )(getState)

    if (!gifLoaded) console.log('load.fail', db[ index ].src)

    await delay(play * 1000)
    dispatcher(incIndex())
    const indexToPrepare = nextIndex(nextIndex(index, db), db)

    if (db[ indexToPrepare ].type === 'image'){

      const urlToPrepare = db[ indexToPrepare ].src
      const uniqKey = `${ subreddit }-${ urlToPrepare }`
      convert({
        uniqKey,
        src : urlToPrepare,
      })
      pushUniq('CONVERTED', uniqKey)
    }
  }
}
