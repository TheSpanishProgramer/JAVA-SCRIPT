const posts = [{
    title: 'Post1',
    body:'this is post one'
  },
  {
    title: 'Post2',
    body: 'this is post two'
  }];
  
  function getPost() {
      setTimeout(() => {
        let output = '';
        posts.forEach((post) => {
          output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
      }, 1000); 
  }
  
  function createPost(newPost) {
  
      return new Promise((resolve, reject) => {
          setTimeout(() => {
  
            posts.push(newPost);
  
            const err = false;
  
            if(!err) {
              resolve();
            } else {
              reject('Error: Something went wrong!');
            }
  
          }, 1000);
      })
  }
  
  createPost({ title: 'Post3', body: "This is post three"}).then(res => getPost()).catch(err => console.log(err));