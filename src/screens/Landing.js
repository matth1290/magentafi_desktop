import { useEffect, useState } from "react";
import * as solanaWeb3 from '@solana/web3.js';
import { login, signup, test, getBusiness } from "../api/backend";
import {Link} from "react-router-dom";


function Landing(props) {
    const [loading, setLoading] = useState(true);
    const [kp, setKP] = useState(null);
    const authFx = async (pubkey, privKey) => {
        const signupObj = await signup(pubkey, privKey);
        if (signupObj.status === 409) { // user exists
            console.log('yuh')
            //login, set token
            const loginObj = await login(pubkey, privKey)
            props.setToken(loginObj.token)
            //check for business
            const businessObj = await getBusiness(pubkey, loginObj.token)
            //if no business, send to add business
            if (businessObj.status === 404) {
                props.openlogin.logout();
                props.setLoggedIn(false);
                alert('submit business info to access the portal.')
            }
            //if business, continue
        } else { //new user
            props.openlogin.logout();
            props.setLoggedIn(false);
            alert('create an account to access the portal.')
        }
    }
    const initLoginObj = async () => {
        try {
            await props.openlogin.init();
            const seed = Uint8Array.from(props.openlogin.privKey).slice(0, 32);
            const account = solanaWeb3.Keypair.fromSeed(seed);
            setKP(account)
            props.setKey(account.publicKey);
            // authFx(account.publicKey.toString(), account.secretKey.toString())
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
                <p>{'token: ' + props.token}</p>
                <Link to="/sandbox">Sandbox</Link>
                <Link to="/funds">View Funds</Link>
                <button onClick={logoutFx}>Log out</button>
            </div> 
        )
    }

};

export default Landing