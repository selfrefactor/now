
async function foo(){
  try{
    let a = await fetch('https://server-sandbox.vercel.app/api')
    let b = await a.json()
    console.log(b)
  }catch(e){
    console.log(e,3)
  }
}
foo()
function App() {

  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  )
}

export default App
