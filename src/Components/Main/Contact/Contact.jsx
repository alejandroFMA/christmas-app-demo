import React, { useState } from "react";
import FormContact from "./FormContact";
import CardContact from "./CardContact";

const Contact = () => {
  const [data, setData] = useState({}); //estado a compartir {message date}

  const clearData = () => {
    setData({});
  };
  const addData = (message) => {
    const date = new Date().toDateString();
    const data= {message,date}
    setData(data);
  };

  return (
    <div className="contactContainer">
      <FormContact add={addData} /> {/*sibling 1*/}
      <CardContact data={data} clear={clearData}/> {/*sibling 2*/}
    </div>
  );
};

export default Contact;
