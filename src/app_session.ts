"use strict";

import * as apiconnector from "@hexonet/ispapi-apiconnector";

async function main() {
  const cl = new apiconnector.APIClient();

  // choose endpoint system and set credentials
  cl.useOTESystem();
  cl.setCredentials("test.user", "test.passw0rd");

  // optional: access on a subuser account
  // cl.setSubuserView("...");

  // optional: provide your remote ip address (use for ip filter)
  cl.setRemoteIPAddress("1.2.3.4:80");

  // --- Perform Login ---
  let r = await cl.login();
  if (r.isSuccess()) {
    console.log("LOGIN -> SUCCEEDED");

    // --- Perform API requests reusing the API session ---
    r = await cl.request({
      COMMAND: "StatusAccount",
    });
    console.dir(r.getHash());

    // --- Perform Logout ---
    r = await cl.logout();
    if (r.isSuccess()) {
      console.log("LOGOUT -> SUCCEEDED");
    } else {
      console.log("LOGOUT -> FAILED");
    }
  } else {
    console.log("LOGIN -> FAILED");
  }
}
main();
