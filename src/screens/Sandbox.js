import { NativeStream, TokenStream } from "@zebec-protocol/stream";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { MangetaWallet } from "../solana/wallet";

import { 
    Connection, 
    clusterApiUrl, 
    LAMPORTS_PER_SOL,
    Keypair,
    PublicKey,
  
  } from "@solana/web3.js";
    
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

export default async function Sandbox(props) {
  console.log(props.privKey);
    const wallet = await MangetaWallet(props.privKey)
    // const token = new TokenStream(props.keyprop, connection.rpcEndpoint);
    console.log(wallet);
    // const response = await token.deposit({
    //   sender: 'EYktpd4zx3NJqVSDEKR3eem2zWS7EPqbjGkAVWckvMck', //signer
    //   amount: 0.5,
    // })
    // console.log(response)

    const depositfx = async (stream) => {
        const response = await token.deposit({
            sender: '7pooGqVmBwRxrLR7xkEFyTaeaothEgUhjxYT7MEEg4Lo',
            token: '4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU',
            amount: 1
        })
        console.log(response)
    }

    return(
        <div>
            <h1>Sandbox</h1>
            <p>{`public key: ${props.keyprop}`}</p>
            <button onClick={() => {depositfx(token)}}>deposit.</button>
        </div>
    )
}