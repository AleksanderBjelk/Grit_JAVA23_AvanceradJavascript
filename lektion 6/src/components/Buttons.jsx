function Button() {
    let cssColor = "bg-blue";

    function handleClick(event) {
        console.log(event.target);
    }

    function handleEnter() {
        cssColor = "bg-pink";
        console.log('enter', cssColor);
    }
    function handleLeave() {
        cssColor = "bg-blue";
        console.log('enter', cssColor);
    }

    return (
        <button
            onClick={handleClick}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            className={cssColor}
        >
            Klicka mig!
        </button>
    );
}

export default Button;
