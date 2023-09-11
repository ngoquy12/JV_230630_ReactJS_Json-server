import React, { useEffect } from "react";
import { deleteById, getAll, getOne } from "../../services/userService";

export default function ListUser() {
  const id = 1;

  const handleDelete = async (id) => {
    try {
      const result = await deleteById(id);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </div>
  );
}
