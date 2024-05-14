import { Username } from "./Username"
import { Points } from "./Points"
import { Playerdeath } from "./Playerdeath"
import { Buttons } from "./Buttons";

export function Gameover({user}){

    const {username, points, playerdeath} = user;

    return(
        <div>
            <h1>GAME OVER</h1>
            <Username username={username}/>
            <Points points={points}/>
            <Playerdeath playerdeath={playerdeath}/>
            <Buttons/>
            
        </div>
    )
}