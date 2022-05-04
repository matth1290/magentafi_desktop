import { useEffect, useState } from "react";
import * as solanaWeb3 from '@solana/web3.js';
import { signup, test } from "../api/backend";


function Landing(props) {
    const [loading, setLoading] = useState(true);
    const [kp, setKP] = useState(null);
    const authFx = async (pubkey, privKey) => {
        const signupObj = await signup(pubkey, privKey);
        if (true) { // user exists
            //login, set token
            //check for business
            //if no business, send to add business
            //if business, continue
        } else { //new user
            //set token
            //send to add business
        }
    }
    const initLoginObj = async () => {
        try {
            await props.openlogin.init();
            const seed = Uint8Array.from(props.openlogin.privKey).slice(0, 32);
            const account = solanaWeb3.Keypair.fromSeed(seed);
            setKP(account)
            authFx(account.publicKey.toString(), account.secretKey.toString())
            setLoading(false);
        } catch (error) {
            console.error(error)
        }
    }
    useEffect( () => {
        initLoginObj();
    }, [])
    const logoutFx = async () => {
        await props.openlogin.logout();
        props.setLoggedIn(false)
    }
    if (loading) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    } else {
        return (
            <div> 
                <h1>Landing Page</h1>
                <p>{'priv key: ' + props.openlogin.privKey}</p>
                <p>{'sol pub key: ' + kp.publicKey.toString()}</p>
                <button onClick={logoutFx}>Log out</button>
            </div> 
        )
    }

};

export default Landing