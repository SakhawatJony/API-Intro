function userInformationLoad(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => loadUser(data))





}

function loadUser(data){
const ul = document.getElementById('user');
for (const user of data){
    const li = document.createElement('li');
    li.innerText = `name:${user.name} email:${user.email}`
    ul.appendChild(li);
}


}