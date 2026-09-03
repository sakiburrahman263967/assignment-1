// okay qustion3 bola hoyecche ekta validUserName function banate hobe jeta user name niye nirdrishto niyom golo cheak korbe she ono jayi Too Short No Space Allowed Reserved Word or Available return korbe
function  validateUsername (username){

    if(username.lenght < 4 ){
        return "Tooooo short";
    }

     if (username.includes(" ")) {
        return "No Space Allowed";
    }

      if (username.toLowerCase().includes("admin")) {
        return "Reserved Word";
    }

    return "Available";
    
   
}

console.log(validateUsername("rahim123"));
console.log(validateUsername("ab"));
console.log(validateUsername("a b"));
console.log(validateUsername("abcd"));
console.log(validateUsername("rahim islam"));
console.log(validateUsername("superadmin99"));
console.log(validateUsername("Admin_Rahim"));