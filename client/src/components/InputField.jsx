// src/components/InputField.js
import React from 'react';

function InputField({ type, placeholder }) {
  return (
    <div className="input-group">
      <input type={type} placeholder={placeholder} required />
    </div>
  );
}

export default InputField;
