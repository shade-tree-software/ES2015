// Sets

let tags = new Set();

tags.add('JavaScript');
tags.add('Programming');
tags.add({version: 'ES2015'});
tags.add('web');
tags.add('web');

console.log(tags.size);

for (let tag of tags){
    console.log(tag);
}

let [a, b, c, d] = tags;

