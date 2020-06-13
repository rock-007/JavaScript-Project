import React from "react";

const Avatarlist = (props) => {
  return (
    <div className="avatarstyle ma4 bg-light-purple dib grow shadow-4 pa4">
      <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="Avatar" />
      <h1 className="">Its {props.name} Avatar</h1>
      <p> Developer</p>
    </div>
  );
};

export default Avatarlist;
