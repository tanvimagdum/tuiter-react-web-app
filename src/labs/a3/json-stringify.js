function JsonStringify() {
    let numberArray1 = [1, 2, 4, 5, 6];
    const square = a => a * a;
    const squares = numberArray1.map(square);

    return(
        <div>
            <h2>JSON Stringify</h2>
            squares = { JSON.stringify(squares) } <br />
        </div>
    );
}

export default JsonStringify;