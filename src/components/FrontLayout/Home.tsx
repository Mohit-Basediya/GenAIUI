import Footer from "./Footer";
import SideBar from "./SideBar";
import SelectDocument from "./SelectDocument";
import ChatBox from "./ChatBox";
import PromptBox from "./PromptBox";
import ProgressBar from "./ProgressBar";
import { useState } from "react";


const Home = () => {

  const [summary, setSummary] = useState(true)

  return (
    <div className="app-container">

      {/*Navbar for different option show here */}
      <SideBar />

      <main className="app-content-wrppr" id="page-content">
        <div className="pg-wrppr pg-generate-contract-doc">
          <form id="textInputPrompt" action="/process_pdff" method="post" encType="multipart/form-data">
            <div id="pgContentWrppr" className="pg-content-wrppr pg-gcd">
             
              {/*PDF file uploading progress and status to show here */}
              <ProgressBar />

              {/*User and Prompt (Bot) response to show here */}
              <ChatBox />

              {/*Welcome text and PDF file uplaod to show here */}
              {!summary && (
                <SelectDocument />
              )}
              {/* <SelectDocument /> */}

              <div className="css-loader" id="loader"></div>
            </div>

            {/*Prompt to insert text to show here */}
            <PromptBox />
          
          </form>
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default Home;
