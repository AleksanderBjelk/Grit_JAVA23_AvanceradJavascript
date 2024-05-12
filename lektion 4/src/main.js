import { usersRef, db } from "./modules/firebaseConfig.js";
import { onValue, ref, update, push } from "firebase/database";
import { displayUsers } from "./modules/display.js";
import { displayMessages } from "./modules/displayMessages.js";

onValue(usersRef, (snapshot) => {
    const users = snapshot.val();
    displayUsers(users);

    const selectUser = document.querySelector("#selectUser");
    for (const key in users) {
        const user = users[key];
        const option = document.createElement("option");
        option.value = key;
        option.textContent = user.name;
        selectUser.appendChild(option);
    }
});

document.querySelector("#writeMessage").addEventListener("submit", (event) => {
    event.preventDefault();

    const message = document.querySelector("#newChatMessage").value;
    const selectedUser = document.querySelector("#selectUser").value;

    const messageRef = ref(db, `messages/${selectedUser}`);
    push(messageRef, { text: message });

    document.querySelector("#newChatMessage").value = "";
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

    const name = document.querySelector("#newUserName").value;
    const score = document.querySelector("#newUserScore").value;

    const newID = push(usersRef).key;
    const newUser = {};
    newUser[newID] = { name, score };
    console.log(newUser);
    update(usersRef, newUser);
});


displayMessages();