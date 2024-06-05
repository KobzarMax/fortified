import { useClickOutside } from "../../utils/utils";
import { useRef } from "react";
import "./Modal.css";

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
      </div>
    </div>
  );
};
