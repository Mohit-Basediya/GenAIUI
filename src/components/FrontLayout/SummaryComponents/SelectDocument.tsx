import React, { useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../Footer";
import SideBar from "../SideBar";
import ProgressBar from "./ProgressBar";
import WelcomeNote from "./WelcomeNote";
import ChatHistory from "./ChatHistory";
import PromptBox from "./PromptBox";

interface FormattedAnswer {
  question: string;
  answer: string;
}

export default function SelectDocument() {
  const location = useLocation();

  const [summary, setSummary] = useState<string | false>(false);
  const [userQuery, setUserQuery] = useState<string>("");
  const [formattedAnswers, setFormattedAnswers] = useState<FormattedAnswer[]>(
    []
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
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

      reader.onload = () => {
        showProgressBarContainerOnly();
      };

      reader.onerror = (event) => {
        console.error("Error reading file:", event.target?.error);
      };

      reader.readAsDataURL(file);
      addClassOnBody(file);
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
    console.log(fetchUrl);

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
    <div>
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
              <ProgressBar
                selectedFile={selectedFile}
                progressBarContainerRef={progressBarContainerRef}
              />
              <ChatHistory
                summary={summary}
                formattedAnswers={formattedAnswers}
                copied={copied}
                isDownloaded={isDownloaded}
                handleCopy={handleCopy}
                handleDownload={handleDownload}
                userQuery={userQuery}
                summaryResultRef={summaryResultRef}
                chatHistoryRef={chatHistoryRef}
              />
              <WelcomeNote
                handleFileChange={handleFileChange}
                selectFileContainerWithWelcomeNoteRef={
                  selectFileContainerWithWelcomeNoteRef
                }
              />
              {loading && (
                <div
                  className="css-loader"
                  id="loader"
                  style={{ display: loading ? "block" : "none" }}
                ></div>
              )}
            </div>
            <PromptBox
              prompt={prompt}
              setPrompt={setPrompt}
              handleFormSubmit={handleFormSubmit}
              promptboxRef={promptboxRef}
            />
          </form>
          <Footer />
        </div>
      </main>
    </div>
  );
}
