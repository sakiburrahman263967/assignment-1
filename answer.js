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


// okay qustion4  te bolse distance, waiting time ar night kina—ei 3ta diye CNG-er total vara calculate kore return korte hobe.
function getCngFare (distance, isNight = false, waitingMinutes = 0 ){
    let fare = 50;



       if (distance > 2) {
        fare = fare + (distance - 2) * 15;
    }

     fare = fare + waitingMinutes * 2;

    if (isNight == true) {
        fare = fare * 1.20;
    }


      return fare;
}
