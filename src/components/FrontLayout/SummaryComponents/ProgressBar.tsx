import React from "react";

interface ProgressBarProps {
  selectedFile: File | null;
  progressBarContainerRef: React.RefObject<HTMLDivElement>;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  selectedFile,
  progressBarContainerRef
}) => {
  return (
    <div
      ref={progressBarContainerRef}
      id="progressBarContainer"
      className="audio-processing-container"
      style={{ display: "none" }}
    >
      <div className="audio-processing-container-body">
        <div id="mainProgressBar" className="audio-upload-progress">
          <div id="progressBarWithRemoveBtn" style={{ display: "none" }}>
            <p>Uploading PDF File</p>
            <div id="removeFileBtn">
              <span className="stop-upload">
                <svg
                  width="7"
                  height="6"
                  viewBox="0 0 7 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.34924 0.796605L4.15766 2.98818L6.34924 5.17976C6.39578 5.22313 6.4331 5.27542 6.45899 5.33353C6.48488 5.39163 6.4988 5.45436 6.49993 5.51796C6.50105 5.58156 6.48935 5.64474 6.46553 5.70372C6.4417 5.7627 6.40624 5.81628 6.36126 5.86126C6.31628 5.90624 6.2627 5.9417 6.20372 5.96553C6.14474 5.98935 6.08156 6.00105 6.01796 5.99993C5.95436 5.9988 5.89163 5.98488 5.83353 5.95899C5.77542 5.9331 5.72313 5.89578 5.67976 5.84924L3.48818 3.65766L1.29661 5.84924C1.20681 5.93291 1.08804 5.97846 0.965328 5.97629C0.842612 5.97413 0.725527 5.92442 0.638739 5.83763C0.551952 5.75084 0.502239 5.63376 0.500074 5.51104C0.497909 5.38832 0.543461 5.26956 0.627132 5.17976L2.81871 2.98818L0.627132 0.796605C0.543461 0.706811 0.497909 0.588045 0.500074 0.465328C0.502239 0.342612 0.551952 0.225527 0.638739 0.138739C0.725527 0.0519523 0.842612 0.00223899 0.965328 7.37974e-05C1.08804 -0.00209139 1.20681 0.0434605 1.29661 0.127132L3.48818 2.31871L5.67976 0.127132C5.76956 0.0434605 5.88832 -0.00209139 6.01104 7.37974e-05C6.13376 0.00223899 6.25084 0.0519523 6.33763 0.138739C6.42442 0.225527 6.47413 0.342612 6.47629 0.465328C6.47846 0.588045 6.43291 0.706811 6.34924 0.796605Z"
                    fill="#EA1B3D"
                  />
                </svg>
              </span>
            </div>
            <div
              style={{ display: "block" }}
              className="progress-bar-container"
            >
              <progress
                className="progress-bar"
                id="progressBar"
                value="0"
                max="100"
              ></progress>
            </div>
          </div>
          <div className="file-upload-status" id="selectedFileName">
            {selectedFile && (
              <div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_193_549)">
                    <path
                      d="M18.3332 9.23355V10.0002C18.3321 11.7972 17.7503 13.5458 16.6743 14.9851C15.5983 16.4244 14.0859 17.4773 12.3626 17.9868C10.6394 18.4963 8.79755 18.4351 7.1119 17.8124C5.42624 17.1896 3.98705 16.0386 3.00897 14.5311C2.03089 13.0236 1.56633 11.2403 1.68457 9.44714C1.80281 7.65402 2.49751 5.94715 3.66507 4.58111C4.83263 3.21506 6.41049 2.26303 8.16333 1.867C9.91617 1.47097 11.7501 1.65216 13.3915 2.38355"
                      stroke="#00882C"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18.3333 3.3335L10 11.6752L7.5 9.17516"
                      stroke="#00882C"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_193_549">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span>File uploaded successfully {selectedFile.name}</span>
              </div>
            )}
          </div>
        </div>

        <div className="upload-audio-cta">
          <label htmlFor="pdfFile" className="mb-0">
            <span>Browse New File</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.49097 6.04223L6.49098 6.04221L7.78142 4.75365V9.64464C7.78142 9.78869 7.83875 9.92682 7.94075 10.0286C8.04274 10.1304 8.18103 10.1876 8.32518 10.1876C8.46934 10.1876 8.60763 10.1304 8.70962 10.0286C8.81161 9.92682 8.86895 9.78869 8.86895 9.64464V4.75365L10.1594 6.04221L10.1594 6.04223C10.2614 6.14408 10.3998 6.20126 10.544 6.20126C10.6882 6.20126 10.8266 6.14408 10.9286 6.04223C11.0307 5.94037 11.088 5.80219 11.088 5.65806C11.088 5.51394 11.0307 5.37575 10.9286 5.2739L8.70983 3.05918C8.70982 3.05916 8.70981 3.05915 8.70979 3.05914C8.65929 3.00868 8.59933 2.96866 8.53335 2.94136C8.46735 2.91405 8.39662 2.9 8.32518 2.9C8.25375 2.9 8.18301 2.91405 8.11701 2.94136C8.05103 2.96866 7.99107 3.00868 7.94057 3.05914C7.94056 3.05915 7.94055 3.05916 7.94053 3.05918L5.72175 5.2739C5.6197 5.37575 5.56234 5.51394 5.56234 5.65806C5.56234 5.80219 5.6197 5.94037 5.72175 6.04223C5.82378 6.14408 5.96214 6.20126 6.10636 6.20126C6.25058 6.20126 6.38893 6.14408 6.49097 6.04223ZM13.7504 12.7453V9.64464C13.7504 9.50058 13.693 9.36245 13.591 9.26065C13.489 9.15884 13.3508 9.10168 13.2066 9.10168C13.0624 9.10168 12.9242 9.15884 12.8222 9.26065C12.7202 9.36245 12.6628 9.50058 12.6628 9.64464V12.6453H3.98753V9.64464C3.98753 9.50058 3.9302 9.36245 3.8282 9.26065C3.72621 9.15884 3.58792 9.10168 3.44377 9.10168C3.29961 9.10168 3.16132 9.15884 3.05933 9.26065C2.95733 9.36245 2.9 9.50058 2.9 9.64464V12.7453C2.9 13.0068 3.00409 13.2576 3.18931 13.4425C3.37452 13.6274 3.62568 13.7312 3.88753 13.7312H12.7628C13.0247 13.7312 13.2758 13.6274 13.4611 13.4425C13.6463 13.2576 13.7504 13.0068 13.7504 12.7453Z"
                fill="#2F2F39"
                stroke="#2F2F39"
                strokeWidth="0.2"
              />
            </svg>
          </label>
        </div>
        <div className="start-over-container">
          <a className="nav-link" href="/Generate_Summary">
            <button
              type="button"
              id="generateDoc"
              className="btn-generate label-with-icon"
            >
              Start Over
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
