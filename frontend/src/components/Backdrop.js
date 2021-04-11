import "./Backdrop.css";

export const Backdrop = ({ show, handleClick }) => {
  return show && <div className="backdrop" onClick={handleClick}></div>;
};
