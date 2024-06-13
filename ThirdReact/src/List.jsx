function List(){

      const fruits = [{id:1, name:`apple`, calories:95},
                      {id:2, name:`banana`, calories:44},
                      {id:3, name:`orange`, calories:105},
                      {id:4, name:`gvava`, calories:37},
                      {id:5, name:`annachi`, calories:123}];

    //   fruits.sort();
    // fruits.sort((a,b) => a.name.localeCompare(b.name)); //Alphabet order
    // fruits.sort((a,b) => b.name.localeCompare(a.name)); //Reverse Alphabet order
    // fruits.sort((a,b) => a.calories - b.calories); //Numeric order
    // fruits.sort((a,b) => b.calories - a.calories); //Reverse Numeric order 
    
    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);
    //   const listItems = fruits.map(fruit => <li key={fruit.id}>
    //                                                 {fruit.name}: &nbsp; 
    //                                              <b>{fruit.calories}</b></li>);
    
    const listItems = highCalFruits.map(highCalFruit => <li key={highCalFruit.id}>
        {highCalFruit.name}: &nbsp; 
     <b>{highCalFruit.calories}</b></li>);

      return(<ol>{listItems}</ol>);
}

export default List