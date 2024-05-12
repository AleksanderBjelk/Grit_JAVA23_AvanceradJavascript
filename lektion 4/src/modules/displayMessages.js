import { db } from "./firebaseConfig";
import { get, ref } from "firebase/database";

export function displayMessages() {
    const messagesContainer = document.querySelector("#messagesContainer");
    messagesContainer.innerHTML = "";

    const messagesRef = ref(db, "messages");
    get(messagesRef).then((snapshot) => {
        if (snapshot.exists()) {
            const messages = snapshot.val();

            for (const messageId in messages) {
                const message = messages[messageId];
                const messageDiv = document.createElement("div");
                const messageText = document.createElement("p");

                console.log("hejehje");

                messageText.textContent = message.text;

                messageDiv.appendChild(messageText);
                messagesContainer.appendChild(messageDiv);
            }
        } else {
            console.log("No messages found");
        }
    }).catch((error) => {
        console.error("Error getting messages: ", error);
    });
}