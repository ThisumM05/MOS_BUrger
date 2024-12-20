
loadData();

let userData = null;

function loadData() {
    fetch("admin.json").then(convertToJson).then(logData).catch();
}

function convertToJson (response){
    return response.json();
}

function logData (d){
    userData = d;
    console.log(userData);
}


async function login(){
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
console.log(userData, username, email, password);

    if (username=="" && email=="" && password==""){
        alert("Please entet details");
        console.log("Please enter details");
return;
    }

    const user = userData.find(u => u.username == username);

     if (user && username === user.username && email === user.email && password === user.password) {
        console.log(username,email,password);  

        setTimeout(() => {
        window.location.href="Order.html";
        },100);
        return;
      }

    else {
      alert("There was a problem logging in");
      }
}
