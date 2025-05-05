import { DEFAULT_PHOTO } from "../utils/constants";

const FeedCard = ({ data }) => {
  const { firstName, lastName, about, age, photoUrl, gender } = data;
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
            <button className="btn btn-primary">Ignore</button>
            <button className="btn btn-secondary">Interested</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
