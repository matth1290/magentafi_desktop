import * as solanaWeb3 from '@solana/web3.js';

import { TOKEN_PROGRAM_ID } from '@solana/spl-token';

// const networks = {
// mainnet: {
//     url: "https://solana-api.projectserum.com",
//     displayName: "Mainnet Beta",
// },
// devnet: { url: clusterApiUrl("devnet"), displayName: "Devnet" },
// testnet: { url: clusterApiUrl("testnet"), displayName: "Testnet" },
// };

// const solanaNetwork = networks.devnet;
// const connection = new solanaWeb3.Connection(solanaNetwork.url);


async function getAccountInfo(privateKey) {
    try {
        //convert key from string to uint8 array
        const seed = Uint8Array.from(privateKey).slice(0, 32);
        const account = solanaWeb3.Keypair.fromSeed(seed);
        return account;
    } catch (e) {
        console.error(e);
    }
};

export default getAccountInfo;