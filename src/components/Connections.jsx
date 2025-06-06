import axios from "axios";
import { useEffect } from "react";
import { SERVER_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionSlice";
import ConnectionCard from "./ConnectionCard";
import { useNavigate } from "react-router-dom";

const Connections = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const connections = useSelector((state) => state.connections);
  const fetchData = async () => {
    const res = await axios.get(SERVER_URL + "/user/connections", {
      withCredentials: true,
    });
    dispatch(addConnections(res.data.data));
  };

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="text-2xl font-bold">Connections</h1>
      <div>
        {connections &&
          connections.map((val) => <ConnectionCard key={val._id} data={val} />)}
      </div>
    </div>
  );
};

export default Connections;
