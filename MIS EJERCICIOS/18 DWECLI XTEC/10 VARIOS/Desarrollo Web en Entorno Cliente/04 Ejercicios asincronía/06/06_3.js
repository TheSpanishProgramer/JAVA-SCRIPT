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
  async function createPost(newPost) {
      let promise = new Promise((resolve, reject) => {
          setTimeout(() => {
  
            posts.push(newPost);
  
            const err = false;
  
            if(!err) {
              resolve();
            } else {
              reject('Error: Something went wrong!');
            }
  
          }, 1000);
      });
      let result = await (getPost());
  }
  
  createPost({ title: 'Post3', body: "This is post three"});