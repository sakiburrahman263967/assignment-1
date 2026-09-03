// Question 1 value detect korte hobe. typeof and truth/ falsy concept vevohar korte hobe 
function describeValue(value){
     let type = typeof value;
     let result;


     if (value) {
        result = "truthy"
     } else {
        result= "falsy"
     }

     return type + "  | " + result ;

     
}


// okay qusion 2 amader bola hoyeche jekono ekta day er name dile sheta working day naki wekand day or invalid day like moons day return korte hobe 
function getDayType(day){
    day = day.toLowerCase();



    switch (day){
        case "friday":
        case "saturday":

            return "Weekend";

        case "sunday":
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
            return "Working Day";

        default:
            return "Invalid Day";
    }
}






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


