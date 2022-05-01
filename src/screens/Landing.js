import { useEffect, useState } from "react";

function Landing(props) {
    const [loading, setLoading] = useState(true);
    const initLoginObj = async () => {
        await props.openlogin.init();
        setLoading(false);
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
                <button onClick={logoutFx}>Log out</button>
            </div> 
        )
    }

};

export default Landing