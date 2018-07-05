'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const apiconnector = require('@hexonet/ispapi-apiconnector')
const apiclient = new apiconnector.Client()
const socketparameters = {
  entity: '1234',
  login: 'test.user',
  pw: 'test.passw0rd',
  remoteaddr: '1.2.3.4:80'
}
console.log('login ...')
apiclient.login(socketparameters, (r, socketcfg) => {
  if (r.CODE !== '200') {
    console.log(' FAILED -> ' + r.CODE + ' ' + r.DESCRIPTION)
    return
  }
  console.log('SUCCESS')
  const cb = (r2) => {
    console.log('---- API response ----')
    console.dir(r2)
    console.log('logout ...')
    apiclient.logout(socketcfg, (r3) => {
      if (r3.CODE !== '200') {
        console.log(' FAILED -> ' + r3.CODE + ' ' + r3.DESCRIPTION)
        return
      }
      console.log(' SUCCESS')
    })
  }
  console.log('requesting user status ...')
  apiclient.request({
    COMMAND: 'StatusUser'
  }, socketcfg, cb, cb)
})
// # sourceMappingURL=app_session.js.map
