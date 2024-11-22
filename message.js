
import { createDataItemSigner, message } from "@permaweb/aoconnect";
import fs from 'fs'
import path from 'path'
import os from 'os'
import { createDataItemSignerEth } from "./ethereumSigner.js";

const PROCESS_ID = 'JWJV5oNkCcU-O-bOtSho2yJ14WG6ky8tgBQFCo9A6CU'

let wallet = "";
if (fs.existsSync(path.resolve(os.homedir() + '/.aos.json'))) {
    wallet = JSON.parse(fs.readFileSync(path.resolve(os.homedir() + '/.aos.json'), 'utf-8'))
}

let ethWallet = "0xaa9b83f8943327f5567e2860eea926fa70fab97b42e9b563f507c6e0290de516"

await message({
    /*
      The arweave TXID of the process, this will become the "target".
      This is the process the message is ultimately sent to.
    */
    process: PROCESS_ID,
    // Tags that the process will use as input.
    tags: [
      { name: "Action", value: "Test" },
    ],
    // A signer function used to build the message "signature"
    signer: createDataItemSigner(wallet),
    // signer: createDataItemSignerEth(ethWallet),
    /*
      The "data" portion of the message
      If not specified a random string will be generated
    */
    data: "TEST",
})
.then(console.log)
.catch(console.error);
