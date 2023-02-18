import React from "react";
import Sidebar from "./Sidebar";
import { useState } from "react";
import FileUpload from "./contentupload/fileupload";
import { postText, postUrl } from "../api/api";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Flex, Spacer, Input } from '@chakra-ui/react'


const AccountDashboard = () => {
  
  const [fileContent, setFileContent] = useState(null);

  function handleFileChange(content) {
    setFileContent(content);
  }
  
  const [content, setContent] = useState('');
  
  const submitContent = (e) => {
    e.preventDefault();
    console.log(content);
    postUrl(content);
  }

  const [textcontent, settextContent] = useState('');
  
  const submittextContent = (e) => {
    e.preventDefault();
    console.log(textcontent);
    postText(textcontent);
  }


  return (
    <div>
      <div className="flex min-h-[90vh]">
        <div className="fixed">
          <Sidebar />
        </div>
        <div className="md:ml-[280px] mt-12 mx-3">
          <div className="flex justify-start items-center">
            <h1 className="md:text-3xl text-2xl my-5 ml-2 font-bold text-zinc-700">Convert any document to a Slide</h1>
          </div>
          <div name="Upload Area" className="">
            <div className="container" class="lg:w-[1180px] md:w-[620px] w-[460px]">
              <Tabs variant='soft-rounded' colorScheme='green'>
                <TabList className="py-4">
                  <Tab className="mr-8">File Upload</Tab>
                  <Tab className="mr-8">URL</Tab>
                  <Tab>Text</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <div>
                      <FileUpload onFileChange={handleFileChange} />
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div>
                      <p>
                        {/* url Upload area */}
                        <form action="submit">
                          <div className="form-group">
                              <div>
                                <label className="py-2">URL</label>
                                <Flex className="my-5">
                                <Input onChange={(e) => setContent(e.target.value)} className="border mr-3 w-full" size='md' placeholder="Enter URL here" type="text" />
                                <Spacer/>
                                <button onClick={submitContent} className="border rounded px-8 py-2 bg-[#00df9a] hover:bg-[#00df98bc] text-black">
                                  Generate
                                </button>
                                </Flex>
                              </div>
                          </div>
                        </form>
                      </p>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div class="flex justify-start">
                      <div class="mb-3 mx-3 w-[100%]">
                        {/* <label
                          class="form-label py-4 inline-block mb-2 text-gray-700"
                        >
                          Insert your document content 
                        </label> */}
                        <textarea
                          class="
                            form-control
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
                          rows="10"
                          placeholder="Insert your text here"
                          name="content"
                          value={content}
                          onChange={(e) => settextContent(e.target.value)}
                        ></textarea>
                        <button onClick={submittextContent} className="border rounded px-8 my-5 py-2 bg-[#00df9a] hover:bg-[#00df98bc] text-black">
                          Generate
                        </button>
                      </div>
                    </div>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDashboard;
