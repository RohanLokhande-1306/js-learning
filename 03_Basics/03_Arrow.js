const user = 
{
    username: "Rohan",
    price: 499,

    welcomeMessage: function()
    {
        console.log(`${this.username}, welcome to website`)   //this is use for current context 
    }
}

user.welcomeMessage()       //OUTPUT:-  Rohan, Welcome to website
user.username = "Shiva"     //change the context
user.welcomeMessage()      //OUTPUT:-  Shiva, Welcome to website 

function GitHub()
{
    let username = "Rohan"
    console.log(this.username);     //undefined
}
GitHub()

const student = () =>
{
    let username = "Rohan"
    console.log(this.username);       //undefined
}
student()

//                  Normal Arrow function

const addTwoNumber = (num1,num2) =>
{
    return num1 + num2
}
console.log(addTwoNumber(13,7))

//                  implicet return Arrow function 

const addNumber = (num1,num2) => num1 + num2
console.log(addNumber(13,7))