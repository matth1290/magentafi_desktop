import { 
    Connection, 
    clusterApiUrl, 
    LAMPORTS_PER_SOL,
    Keypair,
    PublicKey,
  
  } from "@solana/web3.js";

import { TOKEN_PROGRAM_ID } from '@solana/spl-token';

const networks = {
mainnet: {
    url: "https://solana-api.projectserum.com",
    displayName: "Mainnet Beta",
},
devnet: { url: clusterApiUrl("devnet"), displayName: "Devnet" },
testnet: { url: clusterApiUrl("testnet"), displayName: "Testnet" },
};

const solanaNetwork = networks.devnet;
const connection = new Connection(solanaNetwork.url);

const publicKeyFromString = (publicKeyString) => {
    return new PublicKey(publicKeyString);
};


async function getAccountInfo(privateKey) {
    try {
        //convert key from string to uint8 array
        const seed = Uint8Array.from(privateKey).slice(0, 32);
        const account = Keypair.fromSeed(seed);
        return account;
    } catch (e) {
        console.error(e);
    }
};

const getSolPubKey = async (privKey) => {
    try {
      const kp = await getAccountInfo(privKey);
      console.log(kp.publicKey);
      return kp.publicKey;
    } catch (e) {
      console.error(e);
    }
  }

  const getBalance = async (privKey) => {
    try {
      const publicKey = await getSolPubKey(privKey);
  
      const lamports = await connection.getBalance(publicKey).catch((err) => {
       console.error(err) //error is here -->check this
      });
 
      const sol = lamports / LAMPORTS_PER_SOL;
      return sol
    } catch(e) {
      console.error(e);
    }
 };

 const SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID = new PublicKey(
    'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL',
  );
  
  async function findAssociatedTokenAddress(
      walletAddress,
      tokenMintAddress
  ) {
      return (await PublicKey.findProgramAddress(
          [
              walletAddress.toBuffer(),
              TOKEN_PROGRAM_ID.toBuffer(),
              tokenMintAddress.toBuffer(),
          ],
          SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID
      ))[0]; 
  
      
  }
  
  const getTokenBalance = async (privKey, splToken) => {
    const solPubKey = await getSolPubKey(privKey);
    const splTokenKey = publicKeyFromString(splToken);
  
    const account = await findAssociatedTokenAddress(
      solPubKey,
      splTokenKey,
    );
  
    try {
      const balance = await connection.getTokenAccountBalance(
        publicKeyFromString(account.toString())
      );
      return balance.value.amount / 1000000;
    } catch (e) {
      return 0;
    }
  };

  export {
    getAccountInfo,
    getBalance,
    getTokenBalance,
  }; 
  