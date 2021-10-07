// Call the dataTables jQuery plugin
$(document).ready(function() {
usersLoad();
  $('#users').DataTable();
  updateUserEmail();
});

function updateUserEmail(){
document.getElementById('txt-user-email').outerHTML = localStorage.email;
}

async function usersLoad(){

  const request = await fetch('api/users', {
    method: 'GET',
    headers:getHeaders()
  });
  const users = await request.json();
let htmlList = '';
for (let user of users )
{
let phone = user.phone == null ? '-' : user.phone;
let btnDelete ='<a href="#" onclick="deleteUser('+user.id+ ')" class="btn btn-danger btn-circle btn-sm"><i class="fas fa-trash"></i></a>';
let userHtml = '<tr> <td>'+user.id+'</td> <td>'+user.name+ ' '+user.lastname+'</td> <td>'
+user.email+'</td> <td>'+phone
+'</td><td>'+ btnDelete + '</td></tr>';
htmlList += userHtml;
}
  console.log(users);

document.querySelector('#users tbody').outerHTML = htmlList;
}

function getHeaders(){
return    {
             'Accept': 'application/json',
             'Content-Type': 'application/json',
             'Authorization': localStorage.token
           };
}

async function deleteUser(id){

if (!confirm('¿Desea eliminar este usuario?'))
{
    return;
}
const request = await fetch('api/users/' + id, {
    method: 'DELETE',
    headers: getHeaders()
  });
location.reload();
}