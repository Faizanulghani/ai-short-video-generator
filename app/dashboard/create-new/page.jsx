"use client";

import { useState } from "react";
import SelectTopics from "./_components/SelectTopics";
import SelectStyle from "./_components/SelectStyle";
import SelectDuration from "./_components/SelectDuration";
import { Button } from "@/components/ui/button";
import axios from "axios";

const CreateNew = () => {
  let [formData, setFormData] = useState({});
  const onHandleInputChange = (fieldName, fieldValue) => {
    console.log(fieldName, fieldValue);

    setFormData((prev) => ({ ...prev, [fieldName]: fieldValue }));
  };

  const getVideoScript = async () => {
    const result = await axios.post("/api/generate-script", {
      formData,
    });
    console.log(result.data.script);
  };

  return (
    <div className="md-px-20">
      <h2 className="font-bold text-4xl text-primary text-center">
        Create New
      </h2>

      <div className="mt-10 shadow-md p-10">
        <SelectTopics onUserSelect={onHandleInputChange} />
        <SelectStyle onUserSelect={onHandleInputChange} />
        <SelectDuration onUserSelect={onHandleInputChange} />

        <Button className="mt-10 w-full" onClick={getVideoScript}>Create Short Video</Button>
      </div>
    </div>
  );
};

export default CreateNew;
