import React from 'react';

interface TextInputProps {
  label: string;
  id: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  id,
  type,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="login-input">
      <label htmlFor={id} className="login-label">
        {label}
      </label>
      <input
        type={type}
        id={id}
        className="login-input-field"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextInput;
