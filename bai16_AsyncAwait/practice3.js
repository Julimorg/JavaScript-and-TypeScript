const getJSON = async function(url){
    try {
        const response = await fetch(url);
        if(!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return await response.json();
    }catch(e){
        console.error(`${e.message}`);
    }
}

const display = async function() {
    const res = await Promise.race([
        getJSON(`https://restcountries.com/v2/name/italy`),
        getJSON(`https://restcountries.com/v2/name/vietnam`),
        getJSON(`https://restcountries.com/v2/name/japan`),
    ]);
    console.log(res[0]);
}
display();