import React, { useState } from "react";
import Greeting from "./Greeting";
import Number from "./Number";
import Button from "./Button";
import Dog from "./Dog";

export function App() {
    const [isFirst, setIsFirst] = useState(true);

    return (
        <>
            <Greeting isFirst={isFirst} />
            <Button isFirst={isFirst} setIsFirst={setIsFirst} />
            <Number />
            <Dog />
        </>
    );
}
