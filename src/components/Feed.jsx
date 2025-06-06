import axios from "axios";
import { SERVER_URL } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToFeed } from "../utils/feedSlice";
import FeedCard from "./FeedCard";

const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector((state) => state.feed);
  const getFeed = async () => {
    try {
      const response = await axios.get(SERVER_URL + "/user/feed", {
        withCredentials: true,
      });
      dispatch(addToFeed(response.data.feed));
    } catch (err) {
      console.log("ERROR:" + err.message);
    }
  };

  useEffect(() => {
    if (!feed) {
      getFeed();
    }
  }, []);

  if (!feed) return;

  if (feed.length <= 0)
    return (
      <h1 className="flex justify-center my-10">No more conection request!</h1>
    );

  return <div>{feed && <FeedCard data={feed[0]} />}</div>;
};

export default Feed;
