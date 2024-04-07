/**
 * UserName Component
 *
 * This component displays the user's first and last name fetched from the Redux store.
 * It also provides an option to edit the user's name by opening the EditUser component.
 *
 * @return {JSX.Element} Returns a JSX element displaying the user's name and an edit button.
 */
import "./style.css";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectBody } from "../../helpers/features/userSlice.ts";
import EditUser from "../editUser";

const UserName = () => {
  const infos = useSelector(selectBody);

  const firstName = infos?.body?.firstName;
  const lastName = infos?.body?.lastName;
  const [open, setOpen] = useState(false);

  function edit(e: React.SyntheticEvent) {
    e.preventDefault();
    setOpen(true);
  }

  return open ? (
    <EditUser closeModal={setOpen} />
  ) : (
    <div className="Userheader">
      <h1>Welcome back</h1>
      <h1 className="Userheader capitalizeName" data-testid="userName">
        {`${firstName} ${lastName} ! `}
      </h1>

      <button
        onClick={edit}
        className="edit-button"
        data-testid="submitEditName"
      >
        Edit Name
      </button>
    </div>
  );
};

export default UserName;
