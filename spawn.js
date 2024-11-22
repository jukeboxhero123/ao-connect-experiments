import { createDataItemSigner, spawn } from "./src/index.js";
import fs from 'fs'
import path from 'path'
import os from 'os'

import { createDataItemSignerEth } from "./ethereumSigner.js";

// let wallet = "";
// if (fs.existsSync(path.resolve(os.homedir() + '/.aos.json'))) {
//     wallet = JSON.parse(fs.readFileSync(path.resolve(os.homedir() + '/.aos.json'), 'utf-8'))
// }

let ethWallet = "0xaa9b83f8943327f5567e2860eea926fa70fab97b42e9b563f507c6e0290de516"

const processId = await spawn({
  // The Arweave TXID of the ao Module
  module: "bkjb55i07GUCUSWROtKK4HU1mBS_X0TyH3M5jMV6aPg",
  // The Arweave wallet address of a Scheduler Unit
  scheduler: "_GQ33BkPtZrqxA84vM8Zk-N2aO0toNNu_C-l-rawrBA",
  // A signer function containing your wallet
  signer: createDataItemSignerEth(ethWallet),
  /*
    Refer to a Processes' source code or documentation
    for tags that may effect its computation.
  */
  tags: [
    { name: "Authority", value: "fcoN_xJeisVsPXA-trzVAuIiqO3ydLQxM-L4XbrQKzY" },
    // { name: "Extension", value: "WeaveDrive" },
    // { name: "Availability-Type", value: "Assignments"},
    // { name: "Attestor", value: "fcoN_xJeisVsPXA-trzVAuIiqO3ydLQxM-L4XbrQKzY" }
  ],
});

console.log('ProcessId', processId)
