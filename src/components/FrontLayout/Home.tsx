import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import SideBar from "./SideBar";
import SelectDocument from "./SummaryComponents/SelectDocument";
import SelectDocument1 from "./ConversationAIComponent/SelectDocument1";
import ChatBox from "./ConversationAIComponent/ChatBox";
import PromptBox from "./ConversationAIComponent/PromptBox";
import ProgressBar from "./ConversationAIComponent/ProgressBar";

interface QuestionResult {
  question: string;
  result: {
    result: string;
    source: {
      filename: string;
      [key: string]: any;
    }[];
  };
}

const Home = () => {
  const location = useLocation();
  const [summary, setSummary] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [filename, setFilename] = useState("");
  const [qaList, setQaList] = useState<QuestionResult[]>([]);

  useEffect(() => {
    const checkToken = () => {
      const token = localStorage.getItem("token");
      if (!token) {
        window.location.href = "/";
      }
    };

    checkToken();
  }, []);

  const updateSummary = (value: boolean) => {
    setSummary(value);
  };

  const CallAPI = async (body: any, token: string) => {
    console.log(body);
      setFilename(body.metadata["filename"]);

    const fetchUrl =
      "https://inteligenius.azurewebsites.net/conversationalQA_UI";
    try {
      const response = await fetch(`${fetchUrl}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      });
      const data = await response?.json();
      console.log(data);
      setQaList([...qaList, { question: body["query"], result: data }]);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error:", error);
    }
  };

  return (
    <div className="app-container">
      {(location.pathname === "/Generate_Summary" ||
        location.pathname === "/Rag_Summary") && <SelectDocument />}

      {location.pathname === "/Home" && (
        <div>
          <SideBar />

          <main className="app-content-wrppr" id="page-content">
            <div className="pg-wrppr pg-generate-contract-doc">
              <form id="textInputPrompt">
                <div id="pgContentWrppr" className="pg-content-wrppr pg-gcd">
                  <ProgressBar
                    visibility={summary ? "block" : "none"}
                    updateSummary={updateSummary}
                  />

                  <ChatBox
                    visibility={summary ? "block" : "none"}
                    qaList={qaList}
                  />

                  {!summary && (
                    <SelectDocument1
                      updateSummary={updateSummary}
                      callAPI={CallAPI}
                      setLoading={setLoading}
                    />
                  )}

                  {loading && (
                    <div
                      className="css-loader"
                      id="loader"
                      style={{ display: loading ? "block" : "none" }}
                    ></div>
                  )}
                </div>

                <PromptBox
                  visibility={summary ? "block" : "none"}
                  callAPI={CallAPI}
                  setLoading={setLoading}
                  filename={filename}
                />
              </form>
              <Footer />
            </div>
          </main>
        </div>
      )}
    </div>
  );
};

export default Home;
