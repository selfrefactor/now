const { exec, log } = require('helpers')
const { remove } = require('rambdax')

const alias = 'rambda'

async function deploy(){
  const cwd = process.cwd()
  await exec({
    cwd,
    command : 'yarn build',
  })
  const logs = await exec({
    cwd,
    command : 'yarn deploy',
  })

  const [ addressRaw ] = logs.filter(x => x.startsWith('http'))
  if (!addressRaw) return console.log('error')

  const address = remove('https://', addressRaw)
  const nowCommand = `now alias ${ address } ${ alias }`
  log(nowCommand, 'back')

  await exec({
    cwd,
    command : nowCommand,
  })
}

deploy()
