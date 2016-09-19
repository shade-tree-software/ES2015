// rest parameters

function logAll(first, ...allTheRest){
  console.log(first);
  console.log(allTheRest);
}
  
logAll("jack", "jill", "bob", "sue");