let sherlock = {
	surname: 'Holms',
  address: {
  	city: 'London'
  }
};

let john = {
	surname: 'Watson',
  address: sherlock['address']
};

// objects might appear nested, that's not the case in JS
// objects cannot be nested, each object is completely separate

console.log('john: ', john);

john.address.city = 'Belgrade';

console.log('john: ', john);

console.log('sherlock: ', sherlock);

// const vs let
// const prohibits variable reassignment - NOT object mutation
