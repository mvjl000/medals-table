import React, { FC } from "react";
import "./Input.scss";

interface InputProps {
  label: string;
  id: string;
  name: string;
  value: string | number;
  placeholder: string;
  handleChange: {
    (e: React.ChangeEvent<any>): void;
    <T = string | React.ChangeEvent<any>>(
      field: T
    ): T extends React.ChangeEvent<any>
      ? void
      : (e: string | React.ChangeEvent<any>) => void;
  };
}

const Input: FC<InputProps> = ({
  label,
  id,
  name,
  value,
  placeholder,
  handleChange,
}) => {
  return (
    <div className="input-wrapper">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
