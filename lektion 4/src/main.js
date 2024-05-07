import { usersRef, db } from "./modules/firebaseConfig.js";
import { onValue, ref, update, push } from "firebase/database";
import { displayUsers } from "./modules/display.js";

onValue(usersRef, (snapshot) => {
    const users = snapshot.val();
    displayUsers(users);
});

document.querySelector("#batmanForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const batmanRef = ref(db, "users/dfds");

    const newScore = document.querySelector("#batmanScore").value;
    update(batmanRef, { score: newScore });
});

const newUserForm = document.querySelector("#addUser");
newUserForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.querySelector('#newUserName').value;
    const score = document.querySelector('#newUserScore').value

    const newID = push(usersRef).key;
    const newUser = {};
    newUser[newID] = { name, score };
    console.log(newUser);
    update(usersRef,newUser);
});
