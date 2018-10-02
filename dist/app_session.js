'use strict'
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled (value) { try { step(generator.next(value)) } catch (e) { reject(e) } }
    function rejected (value) { try { step(generator['throw'](value)) } catch (e) { reject(e) } }
    function step (result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value) }).then(fulfilled, rejected) }
    step((generator = generator.apply(thisArg, _arguments || [])).next())
  })
}
Object.defineProperty(exports, '__esModule', { value: true })
const apiconnector = require('@hexonet/ispapi-apiconnector')
function main () {
  return __awaiter(this, void 0, void 0, function * () {
    const cl = new apiconnector.APIClient()
    cl.useOTESystem()
    cl.setCredentials('test.user', 'test.passw0rd')
    cl.setRemoteIPAddress('1.2.3.4:80')
    let r = yield cl.login()
    if (r.isSuccess()) {
      console.log('LOGIN -> SUCCEEDED')
      r = yield cl.request({
        COMMAND: 'StatusAccount'
      })
      console.dir(r.getHash())
      r = yield cl.logout()
      if (r.isSuccess()) {
        console.log('LOGOUT -> SUCCEEDED')
      } else {
        console.log('LOGOUT -> FAILED')
      }
    } else {
      console.log('LOGIN -> FAILED')
    }
  })
}
main()
// # sourceMappingURL=app_session.js.map
