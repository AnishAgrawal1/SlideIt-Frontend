import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './fileupload.css';
import { ImageConfig } from './ImageConfig'; 
import uploadImg from '../../assets/cloud-upload-regular-240.png';
import { Center } from '@chakra-ui/react';

const FileUpload = props => {


    const wrapperRef = useRef(null);

    const [fileList, setFileList] = useState([]);

    const onDragEnter = () => wrapperRef.current.classList.add('dragover');

    const onDragLeave = () => wrapperRef.current.classList.remove('dragover');

    const onDrop = () => wrapperRef.current.classList.remove('dragover');

    const onFileDrop = (e) => {
        const newFile = e.target.files[0];
        if (newFile) {
          const reader = new FileReader();
          reader.onload = (event) => {
            console.log(event.target.result);
          };
          reader.readAsText(newFile);
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
    }

    return (
        <>
            <div
                ref={wrapperRef}
                className="drop-file-input"
                onDragEnter={onDragEnter}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
            >
                <div className="drop-file-input__label">
                    <Center><img src={uploadImg} alt="" /></Center>
                    <p >Click to Upload or Drag & Drop your files here</p>
                </div>
                <input type="file" value="" onChange={onFileDrop}/>
            </div>
            {
                fileList.length > 0 ? (
                    <div className="drop-file-preview">
                        <p className="drop-file-preview__title">
                            Ready to upload
                        </p>
                        {
                            fileList.map((item, index) => (
                                <div key={index} className="drop-file-preview__item flex">
                                    <img src={ImageConfig[item.type.split('/')[1]] || ImageConfig['default']} alt="" />
                                    <div className="drop-file-preview__item__info">
                                        <p>{item.name}</p>
                                    </div>
                                    <span className="drop-file-preview__item__del" onClick={() => fileRemove(item)}>x</span>
                                </div>
                            ))
                        }
                    </div>
                ) : null
            }
        </>
    );
}

FileUpload.propTypes = {
    onFileChange: PropTypes.func
}

export default FileUpload;