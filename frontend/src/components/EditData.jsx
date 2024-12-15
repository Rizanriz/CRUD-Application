import React, { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditData = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [input, setInput] = useState("");

  const handleEdit = async () => {
    if (!input.trim()) {
      alert("Please enter a valid note.");
      return;
    }

    try {
      await axios.put(`http://localhost:5000/update/${id}`, { text: input });
      alert("Text updated!");
      navigate("/");
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  return (
    <div className="flex flex-col items-center mt-20">
      <input type="text" placeholder="Update something"
        className="p-2 border border-gray-300 rounded-lg w-1/2"
        onChange={(e) => setInput(e.target.value)} />
      <button
        className="p-3 mt-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
        onClick={handleEdit}>Update </button>
    </div>
  );
};

export default EditData;
