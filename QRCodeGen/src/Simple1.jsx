// import React, { useState } from 'react';

// export default function Simple1() {
//   const [data, setData] = useState([
//     {
//       id: 1,
//       name: 'krish'
//     },
//     {
//       id: 2,
//       name: 'naman'
//     }
//   ]);

//   const [newItem, setNewItem] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const newData = [...data, { id: data.length + 1, name: newItem }];
//     setData(newData);
//     setNewItem('');
//   };

//   return (
//     <section>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={newItem}
//           onChange={(event) => setNewItem(event.target.value)}
//           placeholder="Enter new item"
//         />
//         <button type="submit">Add</button>
//       </form>
//       <ul>
//         {data.map((item) => (
//           <li key={item.id}>{item.name}</li>
//         ))}
//       </ul>
//     </section>
//   );
// }

import React, { useState } from "react";

export default function Simple1() {

  const [data, setData] = useState([{id:1,name:'jagan'},{id:2,name:'viki'}]);
  const [newItem, setNewItem] = useState('');

  const handleSubmit = (event) => {
     event.preventDefault();
     const newData = [...data,{id: data.length +1,name: newItem}];
     setData(newData);
     setrNewItem('');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter name" value={newItem} onChange={(event)=>setNewItem(event.target.value)} />
        <button type="submit">Add</button>
      </form>
      <ul>
        {data.map((item)=>(
            <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}
