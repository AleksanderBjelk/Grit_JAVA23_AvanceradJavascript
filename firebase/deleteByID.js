const baseURL = 'https://restrictions-6ead1-default-rtdb.europe-west1.firebasedatabase.app/main';

async function getNodes(){
    const url = baseURL + '/clara.json';

    const response = await fetch(url);
    const nodes = await response.json();

    return nodes;
}


async function deleteNode(id){
    const url = baseURL + `/clara/${id}.json`;
    const options = {
        method: 'DELETE'
    }

    const response = await fetch(url, options);
    const data = await response.json();
}


function displayNodes(nodes){
    const container = document.querySelector('#container');
    container.innerHTML = '';

    // nodes är ett objekt som innehåller flera objekt
    // key kommer innehålla ett firebase-id
    // nodes[key] innehåller ett objekt som innehåller en egenskap: test
    for(const key in nodes){
        console.log(key, nodes[key]);

        const h1El = document.createElement('h1');
        h1El.innerText = nodes[key].test;

        // Varje h1-element får ett id som är av samma värde som firebase-id:t
        h1El.id = key;

        container.append(h1El);

        h1El.addEventListener('click', async (event)=>{
            console.log(event.target.id) 
            await deleteNode(event.target.id);

            // Hämta och visa allt i den uppdaterade databasen
            getNodes().then(displayNodes);
        })
    }
}

getNodes().then(displayNodes);