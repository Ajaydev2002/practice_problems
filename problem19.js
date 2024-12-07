const datas = [
    { category: "fruit", name: "apple" },
    { category: "vegetable", name: "carrot" },
    { category: "fruit", name: "banana" },
    { category: "vegetable", name: "lettuce" },
  ];

 const fruits = datas.filter(product =>
 product.category === "fruit");
 
 const vegtables = datas.filter(product =>
 product.category === "vegetable");
 
 console.log({fruits,vegtables});
