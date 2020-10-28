import React from "react";
import PropTypes from "prop-types";

const FormGenerator = ({ form, label, type }) => {
  return (
    <div className="form-area">
      <form>
        <label htmlFor="office-name">{label}</label>
        <br />
        <input type={type} id="office-name" required />
        <br />
      </form>
    </div>
  );
};

FormGenerator.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default FormGenerator;
