import {
    EthereumSigner,
} from '@dha-team/arbundles';

import * as WarpArBundles from 'warp-arbundles'

/**
 * hack to get module resolution working on node jfc
 */
const pkg = WarpArBundles.default ? WarpArBundles.default : WarpArBundles
const { createData } = pkg


export function createDataItemSignerEth (wallet) {
    const signer = async ({ data, tags, target, anchor }) => {
      const signer = new EthereumSigner(wallet)
      const dataItem = createData(data, signer, { tags, target, anchor })
      return dataItem.sign(signer)
        .then(async () => {
            const result = {
                id: await dataItem.id,
                raw: await dataItem.getRaw()
            }
            console.log(result)
            return result
        })
    }
  
    return signer
}