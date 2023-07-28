import React, { useState } from "react";
import "../components/Form.css";

const formConfig = [
  {
    name: "name",
    label: "Name",
    type: "text",
    required: true,
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    required: true,
    validation: {
      pattern: /^\S+@\S+\.\S+$/,
    },
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    required: true,
    validation: {
      minLength: 8,
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number, and 1 special character!",
    },
  },
  {
    name: "gender",
    label: "Gender",
    type: "radio",
    required: true,
    options: [
      { label: "Male", value: "male" },
      { label: "Female", value: "female" },
      { label: "Other", value: "other" },
    ],
  },
  {
    name: "confirmDetails",
    label: "Yes! I confirm my details.",
    type: "checkbox",
    required: true,
  },
];

const Form = () => {
  const [formData, setFormData] = useState({});
  const [checkboxError, setCheckboxError] = useState(false); //to display error msg when form submit without clicking checkbox

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: fieldValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.confirmDetails) {
      console.log("Form Data:", formData);
      setFormData({}); // Clear the form data after submission
      setCheckboxError(false); // Reset checkbox error state
    } else {
      setCheckboxError(true); // Display error if checkbox is not checked
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {formConfig.map((field) => {
        const { name, label, type, required, validation, options } = field;

        return (
          <div key={name} className="form-group">
            {type === "radio" ? (
              <div>
                <label htmlFor={name}>{label}</label>
                <div className="radio">
                  {options.map((option) => (
                    <div className="radioInput" key={option.value}>
                      <input
                        type="radio"
                        id={option.value}
                        name={name}
                        value={option.value}
                        checked={formData[name] === option.value}
                        onChange={handleChange}
                        required={required}
                      />
                      <label htmlFor={option.value}>{option.label}</label>
                    </div>
                  ))}
                </div>
              </div>
            ) : type === "checkbox" ? (
              <div className="checkboxInput">
                <input
                  type={type}
                  id={name}
                  name={name}
                  checked={formData[name] || false}
                  onChange={handleChange}
                />
                <label htmlFor={name}>{label}</label>
              </div>
            ) : (
              <div>
                <label htmlFor={name}>{label}</label>
                <input
                  type={type}
                  id={name}
                  name={name}
                  value={formData[name] || ""}
                  onChange={handleChange}
                  required={required}
                />
              </div>
            )}
            {validation && (
              <span className="error-message">{validation.errorMessage}</span>
            )}
          </div>
        );
      })}
      <div className="error-message">
        {checkboxError && "Please confirm your details."}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
