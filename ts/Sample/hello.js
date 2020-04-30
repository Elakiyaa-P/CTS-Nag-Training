// var hello:(name?:string=>void);
var hello = function (name) {
    console.log("Hello" + " " + (name || "Unknown Person"));
};
hello("Elite");
hello();
