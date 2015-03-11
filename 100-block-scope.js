




// backets do not create function scope

var animal = "dog";
{
  var animal = "cat";
}

console.log(animal);  // -> cat
