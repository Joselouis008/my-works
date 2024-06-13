import React, { useState } from 'react'

export default function CreateExp() {

  const [data, setData] = useState({ ename: "", enumb: 0, ecat: "" });
 
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/userExc", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <section>
    <form
          onSubmit={handleSubmit}
          className=""
        >
          <div className="w-fit flex items-center">
            <label htmlFor="ename" className="">
              Name:-
            </label>
            <input
              className="border-black border outline-none"
              type="text"
              name="ename"
              onChange={(event) =>
                setData({ ...data, ename: event.target.value })
              }
              required
            />
          </div>
          <div className="w-fit flex items-center">
            <label htmlFor="eamnt" className="">
              Amount:-
            </label>
            <input
              className="border-black border outline-none"
              type="number"
              name="enumb"
              onChange={(event) =>
                setData({ ...data, enumb: parseInt(event.target.value) })
              }
              required
            />
          </div>
          <div className="w-fit flex items-center">
            <label htmlFor="ecat" className="mr-2 ml-2">
              Category:-
            </label>
            <input
              className="border-black border outline-none"
              type="text"
              name="ecat"
              onChange={(event) =>
                setData({ ...data, ecat: event.target.value })
              }
              required
            />
          </div>
          <div className="p-5">
            <button className="border-black border p-1 rounded-md bg-gray-400">
              Save
            </button>
          </div>
        </form>
        </section>
  )
}
