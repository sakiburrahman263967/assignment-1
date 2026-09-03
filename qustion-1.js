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
console.log(describeValue ("helo"));
console.log(describeValue(""));
console.log(describeValue(25));
console.log(describeValue(0));
console.log(describeValue(true));
console.log(describeValue(null));
console.log(describeValue(undefined));

console.log(describeValue("0"));
console.log(describeValue(NaN));
