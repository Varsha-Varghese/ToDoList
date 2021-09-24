// creating an xhr object
function ajax(){
    var xhttp = new XMLHttpRequest();
// event listener
xhttp.onreadystatechange = function(){
    if(this.readyState==4&&this.status==200){
        var response = JSON.parse(this.responseText);
        var output = "";
        for (var i = 0; i < response.length; i++) {
          
            if(response[i].completed==true) {
                output += "<ul style=list-style-type:square><li>"+response[i].title+"&emsp;"+"<input type=checkbox id=check checked disabled></li></ul>";
           }
           else{
            output += "<ul style=list-style-type:square><li>"+response[i].title+"&emsp;"+"<input type=checkbox id=check2 onchange=message();></li></ul>";
           }
        }
        
        document.getElementById("demo").innerHTML = output;
    }
}
xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
xhttp.send();

}
ajax();
function message(){
    setTimeout(function(){
        var totalchk=document.querySelectorAll('input[id="check2"]:checked').length;
        var promise = new Promise(function(resolve,reject){
        if(totalchk==5){
            resolve(" Congrats. 5 Tasks have been Successfully Completed ");
        }
        else{
            reject("error");
        }
    });
    promise
    .then(function(m){
        console.log(m);
        alert(m);
    })
    .catch(function(e){
        console.log(e);
    });
    },500);
    
}
const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

const numBalls = 50;
const balls = [];

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()}em`;
  ball.style.height = ball.style.width;
  
  balls.push(ball);
  document.body.append(ball);
}

// Keyframes
balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12
  };

  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` }
    ],
    {
      duration: (Math.random() + 1) * 2000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
});