// okay qustion3  te bolse distance, waiting time ar night kina—ei 3ta diye CNG-er total vara calculate kore return korte hobe.
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

console.log(getCngFare(2));