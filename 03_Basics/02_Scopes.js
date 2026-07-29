
let a = 20;
var b = 10;
if(true)
{
    let a = 30;
    var b = 40;
    console.log("Block Scope:",a);
}
console.log("Global Scope:",a);
console.log("Global Scope:",b);      // Output is 40 because 'var' is not block-scoped. It gets 
                                    //updated inside the if block.
                                   // That's why modern JavaScript prefers 'let' and 'const'.

function one ()
{
    const username = "Rohan"
    function two()
    {
        const website = "GitHub"
        console.log(username);
    }
    //console.log(website);              //not print because it out off scope
    two()
}
one()

if(true)
{
    const username = "Rohan-1306"
    if(true)
    {
        const websitename = " Instagram"
        console.log( username + websitename);
    }
 
}