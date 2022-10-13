import React from "react";

export const FormTest = () => {
  function handleChange(event) {
    console.log(event.target);
  }

  return (
    <form>
      <input type="text" placeholder="First Name" onChange={handleChange} />
    </form>
  );
};
