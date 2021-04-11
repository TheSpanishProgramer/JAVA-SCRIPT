async function loadJson(url) {
    let promise = new Promise((resolve, reject) => {
        if (response.status == 200) {
            return response.json();
        } else {
            throw new Error(response.status);
        }
    });
    let result = await (url);
    alert(result);
}
loadJson('no-such-user.json');