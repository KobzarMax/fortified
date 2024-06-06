import { useClickOutside } from "../../utils/utils";
import { useRef } from "react";
import "./Modal.css";
import { xClose } from "../../static/images";

export const ModalOverlay = ({ children, onClose, size }) => {
  const modalRef = useRef(null);
  useClickOutside(modalRef, onClose);

  return (
    <div className="modal-overlay">
      <div
        ref={modalRef}
        style={{ maxWidth: `${size}px` }}
        className={`modal-wrapper`}
      >
        {children}
        <img
          className={`modal-close`}
          onClick={() => onClose()}
          src={xClose}
          alt="x-close"
        />
      </div>
    </div>
  );
};
