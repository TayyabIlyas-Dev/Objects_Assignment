type frnds ={
    firstName:string,
    lastName:string,
    id:number
}
type people= {
    friends:frnds[] ,
};


let People:people={
    friends:[]
}
let frnd1 ={
    firstName:'taha',
    lastName:'khan',
    id:101,
};
let frnd2 ={
    firstName:'taha',
    lastName:'khan',
    id:102,
};
let frnd3 ={
    firstName:'taha',
    lastName:'khan',
    id:103,
};

People.friends.push(frnd1,frnd2,frnd3)
console.log(People);


                //  ****completed****