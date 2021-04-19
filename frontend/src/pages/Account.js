import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logOut } from "../redux/actions/authActions";
import "./Account.css";

export const AccountPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const logout = () => {
    dispatch(logOut());
    history.push("/");
  };

  return (
    <>
      <h2 className="heading">Account</h2>
      <div className="accountPage">
        <button onClick={logout}>Log out</button>
      </div>
    </>
  );
};
