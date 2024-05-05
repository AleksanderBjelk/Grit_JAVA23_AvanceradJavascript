const getBtn = document.querySelector('#get');
getBtn.addEventListener('click', ()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then( response => response.json())
        .then( data => console.log(data));
})

const postBtn = document.querySelector('#post');
postBtn.addEventListener('click', ()=>{
    const newPost = {
        userId: 3,
        title: 'TEST',
        body: 'Jag testar'
    }

    const options = {
        method: 'POST',
        body: JSON.stringify(newPost),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    }

    fetch('https://jsonplaceholder.typicode.com/posts', options)
        .then( response => response.json())
        .then( data => console.log(data));
})


const putBtn = document.querySelector('#put');
putBtn.addEventListener('click', ()=>{
    const updatedPost = {
        id: 38,
        userId: 3,
        title: 'Uppdaterar',
        body: 'Jag uppdaterar'
    }

    const options = {
        method: 'PUT',
        body: JSON.stringify(updatedPost),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    }

    fetch('https://jsonplaceholder.typicode.com/posts/38', options)
        .then( response => response.json())
        .then( data => console.log(data));
})

const delBtn = document.querySelector('#delete');
delBtn.addEventListener('click', ()=>{

    const options = {
        method: 'DELETE'
    }
    fetch('https://jsonplaceholder.typicode.com/posts/38', options)
        .then( response => response.json())
        .then( data => console.log(data));
})