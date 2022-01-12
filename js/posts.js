function loadUser(){
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => displayPosts(data))

}
loadUser()
function displayPosts(posts){
    const postContainer = document.getElementById('posts');
 for (const post of posts){
   const div = document.createElement('div');
   div.classList.add('post')
   div.innerHTML = ` 
   <h2>${post.title}</h2>
   <P> ${post.body} </P>
   `;
   postContainer.appendChild(div);
    
 }

}

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
