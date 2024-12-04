const menu = `
{
  "categoryname": "healthy",
  "children": [
    {
      "name": "fruits",
      "children": [
        {
          "name": "items1",
          "children": [
          {"name" : "apple", "price" : 10.95},
          {"name" : "orange", "price" : 32.10}
          ]
        },
        {
          "name": "items2",
          "children": [
          {"name" : "mango", "price" : 30.5},
          {"name" : "grapes", "price" : 12}
          ]
        }
      ]
    },
    {
      "name": "unhealthy",
      "children": [
        {
          "name": "drinks",
          "children": [
           {"name" : "slice", "price" : 50},
           {"name" : "maza", "price" : 30}
          ]
        }
      ]
    }
  ]
}`;

const object = JSON.parse(menu);

function LeafNodes(father) {
    
    if (!father.children || father.children.length === 0) {
      console.log(father.name,father.price);
    } else {
      father.children.forEach(LeafNodes);
    }
  }
LeafNodes(object)