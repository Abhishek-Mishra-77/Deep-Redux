import React from "react";
import { useParams } from "react-router-dom";

const DetailsUi = () => {
  const { id } = useParams();

  console.log(id);

  return <div>DetailsUi</div>;
};

export default DetailsUi;
