var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';
var dinosaurUpperCased = dinosaur.toUpperCase();
var textCharsAfter = text.replace('Velociraptor', dinosaurUpperCased);
var newText = text.substr(0, textCharsAfter.lenght/2);

console.log(dinosaurUpperCased);
console.log(textCharsAfter);
console.log(newText);

