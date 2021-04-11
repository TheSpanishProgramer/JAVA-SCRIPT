function getUser() {
    setTimeout(() => {
        console.log("Ahora devuelvo User");
        return { user: "Alberto" };
    }, 1000) 
}

function getStaff(){ 
    setTimeout(() => {
        console.log("Ahora devuelvo Staff");
        return { user: "Nico" };
    }, 2000)
}

function print(result){
    console.log("Este es el resultado: " + JSON.stringify(result));
}

(() => {
    var result = [];
    
    var user = getUser();
    result.push(user);
    
    console.log("User pushed");
    
    var staff = getStaff();
    result.push(staff);
    
    console.log("Staff pushed");
            
    print(result);
})();
