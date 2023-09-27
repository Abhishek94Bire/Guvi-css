// Practice exrcise:

let data = [
    {
      name: "Joey",
      age: 3,
      type: "dog",
    },
  
    {
      name: "Lizzy",
      age: 6,
      type: "dog",
    },
  
    {
      name: "Red",
      age: 2,
      type: "dog",
    },
  
    {
      name: "Sheru",
      age: 4,
      type: "dog",
    },
  
    {
      name: "Butters",
      age: 6,
      type: "dog",
    },
  
    {
      name: "john",
      age: 45,
      type: "human",
    },
  ];
  
  // Sum of all dogs ages in human years
  
  // MRF approch //apply chaining over mrf
  // 1.Identify the type of the dog
//   let type=data.filter((d)=>{
//       return d.type==="dog"
//   })
//   console.log(type)
  // 1.return the data where dog type="dog"
  // 2.Multiply dog age by 7 that===human age
  // new age of the dog
  // multiply the dog age *7(MAP)
  // 3.sum of the all the dog ages
  
  //Chaining over Map Reduce and Filter

  let age=data.filter((d)=>{
      return d.type==="dog"
  }).map((d)=>{
      return d.age*7
    }).reduce((sum,d)=>{
        return sum+d
    })

    console.log(age)