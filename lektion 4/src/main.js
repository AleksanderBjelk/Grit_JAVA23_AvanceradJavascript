import { usersRef } from "./modules/firebaseConfig";
import { onValue } from "firebase/database";

onValue(usersRef, snapshot => {
    console.log(snapshot.val());
})