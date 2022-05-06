// import * as zebec from "../api/zebec"
// import * as zebec from "zebecprotocol-mainnet";
import * as wallet_adapter from "@solana/wallet-adapter-react";

export default function Sandbox() {
    // const token = zebec.StreamInitToken();
    const connection = wallet_adapter.useConnection()
    console.log(connection)

    return (
        <div>Sandbox</div>
    )
}