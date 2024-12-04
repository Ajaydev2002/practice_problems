const myarr = `{  "books": [ 
       {"title": "1984", "author": "George Orwell"},   
       {"title": "Animal Farm", "author": "George Orwell"}, 
       {"title": "Pride and Prejudice", "author": "Jane Austen"} ]}`;


const object = JSON.parse(myarr);
const extract = object.books.map((key)=>
    key.title)

console.log(extract);

