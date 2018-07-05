"use strict";

import * as apiconnector from "@hexonet/ispapi-apiconnector";
const apiclient = new apiconnector.Client();
const socketparameters =  {
    params: {
      entity: "1234", // OT&E system, use "54cd" for LIVE system
      login: "test.user", // your user id, here: the OT&E demo user
      pw: "test.passw0rd", // your user password
      // user: "...",//can be used to work with a subuser account - optional
      remoteaddr: "1.2.3.4:80", // optional: provide your remote ip address (use for ip filter)
    },
  };

const cb = (r: any) => {
  console.dir(r);
};

apiclient.request({
  COMMAND: "StatusAccount",
}, socketparameters, cb, cb);
