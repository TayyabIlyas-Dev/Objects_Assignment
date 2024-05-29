// const scrambledArray = ["student", "of",true, 123, "am", "a", "GIAIC", "I"];
var scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];
var word_I = scrambledArray[7];
var word_Student = scrambledArray[0];
var word_Of = scrambledArray[1];
// scrambledArray.splice(1,0)
var rightArray = scrambledArray;
rightArray.pop();
rightArray.shift();
rightArray.splice(0, 3);
rightArray.unshift(word_I);
rightArray.splice(3, 0, word_Student);
rightArray.splice(4, 0, word_Of);
var Right_Sentence = "       \"".concat(rightArray.join(' '), "\"");
console.log(Right_Sentence);
