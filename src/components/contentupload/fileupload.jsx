import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import "./fileupload.css";
import { ImageConfig } from "./ImageConfig";
import uploadImg from "../../assets/cloud-upload-regular-240.png";
import { Box, Center } from "@chakra-ui/react";
// import {PDFWorker, getDocument, GlobalWorkerOptions} from "pdfjs-dist";

// import pdfjsLib from "pdfjs-dist";

const pdfjsLib = window["pdfjs-dist/build/pdf"];
// GlobalWorkerOptions.workerSrc = "/pdf.worker.js";

const FileUpload = (props) => {
  const wrapperRef = useRef(null);

  const [fileList, setFileList] = useState([]);
  
  const onDragEnter = () => wrapperRef.current.classList.add("dragover");

  const onDragLeave = () => wrapperRef.current.classList.remove("dragover");
  
  const onDrop = () => wrapperRef.current.classList.remove("dragover");
  
  const onFileDrop = (e) => {
    const newFile = e.target.files[0];
    const reader = new FileReader();
    reader.readAsArrayBuffer(newFile);
    var fileContent = {};

    if (newFile) {
      reader.onload = (event) => {
        console.log("file uploaded");
        // console.log(event.target.result);
        const pdfData = new Uint8Array(reader.result);
        console.log(pdfData);
        // // convert the array buffer to a string
        // const data = new TextDecoder("utf-8").decode(buffer);

        // // log the string to the console
        // console.log(data);

        // const worker = new PDFWorker();

        const loadingTask = pdfjsLib.getDocument({ data: pdfData });

        // loadingTask.promise.then((pdf) => {
        //   const numPages = pdf.numPages;
        //   console.log(numPages);
        //   for (let i = 1; i <= numPages; i++) {
        //     pdf.getPage(i).then((page) => {
        //       pdf.getTextContent().then((textContent) => {
        //         const text = textContent.items.map((s) => s.str).join(" ");
        //         console.log(text);
        //       });
        //     });
        //   }
        // });

        loadingTask.promise
          .then(function (doc) {
            const numPages = doc.numPages;
            console.log("# Document Loaded");
            console.log("Number of Pages: " + numPages);
            console.log();

            let lastPromise; // will be used to chain promises
            lastPromise = doc.getMetadata().then(function (data) {
              console.log("# Metadata Is Loaded");
              console.log("## Info");
              console.log(JSON.stringify(data.info, null, 2));
              console.log();
              if (data.metadata) {
                console.log("## Metadata");
                console.log(JSON.stringify(data.metadata.getAll(), null, 2));
                console.log();
              }
            });

            const loadPage = function (pageNum) {
              return doc.getPage(pageNum).then(function (page) {
                console.log("# Page " + pageNum);
                const viewport = page.getViewport({ scale: 1.0 });
                console.log("Size: " + viewport.width + "x" + viewport.height);
                console.log();
                return page
                  .getTextContent()
                  .then(function (content) {
                    // Content contains lots of information about the text layout and
                    // styles, but we need only strings at the moment
                    const strings = content.items.map(function (item) {
                      return item.str;
                    });
                    console.log("## Text Content");
                    // console.log(strings.join(" "));
                    fileContent[pageNum] = strings.join(" ");
                    // Release page resources.
                    page.cleanup();
                  })
                  .then(function () {
                    console.log();
                  });
              });
            };
            // Loading of the first page will wait on metadata and subsequent loadings
            // will wait on the previous pages.
            for (let i = 1; i <= numPages; i++) {
              lastPromise = lastPromise.then(loadPage.bind(null, i));
            }
            return lastPromise;
          })
          .then(
            function () {
              console.log("# End of Document");
              // console.log(fileContent);

              // send the page content to the backend
              props.onFileChange(fileContent);
            },
            function (err) {
              console.error("Error: " + err);
            }
          );
      };

      //   reader.readAsText(newFile);
      const updatedList = [...fileList, newFile];
      setFileList(updatedList);
      props.onFileChange(updatedList);
    }
  };

  // const onFileDrop = async (e) => {
  //     const newFile = e.target.files[0];
  //     if (newFile) {
  //         const formData = new FormData();
  //         formData.append('file', newFile);

  //         try {
  //             const response = await fetch('/predict_upload', {
  //                 method: 'POST',
  //                 body: formData
  //             });
  //             if (response.ok) {
  //                 const data = await response.json();
  //                 const updatedList = [...fileList, data.fileUrl];
  //                 setFileList(updatedList);
  //                 props.onFileChange(updatedList);
  //             } else {
  //                 console.error('Failed to upload file');
  //             }
  //         } catch (error) {
  //             console.error('Failed to upload file', error);
  //         }
  //     }
  // }

  const fileRemove = (file) => {
    const updatedList = [...fileList];
    updatedList.splice(fileList.indexOf(file), 1);
    setFileList(updatedList);
    props.onFileChange(updatedList);
  };

  return (
    <>
      <Box
        ref={wrapperRef}
        className="drop-file-input"
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        <Box className="drop-file-input__label">
          <Center>
            <img src={uploadImg} alt="" />
          </Center>
          <p>Click to Upload or Drag & Drop your files here</p>
        </Box>
        <input type="file" value="" onChange={onFileDrop} />
      </Box>
      {fileList.length > 0 ? (
        <div className="drop-file-preview">
          <p className="drop-file-preview__title">Uploaded</p>
          {fileList.map((item, index) => (
            <div key={index} className="drop-file-preview__item flex">
              <img
                src={
                  ImageConfig[item.type.split("/")[1]] || ImageConfig["default"]
                }
                alt=""
              />
              <div className="drop-file-preview__item__info">
                <p>{item.name}</p>
              </div>
              <span
                className="drop-file-preview__item__del"
                onClick={() => fileRemove(item)}
              >
                x
              </span>
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
};

FileUpload.propTypes = {
  onFileChange: PropTypes.func,
};

export default FileUpload;
