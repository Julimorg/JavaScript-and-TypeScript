const getJSON = async function(url){
    try{
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return await response.json();
    }catch(e){
        alert(`${e.message}`);
    }
}

const get3countries = async function(c1, c2, c3) {
    try {
        // const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);
        // const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);
        // const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);
        const data = await Promise.all(
            [
            getJSON(`https://restcountries.com/v2/name/${c1}`),
            getJSON(`https://restcountries.com/v2/name/${c2}`),
            getJSON(`https://restcountries.com/v2/name/${c3}`)
            ]
        );
        console.log(data);
        console.log(data.map(data => {
            return data[0].capital;
        }));
    }catch(err)
    {
        console.error(`${err.message}`);
    }
}

get3countries("vietnam","japan","korea");   