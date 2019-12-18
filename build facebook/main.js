var database = [
    {
        username: "Sabbir",
        password: "password"
    }
];
var newsFeed = [
    {
        username: "Sabbir",
        timeline: "Ato porar chap!"
    },
    {
        username: "Dip",
        timeline: "Dekhben jal hobe ghuni!"
    }
];


var puname = prompt("Your username");
var pp = prompt("Password");



function singIn(puser, ppass) {
    if (puser === database[0].username &&  ppass === database[0].password) {
        console.log(newsFeed);
    }else{
        alert("Wrong user name and password");
    }
}

singIn(puname,pp);
