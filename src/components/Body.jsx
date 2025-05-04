import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
import { addUser } from "../utils/userSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SERVER_URL } from "../utils/constants";

const Body = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const getUser = async () => {
    try {
      if (!user) {
        navigate("/login");
        return;
      }
      const response = await axios.get(SERVER_URL + "/profile/view", {
        withCredentials: true,
      });
      dispatch(addUser(response.data));
    } catch (err) {
      if (err.satus === 401) {
        navigate("/login");
      }
      return console.log("ERROR : " + err);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Body;
