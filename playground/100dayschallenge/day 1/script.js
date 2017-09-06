var i = 0;
var screams = ["You really clicked me!",
               "Stop that!",
               "It was just a joke...",
               "What am I going to tell my wife?",
               "This is my life now... Being poked insesantly...",
               "Sigh... Are you not tired of the abuse yet?",
               "Please stop!",
               "AAAAAAH!",
               "Alright pal! No more mister nice guy!",
               "I dare you to click me one more time!!!!"
             ]

document.getElementById('myButton').addEventListener("click", function() {
  document.body.style.backgroundColor = "black";
  document.getElementsByClassName('main')[0].style.backgroundColor = "black";
  this.style.backgroundColor = "red";
  this.style.color = "white";
  this.style.fontFamily = "Frijole"
  document.title = "Stranger Danger!!!!";
  if(i <= 9 ){
    this.innerHTML = screams[i];

  }
  else {
    i = 0;
    this.innerHTML = screams[i];
  }

  i++;
});
