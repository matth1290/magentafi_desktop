import { useEffect } from "react";
// import { getAccountInfo } from "../solana/wallet"

function Login(props) {
    const alreadyLoggedIn = async () => {
        await props.openlogin.init();
        if (props.openlogin.privKey) {
            console.log("User is already logged in. Private key: " + props.openlogin.privKey);
            props.setLoggedIn(true);
        }
    }
    useEffect(() => {
        try {
            alreadyLoggedIn()
        } catch (error) {
            console.error(error)
        }
    }, [])
    const loginFx = async () => {
        try {
            await props.openlogin.login({
                loginProvider: "google",
            });
            if (props.openlogin.privKey) {
                // const kp = await getAccountInfo(props.openlogin.privKey);
                // console.log(kp)
                props.setLoggedIn(true);
            } else {
                throw new Error('Login Error: Invalid Login')
            }
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <div>
            <h1>Login Screen</h1>
            <button onClick={loginFx}>Log in with Google</button>
        </div>
    )
}

export default Login;