for (let i = 0; i < 100; i++) {
    let peace = document.createElement("span");
    document.getElementById("flag").appendChild(peace);
  }
  TweenMax.from("#flag span", {
    transform: "translateY(1000px)",
    zIndex: 100,
    delay: 1,
    stagger: {
      from: "random",
      amount: 10,
    },
  })

  TweenMax.from("#leftstar",0.5, {
    opacity: 0 ,
    delay :11.5
  })
  TweenMax.from("#rightstar",0.5, {
    opacity: 0 ,
    delay :11.5
  })
  TweenMax.from(".city",0.5, {
    opacity: 0 ,
    delay :11.5
  })

  var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}