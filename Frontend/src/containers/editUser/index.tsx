import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { body } from "../../helpers/features/userSlice";
import { useDispatch } from "react-redux";
import "./style.css";

const EditUser = ({ closeModal }) => {
  const infos = useSelector(body);
  const userName = infos.payload?.user?.body?.body?.userName;

  const firstNameDefult = infos.payload?.user?.body?.body?.firstName;
 
  const lastNameDefult = infos.payload?.user?.body?.body?.lastName;
 
  const [firstName, setFirstName] = useState(firstNameDefult);
  const [lastName, setLastName] = useState(lastNameDefult);
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  async function Update(e) {
    e.preventDefault();
    console.log(userName);
    let editName = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        accept: "application/json",
      },

      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
      }),
    });

    editName = await editName.json();
    console.log("editName.status", editName.status);
    if (editName.status === 200) {
      console.log("editName.body", editName.body);
      dispatch(
        body({
          body: editName.body,
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
