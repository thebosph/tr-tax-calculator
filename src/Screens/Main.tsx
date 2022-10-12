import React from "react";
import Results from "../components/results";
import Form from "../components/form";

const Main: React.FC = () => {
  return (
    <div className="h-screen flex flex-col  items-center py-10  px-5 md:py-5 space-y-10 md:mx-60  ">
      <Results />
      <Form />
    </div>
  );
};

export default Main;
