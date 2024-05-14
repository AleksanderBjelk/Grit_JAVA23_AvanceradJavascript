import { ProfileCard } from "./ProfileCard.jsx";
import { PropComponent } from "./PropComponent.jsx";

export function App() {
    const user1 = {
        username: "Clara",
        imgUrl: "https://thumbor.forbes.com/thumbor/fit-in/1290x/https://www.forbes.com/advisor/wp-content/uploads/2023/07/top-20-small-dog-breeds.jpeg.jpg",
        likes: ["Dogs", "Cats", "Chorrus", "Karl"],
    };

    const user2 = {
        username: "Aleksam",
        imgUrl: "wkefefw.jpg",
        likes: ["Bilar", "gymmet", "Chorrus", "big mammas XXL rulle"],
    };

    return (
        <>
            <ProfileCard user={user1} />
            <ProfileCard user={user2} />
            <PropComponent prop1='ett' entill= 'ännu en' age= {34}/>
        </>
        // <>
        // <h1>App</h1>
        // <p>test</p>
        // </>
    );
}
