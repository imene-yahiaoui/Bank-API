/* eslint-disable @typescript-eslint/no-explicit-any */
 import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { body } from "../../helpers/features/userSlice";
import { useDispatch } from "react-redux";
import { editUserNameAPT } from "../../helpers/services/api";
import "./style.css";

const EditUser =  ({ closeModal }: { closeModal: any }) => {
  const infos = useSelector(body);
  const firstNameDefult = infos.payload?.user?.body?.body?.firstName;
  const lastNameDefult = infos.payload?.user?.body?.body?.lastName;
  const [firstName, setFirstName] = useState(firstNameDefult);
  const [lastName, setLastName] = useState(lastNameDefult);
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  async function Update(e : React.SyntheticEvent) {
    e.preventDefault();
    const ediUserName = await editUserNameAPT(token, firstName, lastName);
    console.log("ediUserName", ediUserName);
    if (ediUserName.status === 200) {
      dispatch(
        body({
          body: ediUserName.body,
        })
      );
    }

    closeModal(false);
  }

  return (
    <div className="editUser">
      <h2 className="title">Edit User info</h2>
      <form>
        <section className="infoUser">
          <div className="inputuser">
            <input
              className="inputInfoUser"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="inputuser">
            <input
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
