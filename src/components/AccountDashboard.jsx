import React from "react";
import Sidebar from "./Sidebar";
import { useState } from "react";
import "./Dashboard.css";
import FileUpload from "./contentupload/fileupload";
import postContent from "../api/api";


const AccountDashboard = () => {
  const [content, setContent] = useState('');
  const [toggleState, setToggleState] = useState(1);
  
  const toggleTab = (index) => {
    setToggleState(index);
  };
  
  const submitContent = (e) => {
    e.preventDefault();
    console.log(content);
    postContent(content);
  }

  return (
    <div>
      <div className="flex min-h-[90vh]">
        <div className="fixed">
          <Sidebar />
        </div>
        <div className="md:ml-[280px] mt-12 mx-3">
          <div className="flex justify-start items-center">
            <h1 className="text-3xl my-5 font-bold text-zinc-700">Dashboard</h1>
          </div>
          <div name="Upload Area" className="">
            <h2 className="font-bold text-lg mb-3">Upload</h2>
            <div className="container">
              <div className="bloc-tabs">
                <button
                  className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                  onClick={() => toggleTab(1)}
                >
                  File Upload
                </button>
                <button
                  className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                  onClick={() => toggleTab(2)}
                >
                  URL
                </button>
                <button
                  className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                  onClick={() => toggleTab(3)}
                >
                  Text
                </button>
              </div>

              <div className="content-tabs">
                <div
                  className={
                    toggleState === 1 ? "content  active-content" : "content"
                  }
                >
                  <FileUpload />
                </div>

                <div
                  className={
                    toggleState === 2 ? "content  active-content" : "content"
                  }
                >
                  <p>
                    {/* url Upload area */}
                    <form action="submit">
                      <div className="form-group">
                        <div className="flex flex-col py-2">
                          <label>URL</label>
                          <input className="border p-2" type="text" />
                        </div>
                      </div>
                      <button className="border rounded w-full my-5 py-2 bg-[#00df9a] hover:bg-[#21ac80] text-black">
                        Generate
                      </button>
                    </form>
                  </p>
                </div>

                <div
                  className={
                    toggleState === 3 ? "content  active-content" : "content"
                  }
                >
                  {/* text upload area */}
                  <div class="flex justify-center">
                    <div class="mb-3 xl:w-96">
                      <label
                        class="form-label inline-block mb-2 text-gray-700"
                      >
                        Insert your document content 
                      </label>
                      <textarea
                        class="
                          form-control
                          resize
                          block
                          w-full
                          px-3
                          py-1.5
                          text-base
                          font-normal
                          text-gray-700
                          bg-white bg-clip-padding
                          border border-solid border-gray-300
                          rounded
                          transition
                          ease-in-out
                          m-0
                          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                        "
                        id="content"
                        rows="15"
                        placeholder="Your document"
                        name="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                      ></textarea>
                      <button onClick={submitContent} className="border rounded w-full my-5 py-2 bg-[#00df9a] hover:bg-[#21ac80] text-black">
                        Generate
                      </button>
                      <a href="https://localhost:5000/presentation_pdfs/slides.pdf" download>
                         <button className="border rounded w-full my-5 py-2 bg-[#00df9a] hover:bg-[#21ac80] text-black">
                        Download
                      </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDashboard;
