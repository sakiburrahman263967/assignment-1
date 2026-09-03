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









// oakyyy qustion5 e bola hoyeche target, scored ar koto ball baki ache—ei 3ta diye calculate kore bolte hobe team jitte parbe kina, ar jitle/tough hole required run rate onujayi verdict dite hobe.


const getChaseVerdict = (target, scored, ballsLeft) => {

    let runsNeeded = target - scored;


    if (runsNeeded <= 0) {
        return "Won";
    }



    if (ballsLeft <= 0) {
        return "Lost";
    }


    let requiredRate = (runsNeeded / ballsLeft) * 6;

    let verdict;

    if (requiredRate <= 6) {
        verdict = "Comfortable";
    } else if (requiredRate <= 12) {
        verdict = "Tough";
    } else {
        verdict = "Almost Impossible";
    }


    return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;
};
