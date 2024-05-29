// const scrambledArray = ["student", "of",true, 123, "am", "a", "GIAIC", "I"];
const scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];


                                            
let word_I = scrambledArray[7];                          
let word_Student = scrambledArray[0];
let word_Of = scrambledArray[1];
// scrambledArray.splice(1,0)
let rightArray = scrambledArray
rightArray.pop()
rightArray.shift()
rightArray.splice(0,3)
rightArray.unshift(word_I)
rightArray.splice(3,0,word_Student)
rightArray.splice(4,0,word_Of)

let Right_Sentence = `       "${rightArray.join(' ')}"`


console.log(Right_Sentence);
// completed

