/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectBody,body} from "../../helpers/features/userSlice.ts";
import { useDispatch } from "react-redux";
import { editUserNameAPI } from "../../helpers/services/api";
import DisplayMessage from "../../components/displayMessage";

import "./style.css";

const EditUser = ({ closeModal }: { closeModal: any }) => {
  const infos = useSelector(selectBody);
  const firstNameDefult = infos?.body?.firstName;
  const lastNameDefult = infos.body?.lastName;
  const [firstName, setFirstName] = useState(firstNameDefult);
  const [lastName, setLastName] = useState(lastNameDefult);
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  async function Update(e: React.SyntheticEvent) {
    e.preventDefault();
    const ediUserName = await editUserNameAPI(token, firstName, lastName);
    if (ediUserName?.status === 200) {
      dispatch(
        body({
          body: ediUserName.body,
        })
      );
    }
else{
  DisplayMessage(
    "Server unavailable. Please try again later",
    "linear-gradient(to right, #00b09b, #96c93d)"
  );
}
    closeModal(false);
   
  }

  return (
    <div className="editUser">
      <h2 className="title" data-testid="title">
        Edit User info
      </h2>
      <form>
        <section className="infoUser">
          <div className="inputuser">
            <input
              className="inputInfoUser"
              data-testid="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="inputuser">
            <input
              data-testid="Last Name"
              className="inputInfoUser"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </section>
        <div className="btn">
          <button className="submiteBtn" onClick={Update}>
            Save
          </button>
          <button className="submiteBtn" onClick={() => closeModal(false)}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditUser;
