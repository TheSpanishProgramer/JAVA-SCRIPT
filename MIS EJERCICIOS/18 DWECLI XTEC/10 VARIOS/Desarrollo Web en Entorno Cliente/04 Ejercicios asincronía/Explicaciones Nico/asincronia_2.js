function getUser(callback) {
    setTimeout(() => {
        callback(null, { user: "Alberto" });
    }, 1000) 
}

function getStaff(callback){ 
    setTimeout(() => {
        callback(null, { user: "Nico" });
    }, 2000)
}

function print(result){
    console.log("Este es el resultado: " + JSON.stringify(result));
}

(() => {
    var result = [];
    getUser((errUser, user) => {
        result.push(user);
        console.log("User pushed");
        getStaff((errStaff, staff) => {
            result.push(staff);
            console.log("Staff pushed");
            
            print(result);
        })
    })
})();
