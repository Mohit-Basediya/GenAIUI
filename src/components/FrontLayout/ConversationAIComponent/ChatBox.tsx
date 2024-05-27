import { useEffect, useState } from "react";
import Offcanvas from "./Offcanvas";
import { useRef } from "react";

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
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      fill-rule="evenodd"
      d="M18.063 5.674a1 1 0 0 1 .263 1.39l-7.5 11a1 1 0 0 1-1.533.143l-4.5-4.5a1 1 0 1 1 1.414-1.414l3.647 3.647 6.82-10.003a1 1 0 0 1 1.39-.263"
      clip-rule="evenodd"
    ></path>
  </svg>
);

export default function ChatBox({
  visibility,
  qaList,
}: any) {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);
  const [currentSources, setCurrentSources] = useState([]);

  const summaryResultRef = useRef<HTMLDivElement>(null);
  // console.log(qaList);

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

  const handleOpenOffcanvas = (sources:any) => {
    setCurrentSources(sources);
    setIsOffcanvasOpen(true);
  };

  const handleCloseOffcanvas = () => {
    setIsOffcanvasOpen(false);
  };

  useEffect(() => {
    if (visibility == "block") document.body.classList.add("document-uploaded");

    return () => {
      document.body.classList.remove("document-uploaded");
    };
  }, [visibility]);

  return (
    <div
      className="chat-wrapper"
      id="chatHistory"
      style={{ display: visibility }}
    >
      {/* {question_answer.result.result && (
        <>
          <div>
            <div className="prompt-response user" id="textInput">
              {question_answer.question}
            </div>
          </div>

          <div id="promptBoxChat">
            <div className="prompt-response bot">
              <div id="summaryResult" ref={summaryResultRef}>
                <div className="pdf-qa-list">
                  <p className="answer">{question_answer.result.result}</p>
                </div>
              </div>
              <ul className="generated-prompt-cta">
                <li title="Download" onClick={handleDownload}>
                  <i>{isDownloaded ? <TickIcon /> : <DownloadIcon />}</i>
                </li>
                <li id="copyTitle" title="Copy" onClick={handleCopy}>
                  <i>{copied ? <TickIcon /> : <CopyIcon />}</i>
                </li>
                <li
                  className="source-documents"
                  title="Source Documents"
                  style={{ marginLeft: "auto" }}
                  onClick={handleOpenOffcanvas}
                >
                  Source documents
                </li>
              </ul>
              <Offcanvas
                isOpen={isOffcanvasOpen}
                onClose={handleCloseOffcanvas}
                source={question_answer.result.source}
              ></Offcanvas>
            </div>
          </div>
        </>
      )} */}
      {qaList.map((question_answer: any, index: number) => (
        <div key={index}>
          {question_answer.result.result && (
            <>
              <div>
                <div className="prompt-response user" id="textInput">
                  {question_answer.question}
                </div>
              </div>

              <div id="promptBoxChat">
                <div className="prompt-response bot">
                  <div id="summaryResult" ref={summaryResultRef}>
                    <div className="pdf-qa-list">
                      <p className="answer">{question_answer.result.result}</p>
                    </div>
                  </div>
                  <ul className="generated-prompt-cta">
                    <li title="Download" onClick={handleDownload}>
                      <i>{isDownloaded ? <TickIcon /> : <DownloadIcon />}</i>
                    </li>
                    <li id="copyTitle" title="Copy" onClick={handleCopy}>
                      <i>{copied ? <TickIcon /> : <CopyIcon />}</i>
                    </li>
                    <li
                      className="source-documents"
                      title="Source Documents"
                      style={{ marginLeft: "auto" }}
                      onClick={() => handleOpenOffcanvas(question_answer.result.source)}
                    >
                      Source documents
                    </li>
                  </ul>
                  <Offcanvas
                    isOpen={isOffcanvasOpen}
                    onClose={handleCloseOffcanvas}
                    source={currentSources}
                  />
                </div>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
