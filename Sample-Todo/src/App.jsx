// import { useState, useRef } from "react";
// import "./App.css";

// function App() {
//   const [items, setItems] = useState([]);
//   const inputRef = useRef();

//   const onSubmit = (e) => {
//     e.preventDefault();

//     const value = inputRef.current.value;
//     if (value === "") return;
//     setItems((prev) => [...prev, value]);
//     inputRef.current.value = "";
//   };

//   return (
//     <>
//       <section>
//         <p>Items:</p>
//         <div>
//           {items.map((item, index) => (
//             <p key={index}>{item}</p>
//           ))}
//         </div>

//         <form onSubmit={onSubmit}>
//           <input type="text" ref={inputRef} className="border-black border-2" />
//           <button
//             className="border-black border-2 text-center p-1 rounded-md hover:shadow-xl"
//             type="submit"
//           >
//             Click Me 😊
//           </button>
//         </form>
//       </section>
//     </>
//   );
// }

// export default App;

import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppContext } from "./AppContext";

const App = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const { contextValue, setContextValue } = useContext(AppContext);

  return (
    <div>
      <h1>Redux Count: {count}</h1>
      <button
        className="rounded-lg p-2 mr-2 font-bold text-white bg-slate-500 hover:bg-slate-600 active:bg-slate-700 focus:outline-none focus:ring focus:ring-sl"
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        Increment
      </button>
      <button
        className="border-black border-2 rounded-lg p-1 bg-slate-500"
        onClick={() => dispatch({ type: "DECREMENT" })}
      >
        Decrement
      </button>
      <h2>{contextValue}</h2>
      <button onClick={() => setContextValue("Hello, React!")}>
        Change Context
      </button>
    </div>
  );
};

export default App;
