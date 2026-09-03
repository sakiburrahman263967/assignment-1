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

console.log(getDayType("Friday"));

