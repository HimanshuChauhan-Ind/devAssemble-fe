import { DEFAULT_PHOTO } from "../utils/constants";

const ConnectionCard = ({ data }) => {
  const { firstName, lastName, age, about, photoUrl } = data;
  return (
    <div className="flex bg-base-200 p-5 h-30 w-150 mt-5 rounded-lg">
      <div>
        <img
          className="h-[100%] object-cover rounded-full"
          src={photoUrl ? photoUrl : DEFAULT_PHOTO}
          alt="user-photo"
        />
      </div>
      <div className="ml-5">
        <p>{firstName + " " + lastName}</p>
        <p>{age}</p>
        <p>{about}</p>
      </div>
    </div>
  );
};

export default ConnectionCard;
