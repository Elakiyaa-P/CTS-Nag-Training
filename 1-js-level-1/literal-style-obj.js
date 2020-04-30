var config={
    url:"http://",
    httpMethod:"GET"
}

var newArr=["item1","item2","item3"]

var newRe=/\d{10}/
var inp="9901801987"
if(newRe.test(inp))
    console.log("Valid Input")
else
    console.log("Invalid Input")