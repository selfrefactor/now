import { mapAsync, range } from 'rambdax'
import { API_URL } from '../../constants'
import { post } from 'axios'

function saveToLocalStorage(data, bookIndex){
  console.log( 'Saving to local storage', bookIndex)
  localStorage.setItem(bookIndex, JSON.stringify(data))
}

function getFromLocalStorage (bookIndex){
  let data = localStorage.getItem(bookIndex)
  return data ? JSON.parse(data) : null
}

export async function initializeCache(password){
  await mapAsync(async (bookIndex) => {
    const { data } = await post(`${ API_URL }/speed-reader/`, { id : bookIndex, password })
    saveToLocalStorage(data, bookIndex)
  }, range(0, 47))
}

export async function getData(bookIndex, password){
  let bookData
  try {
    const { data } = await post(`${ API_URL }/speed-reader/`, { id : bookIndex, password })
    bookData = data
    saveToLocalStorage(data, bookIndex)
  } catch (error) {
    bookData = getFromLocalStorage(bookIndex)
    if(bookData) console.log( 'Using local data')
  }
  if(!bookData) throw new Error('No data')
  return bookData.filter(x => x.trim().length > 0)
}
