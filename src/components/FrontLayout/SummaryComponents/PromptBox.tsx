import React, { RefObject } from "react";

interface PromptBoxProps {
  prompt: string;
  setPrompt: React.Dispatch<React.SetStateAction<string>>;
  handleFormSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  promptboxRef: RefObject<HTMLDivElement>;
}

const PromptBox: React.FC<PromptBoxProps> = ({
  prompt,
  setPrompt,
  promptboxRef,
}) => {
  return (
    <div
      id="prompt-box"
      ref={promptboxRef}
      className="prompt-box"
      style={{ display: "none" }}
    >
      <div className="prompt-container btn-inside">
        <textarea
          className="form-control prompt contract-textarea"
          name="query"
          placeholder="Enter Questions (one question per line)"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        ></textarea>
        <button
          type="submit"
          id="summaryForm"
          className="btn-generate icon-only"
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
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PromptBox;
