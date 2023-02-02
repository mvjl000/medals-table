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
  handleBlur: {
    (e: React.FocusEvent<any, Element>): void;
    <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
  };
  error: string | undefined;
}

const Input: FC<InputProps> = ({
  label,
  id,
  name,
  value,
  placeholder,
  handleChange,
  handleBlur,
  error,
}) => {
  return (
    <div className="input-wrapper">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={placeholder}
      />
      {!!error ? <p className="error-message">{error}</p> : null}
    </div>
  );
};

export default Input;
