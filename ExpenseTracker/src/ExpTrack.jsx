import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ExpTrack() {
  const [data, setData] = useState({ ename: "", enumb: 0, ecat: "" });
  const [rdata, setRdata] = useState([]);
  const [eselect, setEselect] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/userExc", data)
      .then((res) => {
        console.log(res);
        setRdata([...rdata, res.data]);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get("http://localhost:3001/userExc")
      .then((res) => setRdata(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3001/userExc/${id}`)
      .then((res) => {
        console.log(res);
        setRdata(rdata.filter((item) => item.id !== id));
      })
      .catch((err) => console.log(err));
  };

  const handleSelect = (event) => {
    setEselect(event.target.value);
  };

  const efilter = rdata.filter(item => item.ename === eselect);

  const totalExp = efilter.reduce((total, item) => total + item.enumb, 0);

  return (
    <>
      <section>
        <form
          onSubmit={handleSubmit}
          className="border-black border p-2 w-full flex justify-center bg-gradient-to-r from-blue-500 to-green-500"
        >
          <div className="w-fit flex items-center">
            <label htmlFor="ename" className="mr-2">
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
            <label htmlFor="eamnt" className="mr-2 ml-2">
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
        
        <div className="mt-5">
          <label htmlFor="selectPerson" className="mr-2">
            Select Person:-
          </label>
          <select
            id="selectPerson"
            className="border-black border outline-none"
            onChange={handleSelect}
          >
            <option value="">Select</option>
            {[...new Set(rdata.map(item => item.ename))].map((name, index) => (
              <option key={index} value={name}>{name}</option>
            ))}
          </select>
        </div>

        <table className="min-w-full bg-white border border-gray-200 mt-5">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border border-gray-200">Name</th>
              <th className="py-2 px-4 border border-gray-200">Amount</th>
              <th className="py-2 px-4 border border-gray-200">Category</th>
              <th className="py-2 px-4 border border-gray-200">Action</th>
            </tr>
          </thead>
          <tbody>
            {rdata.map((item, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border border-gray-200 text-center">{item.ename}</td>
                <td className="py-2 px-4 border border-gray-200 text-center">{item.enumb}</td>
                <td className="py-2 px-4 border border-gray-200 text-center">{item.ecat}</td>
                <td className="py-2 px-4 border border-gray-200 text-center">
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {eselect ? (
          <div className="text-center text-xl mt-2">
            The Total Expense of {eselect} is {totalExp}
          </div>
        ) : (
          <div className="text-center text-xl mt-2">
            Please select a person to see the total expense.
          </div>
        )}
      </section>
    </>
  );
}
