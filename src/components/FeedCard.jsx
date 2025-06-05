import axios from "axios";
import { DEFAULT_PHOTO, SERVER_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeFromFeed } from "../utils/feedSlice";

const FeedCard = ({ data }) => {
  const { _id, firstName, lastName, about, age, photoUrl, gender } = data;

  const dispatch = useDispatch();

  const handleRequest = async (status, userId) => {
    try {
      const res = await axios.post(
        SERVER_URL + `/request/send/${status}/${userId}`,
        {},
        { withCredentials: true }
      );

      dispatch(removeFromFeed(userId));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center items-stretch mt-24">
      <div className="card bg-base-200 w-96 h-140 shadow-sm">
        <figure>
          <img
            className="w-[100%] object-cover"
            src={photoUrl ? photoUrl : DEFAULT_PHOTO}
            alt="user-photo"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{firstName + " " + lastName}</h2>
          {age && gender && <p>{age + ", " + gender}</p>}
          <p>{about}</p>
          <div className="card-actions justify-between">
            <button
              className="btn btn-primary"
              onClick={() => handleRequest("ignored", _id)}
            >
              Ignore
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => handleRequest("interested", _id)}
            >
              Interested
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
