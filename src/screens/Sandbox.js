import { NativeStream, TokenStream } from "@zebec-protocol/stream";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";

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

export default function Sandbox(props) {
    // const { connection } = useConnection();
    // const { adapter } = useWallet();
    const token = new TokenStream(props.keyprop, connection.rpcEndpoint);
    console.log(props.keyprop);

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