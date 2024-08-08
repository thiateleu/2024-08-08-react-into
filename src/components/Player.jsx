function Player(props) {
    // props is an object that contains all of the things that I passed in
    // we need to refer to those things with the same name that we used when we passed them in
    // console.log(props.whichPlayer)

    // this is my return, which shows what will render when i call this component
    // this is ALL jsx in the return, so there needs to be one outermost HTML element
    // BUT ALSO if I'm using a variable, I need to use {}
    return (
        <div className={props.whichPlayer}>
            <h2>Player {props.whichPlayer}</h2>
            <h3>Wins: </h3>
        </div>
    )
}

export default Player; 