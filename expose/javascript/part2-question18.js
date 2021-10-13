var intervalID = setInterval(myFunc, 1000);

function myFunc(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}