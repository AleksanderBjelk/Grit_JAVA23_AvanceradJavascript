import { ProfilePic } from "./ProfilePic.jsx"
import { Username } from "./Username.jsx"
import { Likes } from "./Likes.jsx"


export function ProfileCard({user}){
    
    const {username, imgUrl, likes} = user;

    return(
        <div>
            <ProfilePic imgUrl={imgUrl}/>
            <Username username={username}/>
            <Likes likes={likes}/>
        </div>
    )
}