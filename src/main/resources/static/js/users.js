// Call the dataTables jQuery plugin
$(document).ready(function() {
usersLoad();
  $('#users').DataTable();
});

async function usersLoad(){

  const request = await fetch('api/users', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  });
  const users = await request.json();


let htmlList = '';
for (let user of users )
{
let btnDelete ='<a href="#" onclick="deleteUser('+user.id+ ')" class="btn btn-danger btn-circle btn-sm"><i class="fas fa-trash"></i></a>';
let userHtml = '<tr> <td>10456655</td> <td>'+user.name+ ' '+user.lastname+'</td> <td>'
+user.email+'</td> <td>'+user.phone
+'</td><td>'+ btnDelete + '</td></tr>';
htmlList += userHtml;
}
  console.log(users);

document.querySelector('#users tbody').outerHTML = htmlList;
}

async function deleteUser(id){

if (!confirm('¿Desea eliminar este usuario?'))
{
    return;
}
const request = await fetch('api/users/' + id, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  });
location.reload();
}