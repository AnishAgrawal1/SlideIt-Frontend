import React from 'react'
import Sidebar from './Sidebar'
import { useState } from "react";
import "./Dashboard.css";
import FileUpload from './contentupload/fileupload';

const AccountDashboard = () => {

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div>
     <div className='flex min-h-[90vh]'>
      <div className='fixed'>
        <Sidebar/>
      </div>
      <div className='md:ml-[280px] mt-12 mx-3'>
        <div className='flex justify-start items-center'>
          <h1 className='text-3xl my-5 font-bold text-zinc-700'>Dashboard</h1>
        </div>
          <div name="Upload Area" className=''>
            <h2 className='font-bold text-lg mb-3'>Upload</h2>
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
                  Text Upload
                </button>
              </div>

              <div className="content-tabs">
                <div
                  className={toggleState === 1 ? "content  active-content" : "content"}
                >
                  <FileUpload />
                </div>

                <div
                  className={toggleState === 2 ? "content  active-content" : "content"}
                >
                  <p>
                    {/* url Upload area */}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
                    voluptatum qui adipisci.
                  </p>
                </div>

                <div
                  className={toggleState === 3 ? "content  active-content" : "content"}
                >
                  <p>
                    {/* text upload area */}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
                    nostrum rerum laudantium totam unde adipisci incidunt modi alias!
                    Accusamus in quia odit aspernatur provident et ad vel distinctio
                    recusandae totam quidem repudiandae omnis veritatis nostrum
                    laboriosam architecto optio rem, dignissimos voluptatum beatae
                    aperiam voluptatem atque. Beatae rerum dolores sunt.
                  </p>
                </div>
              </div>
            </div>
          </div>
      </div>
     </div>
    </div>
  )
}

export default AccountDashboard