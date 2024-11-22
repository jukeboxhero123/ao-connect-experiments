import { connect, createDataItemSigner } from "@permaweb/aoconnect";
import fs from 'fs'
import path from 'path'
import os from 'os'

// const { result, results, message, spawn, monitor, unmonitor, dryrun } = connect(
//   {
//     MU_URL: "https://mu.ao-testnet.xyz",
//     CU_URL: "https://cu.ao-testnet.xyz",
//     GATEWAY_URL: "https://arweave.net",
//   },
// );

let wallet = "";
if (fs.existsSync(path.resolve(os.homedir() + '/.aos.json'))) {
    wallet = JSON.parse(fs.readFileSync(path.resolve(os.homedir() + '/.aos.json'), 'utf-8'))
}

console.log(wallet);


