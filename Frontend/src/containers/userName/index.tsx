import "./style.css";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { body } from "../../helpers/features/userSlice.ts";
import EditUser from "../editUser";

const UserName = () => {
  const infos = useSelector(body);
  const firstName = infos.payload?.user?.body?.body?.firstName;
  const lastName = infos.payload?.user?.body?.body?.lastName;
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
      <h1 className="Userheader capitalizeName">
        {`${firstName} ${lastName} ! `}
      </h1>

      <button onClick={edit} className="edit-button" data-testid="submitEditName">
        Edit Name
      </button>
    </div>
  );
};

export default UserName;
