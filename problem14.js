const familytree = {
    name: "John",
    children: [
        {
            name: "Alice",
            children: [
                { name: "David", children : [{name : "sumith" , age : 13}] },
                { name: "Eve", children : [{name : "raghul" , age : 23}] }
            ]
        },
        {
            name: "Bob",
            children: [
                { name: "Frank", age : 18 },
                { name: "Grace", age : 17 }
            ]
        }
    ]
};


function descendants(nodes) {
    if (!nodes.children || nodes.children.length === 0) {
        console.log(nodes.name,nodes.age);
      } else {
        nodes.children.forEach(descendants);
      }
}

descendants(familytree)
