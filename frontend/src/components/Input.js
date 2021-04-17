import "./Input.css"

export const Input = ({ name, handleChange, label, type, placeholder }) => (
    <div className="inputContainer">
    <label>{label}</label>
      <input
        name={name}
        onChange={handleChange}
        required
        label={label}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );