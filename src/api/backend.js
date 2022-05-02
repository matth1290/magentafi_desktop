async function test() {
    try {
        const response = await fetch(process.env.REACT_APP_BASE_URL,
        {
            method: 'GET',
        })
        const json = await response.text();
        console.log(json);
    } catch (error) {
        console.error(error);
    }
}

async function signup() {
    try {
        
    } catch (error) {
        console.error(error)
    }
}

export { test, signup }