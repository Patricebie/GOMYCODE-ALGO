let set1 = [3, 1, 7, 9];
let set2 = [2, 4, 1, 9, 3];
let count = [];
let arr = [];
for (let i of set1){
    for (let j of set2){
        if (i !== j){
            arr = count.push(i);
        }
    }
    console.log(count);
}
console.log(count);
