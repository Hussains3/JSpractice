var koro = [
    "get up",
    "brush teeth",
    "clean table",
    "study",
    "breakfast",
    "exercise",
    "learn JS"
];

var koroLength = koro.length;
for (var i = 0;i<koroLength;i++){
    //console.log(koro[i]+"!");
    koro[i] = koro[i] + "!"
    //koro.pop();
}



var num = 0;
while (num < 5) {
    console.log(num++);
}



var gonona = 10
do {
    console.log(gonona);
    gonona--
} while (gonona>0);



koro.forEach(function(i) {
    console.log(i);
})



 