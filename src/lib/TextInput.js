import React from "react";
import "./TextInput.css";

const TextInput = ({ type = "text", label, value, onChange, placeholder }) => (
  <div className="simple-form-group">
    {label && <label className="simple-text-label">{label}</label>}
    <input
      type={type}
      className="simple-text-input"
      placeholder={placeholder}
      value={value}
      onChange={e => onChange && onChange(e.target.value)}
    />
  </div>
);

export default TextInput;