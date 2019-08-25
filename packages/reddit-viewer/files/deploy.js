const { remove } = require('rambdax')
const { exec } = require('helpers')

const alias = 'reddit-viewer'

async function deploy() {
  const cwd = process.cwd()
  await exec({
    cwd,
    command: 'yarn build'
  })
  const logs = await exec({
    cwd,
    command: 'yarn deploy'
  })
  const [addressRaw] = logs.filter(x => x.startsWith('http'))
  if(!addressRaw) return console.log('error')
  const address = remove('https://',addressRaw)
  const nowCommand = `now alias ${address} ${alias}`

  await exec({
    cwd,
    command: nowCommand
  })
}

deploy()