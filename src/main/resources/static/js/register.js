$(document).ready(function() {
});

async function RegisterUser(){
let data ={};
data.name =document.getElementById('txtName').value;
data.lastname = document.getElementById('txtLastName').value
//data.phone = document.getElementById('txtPhone').value
data.email =document.getElementById('txtEmail').value
data.password = document.getElementById('txtPassword').value

let repeatPassword = document.getElementById('txtRepeatPassword').value

if (repeatPassword != data.password){
alert('The password inserted is different')
return;
}

  const request = await fetch('api/users', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
alert("The account is created.");
window.location.href = 'login.html'
}

