import Loading from "./Loading";
import Result from "./Result";
import Error from "./Error";
import { users } from "../utils/users";
import User from "./user";
import Timer from "./Timer";

export function App() {

    const status = 'result'

    return (
 
        <>
        <Timer/>
            <main>
                {status === 'loading' && <Loading/>}
                {status === 'error' && <Error/>}
                {status === 'result' && <Result/>}
            </main>

            {users.map( ({name, id}) => <User name={name} key={id}/>)}
        </>
    );
}
