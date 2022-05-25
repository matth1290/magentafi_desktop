import * as zebec from "zebecprotocol-mainnet";
import * as wallet_adapter from "@solana/wallet-adapter-react";
import { TokenStream } from "zebec-protocol/stream";

export const StreamInitToken = () => {
    const { connection } = wallet_adapter.useConnection();
    const { adapter } = wallet_adapter.useWallet();
    const token = new TokenStream(adapter, connection._rpcEndpoint);
    return token;
  };

//   import { NativeStream} from "zebecprotocol-mainnet";
// import { TokenStream } from "zebec-protocol/stream";
// import * as wallet_adapter  from "@solana/wallet-adapter-react";

// const StreamInitToken = () => {
//     const { connection } = wallet_adapter.useConnection();
//     const { adapter } = wallet_adapter.useWallet();
//     const token = new zebec.TokenStream(adapter, connection._rpcEndpoint);
//     return token;
// };

const Deposit = async () => {
    const response = await stream.deposit({
        sender: 'Av6xsgSrnM1UAj4pUZnEWM97iBphph69NPHE8J2ceeYs',
        token:'zebeczgi5fSEtbpfQKVZKCJ3WgYXxjkMUkNNx7fLKAF',
        amount: 1,
      });
   
   console.log(response);
   return response;
}

export {
    StreamInitToken,
    Deposit,


}