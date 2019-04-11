
function bannedWords(arr) {
    let filtered = arr.filter(function(value) {
        return value !== "not";
    });

    return filtered;
}

console.log("Original array words: " + "\"this\",\" is\",\" not\",\" nice\",\" not\",\" again\"")
const result1 = bannedWords(["this","is","not","nice","not","again"]);
console.log(result1);

function bubbleSort(arr) {
    let pre;

    for(let i=0; i<arr.length; i++){
        pre = 0;
        for(let j=1; j<arr.length; j++){
            if(arr[pre] > arr[j]){
                let temp = arr[pre];
                arr[pre] = arr[j];
                arr[j] = temp;
            }
            pre++;
        }
    }

    return arr;
}

console.log("Original array: " +"[6,4,0, 3,-2,1]")
const result2 = bubbleSort([6,4,0, 3,-2,1]);
console.log(result2);
