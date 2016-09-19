// arrow functions

let users = ['Sam', 'Jack', 'Jill'];

let userLengths = users.map(function(user){
  return user.length;
});

console.log(userLengths);



//Ruby: userLengths = users.map { |user| user.length }