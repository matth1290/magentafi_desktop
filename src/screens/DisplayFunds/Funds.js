import { useEffect, useState } from "react";
import {getBalance, getAccountInfo, getTokenBalance} from "../../solana/wallet";


function Funds({privKey}) {
    const [balance, setBalance] = useState(0);
    const [usdcBalance, setUSDCBalance] = useState(0);

    const getUSDCBalance = async () => {
        try {
          const usdcAddress = '4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU';
          console.log('before fetting usdc balance')
          const balance = await getTokenBalance(privKey, usdcAddress);
          console.log("geting usdc balance")
          setUSDCBalance(balance.toFixed(2));
          setBalance(balance.toFixed(2));
        } catch (e) {
          console.error(e);
        }
    }

    useEffect(() => {
        getUSDCBalance();
    }, []);
   
    return (
        <div>
            <h1>View Funds</h1> 
            <p>USDC Balance: {usdcBalance}</p>           
        </div>
    )
}

export default Funds;