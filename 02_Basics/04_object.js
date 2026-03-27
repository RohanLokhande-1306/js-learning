
const Instagram = new Object()  // Singleton object
const InstagramUser = {}        // NonSingleton obj
InstagramUser.name = "Michal";
InstagramUser.Id = "1234abc";
InstagramUser.isLoggedIn = false;

//console.log(InstagramUser)

//Neasted object

const UserInf = 
{
    FullName:
    {
        FirstName: "Rohan",
        MiddleName: "Santosh",
        LastName: "Lokhande"
    }
}
//console.log(UserInf.FullName.MiddleName);

// const obj1 = {1:"a",2:"b"}
// const obj2 = {3:"c",4:"d"}
// //const obj3 = ({}, obj1, obj2)
// const obj3 = {...obj1,...obj2}
// console.log(obj3);

//Json Format 

let Student = {
    "Name": "Rohan",
    "Email": "rohanlokhande1306@gmail.com",
    "Age": 19,
    "Location": "Pune"
}
console.log(Student.Email);

//Another
[
    {}
    {}
    {}
]

