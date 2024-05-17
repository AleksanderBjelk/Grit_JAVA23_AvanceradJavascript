import Loading from "./Loading";
import Result from "./Result";
import Error from "./Error";

export function App() {

    const status = 'result'

    return (
 
        <>
            <main>
                {status === 'loading' && <Loading/>}
                {status === 'error' && <Error/>}
                {status === 'result' && <Result/>}
            </main>
        </>
    );
}
