const ProgressBar = ({ visibility, updateSummary }: any) => {
  
  const handleButtonClick = () => {
    updateSummary(false);
  };

  return (
    <div
      id="progressBarContainer"
      className="audio-processing-container"
      style={{
        display: visibility,
        backgroundColor: "inherit",
        boxShadow: "none",
      }}
    >
      <div className="audio-processing-container-body">
        <div className="start-over-container">
          {/* <a className="nav-link" href="/Home"> */}
          <button
            type="button"
            id="generateDoc"
            className="btn-generate label-with-icon"
            onClick={handleButtonClick}
          >
            Start Over
          </button>
          {/* </a> */}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
