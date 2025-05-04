import { useSelector } from "react-redux";
import EditProfile from "./EditProfile";
import FeedCard from "./FeedCard";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Edit = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }
  }, []);
  return (
    <div className="flex justify-center items-center gap-10">
      <EditProfile data={user} />
      <FeedCard data={user} />
    </div>
  );
};

export default Edit;
