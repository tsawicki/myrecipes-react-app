import React, { useEffect, useRef } from "react";
import Form from "./Form";
import { Recipe } from "../models/Recipe.model";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

interface OwnProps {
  recipe: Recipe;
  isEdit: boolean;
  onConfirm: (recipe: Recipe) => void;
  onClose: () => void;
}

const Modal: React.FunctionComponent<OwnProps> = ({
  recipe,
  isEdit,
  onConfirm,
  onClose
}: OwnProps): JSX.Element => {
  const containerNode = useRef<HTMLDivElement>(null);
  const handleSubmit = (recipe: Recipe): void => {
    onConfirm(recipe);
    onClose();
  };

  useEffect((): (() => void) => {
    const onClickOutside = (event: MouseEvent): void => {
      if (
        containerNode.current &&
        !containerNode.current.contains(event.target as HTMLDivElement)
      ) {
        onClose();
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return (): void => {
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [onClose]);

  return (
    <div className="modal-overlay" data-testid="modal-overlay">
      <div className="modal-container" ref={containerNode}>
        <button
          onClick={onClose}
          className="modal-close"
          data-testid="close-modal-btn"
        >
          <FontAwesomeIcon icon={faTimesCircle} size="lg" />
        </button>
        <h2 className="modal-title">{`${
          isEdit ? "Edit" : "Add New"
        } Recipe`}</h2>
        <Form onSubmit={handleSubmit} recipe={recipe} />
      </div>
    </div>
  );
};

export default Modal;
