import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

interface OwnProps {
  onAddNew: () => void;
}

const Header: React.FunctionComponent<OwnProps> = ({ onAddNew }: OwnProps) => {
  return (
    <div className="text-center">
      <h1>
        <FontAwesomeIcon icon={faUtensils} style={{ marginRight: "20px" }} />
        My Recipes
      </h1>
      <button className="btn" onClick={onAddNew}>
        Add New recipe
      </button>
    </div>
  );
};

export default Header;
