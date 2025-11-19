"use client";

import { useState } from "react";
import SelectTopics from "./_components/SelectTopics";
import SelectStyle from "./_components/SelectStyle";

const CreateNew = () => {
  let [formData, setFormData] = useState([]);
  const onHandleInputChange = (fieldName, fieldValue) => {
    console.log(fieldName, fieldValue);
  };
  return (
    <div className="md-px-20">
      <h2 className="font-bold text-4xl text-primary text-center">
        Create New
      </h2>

      <div className="mt-10 shadow-md p-10">
        <SelectTopics onUserSelect={onHandleInputChange} />
        <SelectStyle onUserSelect={onHandleInputChange} />
      </div>
    </div>
  );
};

export default CreateNew;
