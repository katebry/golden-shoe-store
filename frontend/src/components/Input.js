import "./Input.css"

export const Input = ({ name, handleChange, label, type, placeholder }) => (
    <>
    <label>{label}</label>
      <input
        name={name}
        onChange={handleChange}
        required
        label={label}
        type={type}
        placeholder={placeholder}
      />
    </>
  );