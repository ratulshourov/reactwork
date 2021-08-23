function Hello(props) {
    function test() {
        alert("Ok");
    }
    return (
        <div>
            <button onClick={test}>Click Me </button>
            Name: {props.name}
            Name: {props.profession}
        </div>

    );

}

export default Hello;