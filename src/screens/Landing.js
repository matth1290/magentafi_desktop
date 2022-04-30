import { useEffect } from "react";

function Landing(props) {
    const initLoginObj = async () => {
        await props.openlogin.init();
    }
    useEffect( () => {
        initLoginObj();
    }, [])
    const logoutFx = async () => {
        await props.openlogin.logout();
        props.setLoggedIn(false)
    }
    return (
        <div> 
            <h1>Landing Page</h1>
            <p>{props.openlogin.privKey ? 'priv key: ' + props.openlogin.privKey : null}</p>
            <button onClick={logoutFx}>Log out</button>
        </div> 
    )
};

export default Landing