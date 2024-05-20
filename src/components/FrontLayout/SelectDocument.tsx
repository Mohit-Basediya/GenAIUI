import { useState } from "react";

export default function SelectDocument() {
  const [selectedOption, setSelectedOption] = useState("all");
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleOptionChange = (e: any) => {
    setSelectedOption(e.target.value);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    if (value === "") {
      setSuggestions([]);
    } else {
      const filtered = filterSuggestions(value);
      setSuggestions(filtered);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    setSuggestions([]);
  };

  const filterSuggestions = (value: any) => {
    // Replace this with your logic to filter the suggestions based on the input value
    const suggestions = [
      "The Fair Labor Standards Act of 1938",
      "New Labor Laws Guide 2024",
      "Labor & Employment Law - STCL Houston",
      "Employment & Labour Laws and Regulations USA 2024",
    ];

    return suggestions.filter((suggestion) =>
      suggestion.toLowerCase().includes(value.toLowerCase())
    );
  };

  return (
    <div
      id="selectFileContainerWithWelcomeNote"
      className="welcome-note"
      style={{ display: "block" }}
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

        {/*Step1: option to uplaod or select audio file*/}

        <input
          type="text"
          placeholder="Enter Questions (One question per line)"
          className="form-control question-container"
          id="question_input"
          name="text"
          autoComplete="off"
        />

        <div className="radio-group">
          <label className="radio-label">
            <input
              type="radio"
              value="all"
              checked={selectedOption === "all"}
              onChange={handleOptionChange}
              className="radio-input"
            />
            <span className="radio-circle" />
            <span className="radio-text">All documents</span>
          </label>
          <label className="radio-label">
            <input
              type="radio"
              value="selected"
              checked={selectedOption === "selected"}
              onChange={handleOptionChange}
              className="radio-input"
            />
            <span className="radio-circle" />
            <span className="radio-text">Selected document</span>
          </label>
        </div>
        <div className="suggestions-container">
          {selectedOption === "selected" && (
            <input
              type="text"
              placeholder="Enter document name or metadata to select one"
              className="form-control question-container"
              id="document_input"
              name="text"
              autoComplete="off"
              value={inputValue}
              onChange={handleInputChange}
            />
          )}
          {suggestions.length > 0 && (
            <ul className="suggestions-list">
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="suggestion-item"
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>

        <button
          type="button"
          id="show_intact"
          className="btn-generate label-with-icon cta-intro"
          // onClick={init()}
        >
          <svg
            width="16"
            height="18"
            viewBox="0 0 16 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.3488 7.87209L1.90861 0.164426C1.68206 0.0367376 1.42221 -0.0186732 1.16356 0.00555387C0.904924 0.029781 0.659741 0.132499 0.460585 0.300064C0.261429 0.467628 0.117727 0.692107 0.0485688 0.943682C-0.0205895 1.19526 -0.011931 1.46202 0.0733942 1.70853L2.55342 8.98053C2.5531 8.9832 2.5531 8.9859 2.55342 8.98857C2.55297 8.99123 2.55297 8.99395 2.55342 8.99661L0.0733942 16.2847C0.00506218 16.4786 -0.0159761 16.6862 0.012045 16.8899C0.0400662 17.0937 0.116329 17.2878 0.234433 17.4558C0.352537 17.6238 0.509036 17.7609 0.690794 17.8556C0.872552 17.9503 1.07427 17.9998 1.27901 18C1.50114 17.9994 1.71938 17.9413 1.91261 17.8312L15.3456 10.1107C15.5437 9.99916 15.7087 9.83667 15.8238 9.6399C15.9388 9.44312 15.9996 9.21915 16 8.99095C16.0004 8.76276 15.9404 8.53856 15.8261 8.34138C15.7118 8.14419 15.5473 7.98111 15.3496 7.86887L15.3488 7.87209ZM1.27901 16.7139V16.7067L3.69023 9.64045H8.31908C8.48882 9.64045 8.65161 9.57271 8.77163 9.45211C8.89166 9.33152 8.95909 9.16796 8.95909 8.99741C8.95909 8.82687 8.89166 8.66331 8.77163 8.54271C8.65161 8.42212 8.48882 8.35437 8.31908 8.35437H3.69663L1.28381 1.29055L1.27901 1.28091L14.7191 8.98375L1.27901 16.7139Z"
              fill="white"
            ></path>
          </svg>
          Generate Summary
        </button>
      </div>
    </div>
  );
}
