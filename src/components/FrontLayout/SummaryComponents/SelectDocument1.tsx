import { useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../Footer";
import SideBar from "../SideBar";

interface FormattedAnswer {
  question: string;
  answer: string;
}

const CopyIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.721 0.715576H4.05436C3.9107 0.715576 3.77293 0.772645 3.67135 0.874227C3.56976 0.975809 3.5127 1.11358 3.5127 1.25724V3.96558H0.804362C0.660703 3.96558 0.522928 4.02264 0.421346 4.12423C0.319764 4.22581 0.262695 4.36358 0.262695 4.50724V13.1739C0.262695 13.3176 0.319764 13.4553 0.421346 13.5569C0.522928 13.6585 0.660703 13.7156 0.804362 13.7156H9.47103C9.61469 13.7156 9.75246 13.6585 9.85405 13.5569C9.95563 13.4553 10.0127 13.3176 10.0127 13.1739V10.4656H12.721C12.8647 10.4656 13.0025 10.4085 13.104 10.3069C13.2056 10.2053 13.2627 10.0676 13.2627 9.92391V1.25724C13.2627 1.11358 13.2056 0.975809 13.104 0.874227C13.0025 0.772645 12.8647 0.715576 12.721 0.715576ZM8.92936 12.6322H1.34603V5.04891H8.92936V12.6322ZM12.1794 9.38224H10.0127V4.50724C10.0127 4.36358 9.95563 4.22581 9.85405 4.12423C9.75246 4.02264 9.61469 3.96558 9.47103 3.96558H4.59603V1.79891H12.1794V9.38224Z"
      fill="#2F2F39"
    />
  </svg>
);

const DownloadIcon = () => (
  <svg
    width="17"
    height="16"
    viewBox="0 0 17 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.0601 9.5V13C14.0601 13.2321 13.9679 13.4546 13.8038 13.6187C13.6397 13.7828 13.4171 13.875 13.1851 13.875H3.18506C2.95299 13.875 2.73043 13.7828 2.56634 13.6187C2.40225 13.4546 2.31006 13.2321 2.31006 13V9.5C2.31006 9.40054 2.34957 9.30516 2.41989 9.23483C2.49022 9.16451 2.5856 9.125 2.68506 9.125C2.78451 9.125 2.8799 9.16451 2.95022 9.23483C3.02055 9.30516 3.06006 9.40054 3.06006 9.5V13C3.06006 13.0332 3.07323 13.0649 3.09667 13.0884C3.12011 13.1118 3.15191 13.125 3.18506 13.125H13.1851C13.2182 13.125 13.25 13.1118 13.2734 13.0884C13.2969 13.0649 13.3101 13.0332 13.3101 13V9.5C13.3101 9.40054 13.3496 9.30516 13.4199 9.23483C13.4902 9.16451 13.5856 9.125 13.6851 9.125C13.7845 9.125 13.8799 9.16451 13.9502 9.23483C14.0206 9.30516 14.0601 9.40054 14.0601 9.5ZM7.92006 9.765C7.99037 9.83523 8.08568 9.87467 8.18506 9.87467C8.28443 9.87467 8.37975 9.83523 8.45006 9.765L10.9501 7.265C11.0163 7.19391 11.0524 7.09989 11.0506 7.00274C11.0489 6.90559 11.0096 6.8129 10.9409 6.74419C10.8722 6.67548 10.7795 6.63613 10.6823 6.63441C10.5852 6.6327 10.4911 6.66876 10.4201 6.735L8.56006 8.59437V2.5C8.56006 2.40054 8.52055 2.30516 8.45022 2.23483C8.3799 2.16451 8.28451 2.125 8.18506 2.125C8.0856 2.125 7.99022 2.16451 7.91989 2.23483C7.84957 2.30516 7.81006 2.40054 7.81006 2.5V8.59437L5.95006 6.735C5.87897 6.66876 5.78495 6.6327 5.6878 6.63441C5.59065 6.63613 5.49795 6.67548 5.42925 6.74419C5.36054 6.8129 5.32118 6.90559 5.31947 7.00274C5.31776 7.09989 5.35382 7.19391 5.42006 7.265L7.92006 9.765Z"
      fill="#000"
    />
  </svg>
);

