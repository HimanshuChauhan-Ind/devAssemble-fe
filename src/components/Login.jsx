import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { SERVER_URL } from "../utils/constants";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = async () => {
    if (isLoggedIn) {
      try {
        const response = await axios.post(
          SERVER_URL + "/signIn",
          { email, password },
          { withCredentials: true }
        );
        dispatch(addUser(response.data));
        return navigate("/");
      } catch (err) {
        setError(err.response?.data);
      }
    } else {
      try {
        const response = await axios.post(
          SERVER_URL + "/signUp",
          { firstName, lastName, email, password },
          { withCredentials: true }
        );
        dispatch(addUser(response.data.data));
        return navigate("/edit");
      } catch (err) {
        setError(err.response?.data);
      }
    }
  };

  return (
    <div className="flex mt-[10vh] justify-center">
      <div className="card w-96 bg-base-200 shadow-sm">
        <div className="card-body">
          <div className="flex justify-center">
            <h2 className="text-3xl font-bold">
              {isLoggedIn ? "Login" : "SignUp"}
            </h2>
          </div>
          {!isLoggedIn && (
            <>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">First Name</legend>
                <input
                  type="text"
                  className="input"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </fieldset>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Last Name</legend>
                <input
                  type="text"
                  className="input"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </fieldset>
            </>
          )}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email</legend>
            <input
              type="text"
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input
              type="password"
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </fieldset>
          <div className="mt-6">
            <p className="text-red-500 mb-2">{error}</p>
            <button className="btn btn-primary btn-block" onClick={handleClick}>
              {isLoggedIn ? "Login" : "Sign Up"}
            </button>
          </div>
          <p
            onClick={() => setIsLoggedIn((prev) => !prev)}
            className="underline text-blue-600 cursor-pointer hover:text-blue-300"
          >
            {isLoggedIn
              ? "New User? Sign up here"
              : "Already a User? Sign in here"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
