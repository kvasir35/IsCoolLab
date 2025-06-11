import type { ReactNode } from "react";
import "./popup.scss";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Popup = ({ isOpen, onClose, children }: PopupProps) => {
  if (!isOpen) return null;

  return (
    <div className="overlay">
      <div className="popup">
        <button className="closeBtn" onClick={onClose}>
          ×
        </button>
        {children}
      </div>
    </div>
  );
};

export default Popup;
