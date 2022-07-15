function fetch(url) {
    return new Promise((resolve, reject) => {

        if (url.substring(0,23) !== 'https://www.example.com') {
            reject('invalid url');
        }

        // calc response data
        const endpoint = url.substring(24,url.length);
        console.log(endpoint)
        let data;
        switch (endpoint) {
            case "colors":
                data = COLOR_DATA;
                break;
            case "emojis":
                let emojisData = {}
                for (let i=0; i < 100; i++) {
                    const index = Math.round(Math.random() * 1874);
                    const key = Object.keys(EMOJIS_DATA)[index];
                    const url = EMOJIS_DATA[key];
                    emojisData[key] = url;
                }
                data = emojisData;
                break;
            default:
                reject('invalid endpoint');
        }

        // wait before resolving the promise
        setTimeout(
            () => resolve(
                new Response(JSON.stringify(data))
            ),
            Math.random() * 1000 // randomize timeout delay (in ms)
        )
    });
}