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

const user = 
{
  name: "Rohan",
  price : 199  
}

//object pass through function
function handleUser(user)
{      
  console.log(`User name is ${user.name} price is ${user.price} only`)
}

//pass as arrgument
handleUser({                 
  name:"Shiv",
  price: 299
})         

//Array pass through funcrtion 

const myNewarray = [100,200,300,400,500]

function returnSecondValue(arrayvalue)
{
  return arrayvalue[2];
}
console.log(returnSecondValue(myNewarray));

