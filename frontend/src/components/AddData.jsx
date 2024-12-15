import React, { useEffect, useState } from "react";
import axios from "axios";
 import {Link} from "react-router-dom"

const AddData = () => {
  const [input, setInput] = useState("");
  const [data, SetData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/get");
        SetData(response.data.listofdata || []);   
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:5000/add", { text: input });
      alert("Text added");
      setInput("");
      window.location.reload()
    } catch (error) {
      console.error("Error adding data:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/delete/${id}`);
      alert("Text deleted");
      window.location.reload()
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  return (
    <div className="flex justify-center text-black">
      <div className="mt-20">
        <label className="me-5">Note:</label>
        <input
          type="text"
          placeholder="Add something"
          className="p-5"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="p-3 ms-3" onClick={handleSubmit}>
          Add
        </button>

        <div className="mt-10">
        <h2 className="text-center font-extrabold">Notes</h2>
        {data.map((note) => (
          <div key={note._id} className="flex items-center justify-between gap-3 my-3">
            <p className="text-black">{note.text}</p>
           <div>
           <button
              className="p-2 bg-red-500 text-black"
              onClick={() => handleDelete(note._id)}
            >Delete
            </button>
            <Link to={`/edit/${note._id}`} className="p-2 bg-blue-500 text-black ms-3">edit</Link>
           </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default AddData;
