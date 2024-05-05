const baseURL = 'https://restrictions-6ead1-default-rtdb.europe-west1.firebasedatabase.app/main';

// Create a node in your name using a patch request
const createNameBtn = document.querySelector('#createName');
createNameBtn.addEventListener('click', createName)

async function createName(){
    const url = baseURL + '.json';
    const newName = {
        clara: {
            age: 37
        }
    }
    const options = {
        method: 'PATCH',
        body: JSON.stringify(newName),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }

    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
}

// Send a get request for everything in the "main" node
async function getMain(){
    const url = baseURL + '.json';
    const response = await fetch( url);
    const data = await response.json();
    console.log(data);
}
getMain();

// Posta vad som helst till ditt namn
const postBtn = document.querySelector('#post');
postBtn.addEventListener('click', async ()=>{
    const url = baseURL + '/clara.json';

    const newObj = {
        test: 'okejdå... ett test till x2'
    }

    const options = {
        method: 'POST',
        body: JSON.stringify(newObj),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
})

// Delete en post med ett specifikt id
const delBtn = document.querySelector('#delete');
delBtn.addEventListener('click', async ()=>{
    const url = baseURL + '/clara/-NwiOAkrU8Nnpm5tB2EV.json';
    const options = {
        method: 'DELETE'
    };

    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
})

//För att Demonstrera skillnaden mellan patch och put
const putBtn = document.querySelector('#put');
putBtn.addEventListener('click', async ()=>{
    const url = baseURL + '/clara.json';

    const newData = {
        age: 11
    }
    const options = {
        method: 'PUT',
        body: JSON.stringify(newData),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    };

    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
})