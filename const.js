// "const" keyword

function checkMax(numUsers){
  if (numUsers > 3){
    warn();
  }
}

function warn(){
    console.log("Number of users exceeded");
}

checkMax(4);