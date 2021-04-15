import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logOut } from "../redux/actions/authActions";

export const AccountPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const logout = () => {
    dispatch(logOut());
    history.push("/");
  };

  return (
    <>
      <h2>Account</h2>
      <button onClick={logout}>Log out</button>
    </>
  );
};
