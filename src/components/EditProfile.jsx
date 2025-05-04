import axios from "axios";
import { useState } from "react";
import { SERVER_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import Toast from "./Toast";

const EditProfile = ({ data }) => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState(data.firstName);
  const [lastName, setLastName] = useState(data.lastName);
  const [age, setAge] = useState(data.age);
  const [gender, setGender] = useState(data.gender);
  const [about, setAbout] = useState(data.about);
  const [photoUrl, setPhotoUrl] = useState(data.imageUrl);
  const [error, setError] = useState("");
  const [displayToast, setDisplayToast] = useState(false);

  const handleSubmit = async () => {
    try {
      const response = await axios.patch(
        SERVER_URL + "/profile/edit",
        { firstName, lastName, age, gender, about, photoUrl },
        { withCredentials: true }
      );
      if (response.data === "Saved!!") {
        const userRes = await axios.get(SERVER_URL + "/profile/view", {
          withCredentials: true,
        });
        dispatch(addUser(userRes.data));
        setDisplayToast(true);
        setTimeout(() => {
          setDisplayToast(false);
        }, 3000);
      }

      console.log(response);
    } catch (err) {
      setError(err);
    }
  };

  return (
    <>
      {displayToast && <Toast />}
      <div className="flex mt-[10vh] justify-center">
        <div className="card w-96 bg-base-200 shadow-sm">
          <div className="card-body">
            <div className="flex justify-center">
              <h2 className="text-3xl font-bold">Edit Profile</h2>
            </div>
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
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Age</legend>
              <input
                type="text"
                className="input"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Gender</legend>
              <select
                defaultValue={gender}
                className="select select-neutral"
                onChange={(e) => setGender(e.target.value)}
              >
                <option disabled={true}>Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Others</option>
              </select>
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Image URL</legend>
              <input
                type="text"
                className="input"
                value={photoUrl}
                onChange={(e) => setPhotoUrl(e.target.value)}
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">About</legend>
              <input
                type="text"
                className="input"
                value={about}
                onChange={(e) => setAbout(e.target.value)}
              />
            </fieldset>
            <div className="mt-6">
              <p className="text-red-500 mb-2">{error}</p>
              <button
                className="btn btn-primary btn-block"
                onClick={handleSubmit}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
