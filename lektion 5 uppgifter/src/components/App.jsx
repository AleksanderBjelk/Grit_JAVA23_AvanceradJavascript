import { Gameover } from "./Gameover.jsx";

export function App() {

    const user1 = {

        username: "Clara",
        points: "1000",
        playerdeath: "by falling at class"
    }

    const user2 = {
        username: "Alekdrop",
        points: "828",
        playerdeath: "heart-failure"
    }


    return (
        <>

        <Gameover user= {user1}/>
        <Gameover user= {user2}/>

        </>
        // <>
        // <h1>App</h1>
        // <p>test</p>
        // </>
    );
}
