let Rohan={
    name :"Rohan Lokhande",
    age : 20,
    location: "Pune",
    email: "rohanlokhande1306@gmail.com"
};

Rohan.email = "Rohan@chatgpt.com"  // Replace email value
Object.freeze(Rohan)
Rohan.email = "Rohan@microsoft.com"

// console.log(Rohan["name"])
// console.log(Rohan["location"])
// console.log(Rohan["email"])
                  
console.log(Rohan)