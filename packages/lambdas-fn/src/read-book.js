const { readJson, readFile } = require("fs-extra")

async function readBook(id)  {
  let {bookIndexes} = await readJson(`${__dirname}/books/book-indexes.json`)
  console.log(bookIndexes)
  if (!bookIndexes[id]) return
  let filePath = `${__dirname}/books/${bookIndexes[id]}.txt`
  let first = (await readFile(filePath)).toString()
  const second = first
    .split(' ')
    .map(x=> x.trim())
    .map(x => x.split('\n'))

  const third = second.flat().map(x => x.trim())

  let prev = undefined
  
  const result = third.filter((word) => {
    if(prev === word){
      return false
    }

    prev = word
    return true
  })

  return result
}

exports.readBook = readBook