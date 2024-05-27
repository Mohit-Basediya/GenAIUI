import React, { RefObject } from "react";
import { CopyIcon, DownloadIcon, TickIcon } from "./Icons";

interface ChatHistoryProps {
  summary: string | false;
  formattedAnswers: FormattedAnswer[];
  copied: boolean;
  isDownloaded: boolean;
  handleCopy: () => void;
  handleDownload: () => void;
  userQuery: string;
  summaryResultRef: RefObject<HTMLDivElement>;
  chatHistoryRef: RefObject<HTMLDivElement>;
}

interface FormattedAnswer {
  question: string;
  answer: string;
}

const ChatHistory: React.FC<ChatHistoryProps> = ({
  summary,
  formattedAnswers,
  copied,
  isDownloaded,
  handleCopy,
  handleDownload,
  userQuery,
  summaryResultRef,
  chatHistoryRef,
}) => {
  return (
    <div
      className="chat-wrapper"
      id="chatHistory"
      ref={chatHistoryRef}
      style={{ display: "none" }}
    >
      <div>
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
  );
};

export default ChatHistory;
