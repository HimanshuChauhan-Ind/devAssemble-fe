import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("rohit@gmail.com");
  const [password, setPassword] = useState("Rohit@123");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/signIn",
        { email, password },
        { withCredentials: true }
      );

      dispatch(addUser(response.data));
      return navigate("/");
    } catch (err) {
      throw new Error("ERROR: " + err.message);
    }
  };

  return (
    <div className="flex items-center justify-center mt-49">
      <div className="card w-96 bg-base-200 shadow-sm">
        <div className="card-body">
          <div className="flex justify-center">
            <h2 className="text-3xl font-bold">Login</h2>
          </div>
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
            <button className="btn btn-primary btn-block" onClick={handleClick}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