const TickIcon = () => (
  <svg
    style={{ display: "block" }}
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M18.063 5.674a1 1 0 0 1 .263 1.39l-7.5 11a1 1 0 0 1-1.533.143l-4.5-4.5a1 1 0 1 1 1.414-1.414l3.647 3.647 6.82-10.003a1 1 0 0 1 1.39-.263"
      clipRule="evenodd"
    ></path>
  </svg>
);

export default function SelectDocument() {
  const location = useLocation();

  const [summary, setSummary] = useState<string | false>(false);
  const [userQuery, setUserQuery] = useState<string>("");
  const [formattedAnswers, setFormattedAnswers] = useState<FormattedAnswer[]>(
    []
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  // const [progress, setProgress] = useState<number>(0);
  // const [fileLoaded, setFileLoaded] = useState<boolean>(false);
  const [prompt, setPrompt] = useState<string>("");
  const [copied, setCopied] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);

  const selectFileContainerWithWelcomeNoteRef = useRef<HTMLDivElement>(null);
  const summaryResultRef = useRef<HTMLDivElement>(null);
  const progressBarContainerRef = useRef<HTMLDivElement>(null);
  const textInputPromptRef = useRef<HTMLDivElement>(null);
  const promptboxRef = useRef<HTMLDivElement>(null);
  const chatHistoryRef = useRef<HTMLDivElement>(null);
  const pgContentWrpprRef = useRef<HTMLDivElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;

    setSelectedFile(file);
    if (file) {
      const reader = new FileReader();

      // reader.onprogress = (event: ProgressEvent<FileReader>) => {
      //   if (event.lengthComputable) {
      //     const percentLoaded = (event.loaded / event.total) * 100;
      //     setProgress(percentLoaded);
      //     if (percentLoaded === 100) {
      //       setFileLoaded(true);
      //     }
      //   }
      // };

      reader.onload = () => {
        // console.log("File loaded successfully");
        showProgressBarContainerOnly();
      };

      reader.onerror = (event) => {
        console.error("Error reading file:", event.target?.error);
      };

      reader.readAsDataURL(file);
      addClassOnBody(file);
    } else {
      // setProgress(0);
      // setFileLoaded(false);
    }
  };

  const addClassOnBody = async (file: any) => {
    document.body.classList.add("document-uploaded");
    setLoading(true);

    if (!file) {
      setLoading(false);
      return;
    }
    const formData = new FormData();
    formData.append("input_file", file);
    try {
      const response = await callAPI(formData, prompt);
      const data = await response?.json();

      setLoading(false);
      setSummary(data.summary || "");
      setFormattedAnswers(data.formatted_answers || []);

      if (pgContentWrpprRef.current) {
        pgContentWrpprRef.current.classList.add("transcript-generated");
      }

      if (chatHistoryRef.current) {
        chatHistoryRef.current.style.display = "block";
      }
    } catch (error) {
      setLoading(false);
      console.error("Error:", error);
    }
  };

  const showProgressBarContainerOnly = () => {
    if (progressBarContainerRef.current) {
      progressBarContainerRef.current.style.display = "block";
    }
    if (selectFileContainerWithWelcomeNoteRef.current) {
      selectFileContainerWithWelcomeNoteRef.current.style.display = "none";
    }
    if (textInputPromptRef.current) {
      textInputPromptRef.current.style.display = "block";
    }
    if (promptboxRef.current) {
      promptboxRef.current.style.display = "block";
    }
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    if (!selectedFile) {
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("input_file", selectedFile);

    try {
      const response = await callAPI(formData, prompt);
      const data = await response?.json();

      setLoading(false);
      setUserQuery(prompt);
      setPrompt("");
      setSummary(data.summary || "");
      setFormattedAnswers(data.formatted_answers || []);

      if (pgContentWrpprRef.current) {
        pgContentWrpprRef.current.classList.add("transcript-generated");
      }

      if (chatHistoryRef.current) {
        chatHistoryRef.current.style.display = "block";
      }
    } catch (error) {
      setLoading(false);
      console.error("Error:", error);
    }
  };

  const callAPI = (formData: FormData, prompt: string) => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/";
      return;
    }

    let fetchUrl = "https://inteligenius.azurewebsites.net/generate_summary_UI";
    if (location.pathname == "/Rag_Summary") {
      fetchUrl = "https://inteligenius.azurewebsites.net/adding_metadata_UI";
    }
    // console.log(fetchUrl);

    return fetch(`${fetchUrl}?prompt=${encodeURIComponent(prompt)}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });
  };

  const handleCopy = () => {
    const summaryResultContent = summaryResultRef.current?.innerText;

    if (summaryResultContent) {
      navigator.clipboard
        .writeText(summaryResultContent)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        })
        .catch((error) => {
          console.error("Failed to copy: ", error);
        });
    }
  };

  const handleDownload = () => {
    const summaryResultContent = summaryResultRef.current?.innerText;

    if (summaryResultContent) {
      const blob = new Blob([summaryResultContent], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "summary.txt";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      setIsDownloaded(true);
      setTimeout(() => {
        setIsDownloaded(false);
      }, 2000);
    }
  };

  return (
    <div className="app-container">
      <SideBar />
      <main className="app-content-wrppr" id="page-content">
        <div className="pg-wrppr pg-generate-contract-doc">
          <form
            id="textInputPrompt"
            encType="multipart/form-data"
            onSubmit={handleFormSubmit}
          >
            <div
              id="pgContentWrppr"
              ref={pgContentWrpprRef}
              className="pg-content-wrppr pg-gcd"
            >
              {/*PDF file uploading progress and status to show here */}
              <div
                ref={progressBarContainerRef}
                id="progressBarContainer"
                className="audio-processing-container"
                style={{ display: "none" }}
              >
                <div className="audio-processing-container-body">
                  <div id="mainProgressBar" className="audio-upload-progress">
                    <div
                      id="progressBarWithRemoveBtn"
                      style={{ display: "none" }}
                    >
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
                          <span>
                            File uploaded successfully {selectedFile.name}
                          </span>
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

              {/*User and Prompt (Bot) response to show here */}
              <div
                className="chat-wrapper"
                id="chatHistory"
                ref={chatHistoryRef}
                style={{ display: "none" }}
              >
                <div>
                  {/* <div className="prompt-response user" id="textInput"></div> */}
                  {userQuery && (
                    <div className="prompt-response user" id="textInput">
                      {userQuery}
                    </div>
                  )}
                </div>

                <div id="promptBoxChat">
                  <div className="prompt-response bot">
                    <div id="summaryResult" ref={summaryResultRef}>
                      {summary && (
                        <div id="tranScript">
                          <p className="block-title">Synopsis:</p>
                          <p id="summary">{summary}</p>
                        </div>
                      )}
                      {formattedAnswers.length > 0 && (
                        <div>
                          <p className="block-title">QA Corner:</p>
                          {formattedAnswers.map((item, index) => (
                            <div key={index} className="pdf-qa-list">
                              <p className="question">{item.question}</p>
                              <p className="answer">{item.answer}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <ul className="generated-prompt-cta">
                      <li title="Download" onClick={handleDownload}>
                        <i>{isDownloaded ? <TickIcon /> : <DownloadIcon />}</i>
                      </li>
                      <li id="copyTitle" title="Copy" onClick={handleCopy}>
                        <i>{copied ? <TickIcon /> : <CopyIcon />}</i>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* {% if not summary %} */}
              {!summary && (
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
                          <feFlood
                            floodOpacity="0"
                            result="BackgroundImageFix"
                          />
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
                      The cutting-edge AI-powered app that revolutionizes the
                      way you digest lengthy documents and articles
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
                              <feFlood
                                floodOpacity="0"
                                result="BackgroundImageFix"
                              />
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
              )}
              {/* {% endif %} */}
              {loading && (
                <div
                  className="css-loader"
                  id="loader"
                  style={{ display: loading ? "block" : "none" }}
                ></div>
              )}
            </div>
            {/*User Prompt to ask question will show here */}
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
          </form>
          <Footer />
        </div>
      </main>
    </div>
  );
}
