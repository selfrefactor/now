import { combineReducers } from 'redux'

// IMPORT_STORES
import { notifyStore } from '../../notify/reducers'
import { chooseWordStore } from '../choose_word/reducers'
import { guessWordStore } from '../guess_word/reducers'
import { learningMemeStore } from '../learning_meme/reducers'
import { selectArticleStore } from '../select_article/reducers'
import { writeSentenceStore } from '../write_sentence/reducers'
import { store } from './reducers'

const allReducers = {
  // CONNECT_STORES
  selectArticleStore,
  chooseWordStore,
  guessWordStore,
  learningMemeStore,
  notifyStore,
  store,
  writeSentenceStore,
}

export const combinedReducers = combineReducers(allReducers)
