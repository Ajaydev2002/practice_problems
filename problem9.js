const books = [{title: "1984", author: "George Orwell",price: 60},   
               {title: "Animal Farm", author: "George Orwell",price: 90},  
               {title: "Pride and Prejudice", author: "Jane Austen",price:55}]

const names = books.map((title) =>
    console.log(title.title,title.author));
