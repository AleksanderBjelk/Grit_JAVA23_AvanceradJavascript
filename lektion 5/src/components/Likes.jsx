export function Likes({likes}){
    return(
        <ol>
            {/* <li>{likes[0]}</li>
            <li>{likes[1]}</li>
            <li{likes[2]}></li> */}
            {likes.map(like => <li> {like} </li>)}
        </ol>
    )
}