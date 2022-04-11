import React from "react";
// import { ReactComponent as CheckSVG } from "./check.svg";
// import { ReactComponent as DeleteSVG } from "./delete.svg";
import { BsCheckCircleFill } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import "./TodoIcon.css";

const iconTypes = {
  check: (color) => (
    <BsCheckCircleFill className="Icon-svg Icon-svg--check" fill={color} />
  ),
  delete: (color) => (
    <AiFillDelete className="Icon-svg Icon-svg--delete" fill={color} />
  ),
};

function TodoIcon({ type, color = "gray", onClick }) {
  return (
    <span
      className={`Icon-container Icon-container--${type}`}
      onClick={onClick}
    >
      {iconTypes[type](color)}
    </span>
  );
}

export { TodoIcon };
