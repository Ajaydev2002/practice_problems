let users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 35 },
  ];
// add new object to existing array of object

  users.push({id:4,name: "Diana", age: 28});
  console.log(users);

// after readuser

function readuser(users) {
users.forEach(user => {
  const userInfo = Object.entries(user)
  .map(([key,value]) => {
    if(key === 'id') {
    const changedvalue = key.charAt(0).toUpperCase() + key.charAt(1).toUpperCase() + key.slice(2);
    return `${changedvalue}: ${value}`;
    }
    else 
    {
      const changedvalue = key.charAt(0).toUpperCase() + key.slice(1)
      return `${changedvalue}: ${value}`;
    }
  })
    .join(",");
    console.log(userInfo);          
});
}

readuser(users);

// modify the existing object name 

const modifiedusers = users.map(obj =>{
  if(obj.id === 2) {
      return{...obj, name : "Robert",age: 32};
  }
  return obj;
});

console.log(modifiedusers);

// delete the object from modified array

modifiedusers.shift();
console.log(modifiedusers);