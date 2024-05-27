import React from "react";
import "./Offcanvas.css";

// Define the type for the props
interface SourceItem {
  filename: string;
  [key: string]: string;
}

interface OffcanvasProps {
  isOpen: boolean;
  onClose: () => void;
  source: SourceItem[];
}

const Offcanvas: React.FC<OffcanvasProps> = ({ isOpen, onClose, source }) => {
  const handleCloseOffcanvas = (
    e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>
  ) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      {isOpen && (
        <div className="offcanvas-backdrop" onClick={handleCloseOffcanvas}>
          <div className="offcanvas">
            <div className="offcanvas-header">
              <h5>Source documents</h5>
              <button
                className="offcanvas-close"
                onClick={handleCloseOffcanvas}
              >
                &times;
              </button>
            </div>
            <div className="offcanvas-body">
              <ul>
                {source &&
                  source.map((item, index) => (
                    <li key={index}>
                      <span>{item.filename}</span>
                      <div>
                        {Object.entries(item).map(([key, value]) =>
                          key !== "filename" ? (
                            <span key={key} className="badge">
                              {value}
                            </span>
                          ) : null
                        )}
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Offcanvas;
