import { API_URL } from '../../constants'
import { post } from 'axios'

function saveToLocalStorage(data, bookIndex){
  localStorage.setItem(bookIndex, JSON.stringify(data))
}

function getFromLocalStorage (bookIndex){
  let data = localStorage.getItem(bookIndex)
  return data ? JSON.parse(data) : null
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
