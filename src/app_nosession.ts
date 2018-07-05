"use strict";

import * as apiconnector from "@hexonet/ispapi-apiconnector";
const apiclient = new apiconnector.Client();
const socketparameters =  {
    params: {
      entity: "1234",
      login: "test.user",
      pw: "test.passw0rd",
      remoteaddr: "1.2.3.4:80",
    },
  };

const cb = (r: any) => {
  console.dir(r);
};

apiclient.request({
  COMMAND: "StatusAccount",
}, socketparameters, cb, cb);
