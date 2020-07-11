let mamal = {
  brainy: true
};

let human = {
  __proto__: mamal,
  teeth: 32,
  height: '6.2'
};

let gwen = {
  age: 19,
  __proto__: human
};

// with proto you instuct JavaScript to ask another object if this one doesn't have the answer
// prototype chain can be very long
console.log(gwen);


// if you don't wanna go don't the protopype chain there is an built in function called hasOwnProperty
console.log(gwen.height); // will return "6.2"
console.log(gwen.hasOwnProperty('height')); // but this will return false

let ob1 = {};
// adding property on top level proto will make this available to ANY object on your code base, bad practise?
ob1.__proto__.customFunc = "do custom things";

let ob2 = {};
ob2['prop'] = 'myProp';

console.log(ob2.customFunc); // will return "do custom things" !!
