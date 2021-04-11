function getPosts() {
	return new Promise(function(resolve, reject) {
	var req = new XMLHttpRequest();
		req.open('GET', 'https://jsonplaceholder.typicode.com/posts');

		req.onload = function() {
		  if (req.status == 200) {
			resolve(JSON.parse(req.response));
		  }
		  else {
			reject();
		  }
		};

		req.send();
	})
}

var promises = [
	getPosts(),
  getPosts()
];

Promise.all(promises).then(results => {
	console.log(results)
})