import jsSHA from "jssha";

async function test() {
    try {
        const response = await fetch(process.env.REACT_APP_BASE_URL,
        {
            method: 'GET',
        })
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

async function signup(pkSol, skSol) {
    try {
        const shaObj = new jsSHA("SHA-256", "TEXT", { encoding: "UTF8" });
        shaObj.update(skSol);
        const hash = shaObj.getHash("UINT8ARRAY");
        const pwd = hash.toString()
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/signup`,
        {
          method: 'POST',
          body: JSON.stringify({
            publicKey: pkSol,
            password: pwd
          }),
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          }
        })
        console.log(response);
        return response;
    } catch (error) {
        console.error(error)
    }
}

async function login(pkSol, skSol) {
    try {
        const shaObj = new jsSHA("SHA-256", "TEXT", { encoding: "UTF8" });
        shaObj.update(skSol);
        const hash = shaObj.getHash("UINT8ARRAY");
        const pwd = hash.toString();
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/login`,
        {
          method: 'POST',
          body: JSON.stringify({
            publicKey: pkSol,
            password: pwd
          }),
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          }
        })
        console.log(response);
        return response;
    } catch (error) {
        console.error(error);
    }
}

async function getBusiness(pkSol, token) {
    try {
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/business/${pkSol}`,
        {
            method: 'GET',
            headers: {
            Authorization: `Bearer ${token}`
            }
        })
        console.log(response);
        return response;
    } catch (error) {
        console.error(error)
    }

}

export { test, signup, login }