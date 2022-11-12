let set1 = [3, 1, 7, 9];
let set2 = [2, 4, 1, 9, 3];
// let arr = set1.concat(set2);
// let arr_filter = removeDuplicates(arr);
let count = [];
let arr = [];
// let longest_arr = set1.length > set2.length ? set1 : set2;
// let shortest_arr = set1.length < set2.length ? set1 : set2;
// console.log(longest_arr);
// console.log(shortest_arr);
// for (let i = 0; i < set1.length; i++){
//     for (let j = 0; j < set2.length; j++){
//         if (arr_filter[i] == arr[j]){
//             count ++;
//             // arr = longest_arr.splice(longest_arr[i]);
//             // console.log(arr);
//     }
// }
// if (count > 1){
//     arr_filter = arr_filter.splice(arr_filter[i]);
// }
// console.log(arr_filter);
// }
// console.log(arr_filter);
// // console.log(removeDuplicates(arr));
//     function removeDuplicates(arr) {
//         return arr.filter((item,
//             index) => arr.indexOf(item) === index);
//     }
for (let i of set1){
    for (let j of set2){
        if (i !== j){
            arr = count.push(i);
        }
    }
    console.log(count);
}
console.log(count);