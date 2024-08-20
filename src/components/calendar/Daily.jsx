import React from "react";
import { useParams } from "react-router-dom";

const Daily = () => {
  const param = useParams();

  console.log(param.id);
  return <div>Daily</div>;
};

export default Daily;
