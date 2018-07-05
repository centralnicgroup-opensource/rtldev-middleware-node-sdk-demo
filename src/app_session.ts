"use strict";

import * as apiconnector from "@hexonet/ispapi-apiconnector";
const apiclient = new apiconnector.Client();

// --- socket parameters in JSON format
const socketparameters = {
  entity: "1234", // OT&E system, use "54cd" for LIVE system
  login: "test.user", // your user id, here: the OT&E demo user
  pw: "test.passw0rd", // your user password
  // user: "...",//can be used to work with a subuser account - optional
  remoteaddr: "1.2.3.4:80", // optional: provide your remote ip address (use for ip filter)
};

// --- perform a login to the provided url
console.log("login ...");
apiclient.login(socketparameters, (r: any, socketcfg: any) => {
  if (r.CODE !== "200") { // login failed
    console.log(" FAILED -> " + r.CODE + " " + r.DESCRIPTION);
    return;
  }
  console.log("SUCCESS");

  // define callback method which we use for success and error case
  // you can also define a separate callback method for error case instead
  const cb = (r2: any) => {
    console.log("---- API response ----");
    console.dir(r2);

    // ... further commands ...

    // --- finally do logout
    console.log("logout ...");
    apiclient.logout(socketcfg, (r3: any) => {
      if (r3.CODE !== "200") { // logout failed
        console.log(" FAILED -> " + r3.CODE + " " + r3.DESCRIPTION);
        return;
      }
      console.log(" SUCCESS");
    });
  };

  console.log("requesting user status ...");
  apiclient.request({
    COMMAND: "StatusUser",
  }, socketcfg, cb, cb);
});
