import "./Offcanvas.css";

const Offcanvas = ({ isOpen, onClose, children }: any) => {
  const handleCloseOffcanvas = (e: any) => {
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
                <li>
                  <span>The Fair Labor Standards Act of 1938</span>
                  <div>
                    <span className="badge">fair labor</span>
                    <span className="badge">1938 Standards</span>
                  </div>
                </li>
                <li>
                  <span>Labor &amp; Employment Law - STCL Houston</span>
                  <div>
                    <span className="badge">fair labor</span>
                    <span className="badge">STCL Houston</span>
                    <span className="badge">Employment law</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Offcanvas;
