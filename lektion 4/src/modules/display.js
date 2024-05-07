
import { db } from "./firebaseConfig";
import { ref, remove } from "firebase/database";

export function displayUsers(usersObj) {
    const container = document.querySelector("#usersContainer");
    container.innerHTML = ""

    for (const key in usersObj) {
        const user = usersObj[key];

        const userDiv = document.createElement("div");
        userDiv.id = key;

        const userNameEl = document.createElement("h1");
        const scoreEl = document.createElement('p');
    
        userNameEl.innerText = user.name;
        scoreEl.innerText = user.score;

        userDiv.append(userNameEl, scoreEl);
    
        container.append(userDiv);


        userDiv.addEventListener('click', event =>{
            const firebaseID = event.currentTarget.id;
            console.log(firebaseID); 

            const userToremoveRef = ref(db, 'users/'+firebaseID);
            remove(userToremoveRef);
        })
    }
}
