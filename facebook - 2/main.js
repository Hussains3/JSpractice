var database = [
    {
        username: "Sabbir",
        password: "password"
    },
    {
        username: "Dip",
        password: "1234"
    },
    {
        username: "Alamin",
        password: "11111"
    },
    {
        username: "Reza",
        password: "55555"
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




function isUserValid(username,password) {
    for(var i=0; i < database.lemgth;i++){
        if(database[i].username === username && database[i].password === password){
            return true;
        }
    }
    return false;
}

function singIn(username, password) {

    if (isUserValid(username,password)) {
        console.log(newsFeed);
    }else{
        alert("Wrong user name and password");
    }
}


var puname = prompt("Your username");
var pp = prompt("Password");
singIn(puname,pp);
