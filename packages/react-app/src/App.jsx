import { useState } from 'react'
import './App.css'
console.log(window.mqtt, `window`)

const options = {
  clean: true, // retain session
  connectTimeout: 4000, // Timeout period
  clientId: 'emqx_test',
  username: 'emqx_test',
  password: 'emqx_test',
}

const connectUrl = 'wss://broker.emqx.io:8084/mqtt'
const client = window.mqtt.connect(connectUrl, options)
client.on('reconnect', (error) => {
  console.log('reconnecting:', error)
})

client.on('error', (error) => {
  console.log('Connection failed:', error)
})

client.on('message', (topic, message) => {
console.log('receive message：', topic, message.toString())
})

console.log(client, `client`)
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
  a
    </div>
  )
}

export default App
