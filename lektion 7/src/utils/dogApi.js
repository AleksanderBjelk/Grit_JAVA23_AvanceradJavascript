async function getAllBreeds(){
    const url = 'https://dog.ceo/api/breeds/list/all';
    const res = await fetch(url);
    const data = await res.json();

   return Object.keys(data.message);

}

async function getDogImage(breed){
    const url = `https://dog.ceo/api/breed/${breed}/images/random`;
    const res = await fetch(url);
    const data = await res.json();

    return data.message

}

export {getAllBreeds, getDogImage}