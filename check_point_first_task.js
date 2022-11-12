let userprompt = prompt();
let sentence = userprompt.toLowerCase();
let words = 0;
let vowels = 0;
for (let i of sentence){
    if (i == ' ' || i == '.'){
        words++;
    }
    if (i == 'a' || i == 'e' || i == 'u' || i == 'i' || i == 'o' || i == 'y'){
        vowels ++;
    }
}
console.log('In this sentence we have ',`${words}`,'words and', `${vowels}`, 'vowels');