import React from "react";
import FormGenerator from "./formGenerator";
import styles from "../style.css";
const form = [
  {
    label: "What is the name of the officer in question?",
    type: "text",
  },
  {
    label: "When was the date of the incident?'",
    type: "date",
  },
  { label: "How much is the bribe that was paid? (optional)", type: "number" },
  { type: "submit" },
];
const PoliceBrutalityForm = () => {
  return (
    <main>
      <div className="container">
        <div className="header">
          <h2>Police Brutality Report Form</h2>
        </div>
        {form.map((item, index) => (
          // item.map((element, key) => <FormGenerator {...element} key={key} />)
          <FormGenerator {...item} key={index} />
        ))}
      </div>
    </main>
  );
};

export default PoliceBrutalityForm;
