function MyName()                // Myname is Function name
{
console.log("R")
console.log("O")
console.log("H")
console.log("A")
console.log("N")
}
MyName()


// parametres passing in function
function addTwoNumber (name1 ,name2) //this nam1 and name2 is parameters 
{
    console.log(name1 + name2)
}
addTwoNumber("Rohan" ,"Lokhande")     //this Rohan And Lokhande arre arrguments or values



//if-else in function

function validuswername (username)
{
  return "${username}just logg in"
}
console.log(validuswername("Rohan"))


//rest oprator (...abc)
function Restoprator (...num1) 
{
  return num1
}
console.log(Restoprator(200,300,400,500))