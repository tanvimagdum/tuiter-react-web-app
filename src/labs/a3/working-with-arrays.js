import AddingAndRemovingDataToFromArrays from "./adding-and-removing-data-to-from-arrays";
import ArrayIndexAndLength from "./array-index-and-length";
import FilterFunction from "./filter-function";
import FindFunction from "./find-function";
import FindIndex from "./find-index-function";
import ForLoops from "./for-loops";
import JsonStringify from "./json-stringify";
import MapFunction from "./map-function";

function WorkingWithArrays() {
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ['string1', 'string2'];
    var functionScoped = 2;
    let blockScoped = 5;
    let constant1 = -3;
    let variableArray1 = [
       functionScoped,
       blockScoped,
       constant1,
       numberArray1,
       stringArray1
    ];    

    console.log("Working with arrays");
    console.log(numberArray1);
    console.log(stringArray1);
    console.log(functionScoped);
    console.log(blockScoped);
    console.log(constant1);
    console.log(variableArray1);

    return(
        <div>
            <h2>Working with Arrays</h2>
            numberArray1 = {numberArray1}<br/>
            stringArray1 = {stringArray1}<br/>
            variableArray1 = {variableArray1}<br/>
            <ArrayIndexAndLength/>
            <AddingAndRemovingDataToFromArrays/>
            <ForLoops/>
            <MapFunction/>
            <JsonStringify/>
            <FindFunction/>
            <FindIndex/>
            <FilterFunction/>
        </div>
    );
}

export default WorkingWithArrays;