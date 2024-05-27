import React, { RefObject } from "react";

interface WelcomeNoteProps {
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  selectFileContainerWithWelcomeNoteRef: RefObject<HTMLDivElement>;
}

const WelcomeNote: React.FC<WelcomeNoteProps> = ({
  handleFileChange,
  selectFileContainerWithWelcomeNoteRef,
}) => {
  return (
    <div
      ref={selectFileContainerWithWelcomeNoteRef}
      id="selectFileContainerWithWelcomeNote"
      className="welcome-note"
    >
      <div className="welcome-note-content-warapper">
        <svg
          width="81"
          height="80"
          viewBox="0 0 81 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_138_1740)">
            <path
              d="M70.689 24.1946L51.2799 4.81C51.0222 4.55292 50.7163 4.34907 50.3797 4.21008C50.0431 4.0711 49.6824 3.99971 49.3182 4H16.0455C14.5747 4 13.1642 4.58352 12.1242 5.62218C11.0843 6.66084 10.5 8.06957 10.5 9.53846V70.4615C10.5 71.9304 11.0843 73.3392 12.1242 74.3778C13.1642 75.4165 14.5747 76 16.0455 76H65.9545C67.4253 76 68.8358 75.4165 69.8758 74.3778C70.9157 73.3392 71.5 71.9304 71.5 70.4615V26.1538C71.5003 25.7901 71.4288 25.4298 71.2897 25.0936C71.1505 24.7575 70.9464 24.452 70.689 24.1946ZM52.0909 13.4535L62.0346 23.3846H52.0909V13.4535ZM65.9545 70.4615H16.0455V9.53846H46.5455V26.1538C46.5455 26.8883 46.8376 27.5927 47.3576 28.112C47.8776 28.6313 48.5828 28.9231 49.3182 28.9231H65.9545V70.4615ZM54.8636 42.7692C54.8636 43.5037 54.5715 44.208 54.0515 44.7274C53.5315 45.2467 52.8263 45.5385 52.0909 45.5385H29.9091C29.1737 45.5385 28.4685 45.2467 27.9485 44.7274C27.4285 44.208 27.1364 43.5037 27.1364 42.7692C27.1364 42.0348 27.4285 41.3304 27.9485 40.8111C28.4685 40.2918 29.1737 40 29.9091 40H52.0909C52.8263 40 53.5315 40.2918 54.0515 40.8111C54.5715 41.3304 54.8636 42.0348 54.8636 42.7692ZM54.8636 53.8462C54.8636 54.5806 54.5715 55.285 54.0515 55.8043C53.5315 56.3236 52.8263 56.6154 52.0909 56.6154H29.9091C29.1737 56.6154 28.4685 56.3236 27.9485 55.8043C27.4285 55.285 27.1364 54.5806 27.1364 53.8462C27.1364 53.1117 27.4285 52.4073 27.9485 51.888C28.4685 51.3687 29.1737 51.0769 29.9091 51.0769H52.0909C52.8263 51.0769 53.5315 51.3687 54.0515 51.888C54.5715 52.4073 54.8636 53.1117 54.8636 53.8462Z"
              fill="#2F2F39"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_138_1740"
              x="10.5"
              y="4"
              width="65"
              height="76"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="4" dy="4" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 0.815686 0 0 0 0 0.847059 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_138_1740"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_138_1740"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
        <h1 className="feature-intro-title">
          Ultimate Document Summarization App
        </h1>
        <p className="feature-intro-desc">
          The cutting-edge AI-powered app that revolutionizes the way you digest
          lengthy documents and articles
        </p>

        <div className="form-group select-file-container text-center">
          <div className="custom-file">
            <svg
              width="50"
              height="52"
              viewBox="0 0 50 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_134_2815)">
                <g filter="url(#filter0_d_134_2815)">
                  <path
                    d="M48.0467 26.0795C48.057 29.7882 46.8772 33.3985 44.6873 36.3592C44.5949 36.4848 44.4793 36.5905 44.3468 36.6705C44.2144 36.7505 44.0679 36.8031 43.9155 36.8253C43.7632 36.8475 43.608 36.8389 43.4589 36.7999C43.3099 36.7609 43.1698 36.6924 43.0467 36.5982C42.9235 36.5041 42.8198 36.3861 42.7414 36.251C42.663 36.1159 42.6114 35.9664 42.5897 35.811C42.5679 35.6556 42.5764 35.4974 42.6146 35.3453C42.6528 35.1933 42.7199 35.0504 42.8123 34.9248C44.1864 33.0561 45.1054 30.881 45.4937 28.5789C45.8819 26.2768 45.7283 23.9135 45.0455 21.6838C44.3626 19.4542 43.1701 17.4219 41.5662 15.7546C39.9623 14.0872 37.9929 12.8325 35.8203 12.0938C33.6477 11.3551 31.3341 11.1536 29.0701 11.5059C26.8062 11.8582 24.6567 12.7542 22.7989 14.12C20.941 15.4858 19.428 17.2824 18.3844 19.3618C17.3409 21.4411 16.7967 23.7436 16.7967 26.0795C16.7967 26.3965 16.6732 26.7005 16.4534 26.9247C16.2337 27.1489 15.9356 27.2748 15.6248 27.2748C15.314 27.2748 15.0159 27.1489 14.7961 26.9247C14.5764 26.7005 14.4529 26.3965 14.4529 26.0795C14.4514 24.3471 14.709 22.6247 15.2166 20.9715C14.8335 20.9247 14.4481 20.9007 14.0623 20.8998C11.4723 20.8998 8.98836 21.9493 7.15695 23.8173C5.32554 25.6853 4.29666 28.2189 4.29666 30.8607C4.29666 33.5025 5.32554 36.0361 7.15695 37.9042C8.98836 39.7722 11.4723 40.8217 14.0623 40.8217H18.7498C19.0606 40.8217 19.3587 40.9476 19.5784 41.1718C19.7982 41.3959 19.9217 41.7 19.9217 42.017C19.9217 42.334 19.7982 42.638 19.5784 42.8622C19.3587 43.0864 19.0606 43.2123 18.7498 43.2123H14.0623C12.3863 43.2117 10.7286 42.8563 9.1942 42.1684C7.65981 41.4806 6.28212 40.4753 5.14832 39.2163C4.01452 37.9573 3.14929 36.4719 2.60741 34.8542C2.06552 33.2364 1.85877 31.5216 2.00025 29.8181C2.14173 28.1147 2.62835 26.4597 3.42931 24.958C4.23028 23.4563 5.32815 22.1406 6.65343 21.094C7.97872 20.0475 9.50256 19.293 11.1285 18.8782C12.7545 18.4634 14.4471 18.3975 16.0994 18.6845C17.7438 15.1808 20.5067 12.351 23.9349 10.6593C27.3631 8.96767 31.2532 8.51451 34.9671 9.37419C38.681 10.2339 41.9982 12.3553 44.3748 15.3907C46.7513 18.426 48.0461 22.195 48.0467 26.0795ZM30.5154 25.2348C30.2957 25.011 29.9978 24.8852 29.6873 24.8852C29.3767 24.8852 29.0789 25.011 28.8592 25.2348L22.6092 31.6098C22.4022 31.8364 22.2895 32.1361 22.2948 32.4458C22.3002 32.7554 22.4232 33.0509 22.6379 33.2699C22.8526 33.4889 23.1422 33.6143 23.4458 33.6198C23.7494 33.6253 24.0433 33.5103 24.2654 33.2992L28.5154 28.9662V42.017C28.5154 42.334 28.6389 42.638 28.8586 42.8622C29.0784 43.0864 29.3765 43.2123 29.6873 43.2123C29.9981 43.2123 30.2962 43.0864 30.5159 42.8622C30.7357 42.638 30.8592 42.334 30.8592 42.017V28.9662L35.1092 33.2992C35.3313 33.5103 35.6251 33.6253 35.9287 33.6198C36.2323 33.6143 36.522 33.4889 36.7367 33.2699C36.9514 33.0509 37.0744 32.7554 37.0797 32.4458C37.0851 32.1361 36.9724 31.8364 36.7654 31.6098L30.5154 25.2348Z"
                    fill="black"
                  />
                </g>
              </g>
              <defs>
                <filter
                  id="filter0_d_134_2815"
                  x="1.95703"
                  y="8.94934"
                  width="48.0898"
                  height="36.2629"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="2" dy="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 1 0 0 0 0 0.815686 0 0 0 0 0.847059 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_134_2815"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_134_2815"
                    result="shape"
                  />
                </filter>
                <clipPath id="clip0_134_2815">
                  <rect
                    width="50"
                    height="51"
                    fill="white"
                    transform="translate(0 0.579468)"
                  />
                </clipPath>
              </defs>
            </svg>
            <input
              type="file"
              id="pdfFile"
              name="inputFile"
              accept=".pdf"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
            <p id="dropArea" className="upload-audio-inst">
              Drag your PDF file here
              <br />
              <span>or</span>
            </p>
            <label htmlFor="pdfFile" className="mb-0">
              <span className="btn btn-primary">Browse File</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeNote;
