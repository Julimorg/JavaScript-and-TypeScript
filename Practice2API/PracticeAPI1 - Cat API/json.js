
const catAPI = "https://api.thecatapi.com/v1/images/search?limit=20&breed_ids=beng&api_key=REPLACE_ME"

const getJSON = async function(url)
{
    try{
        const response = await fetch (url);
        if (!response.ok) throw new Error(`Error! Response status: ${response.status}`);
        return await response.json();
    }catch(e)
    {
        alert(`${e.message}`);
    }
}

function show(){
    renderCatData();
}
show();
function renderCatData(){
    const cat = getJSON(catAPI);
    console.log(cat);
}