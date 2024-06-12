import { Fragment, useState } from "react";
import "./FormFileInput.css";
import { download, file, trash } from "../../../static/images";
import { Button } from "../Button";

export const FormFileInput = () => {
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const [fileData, setFileData] = useState({
    file_name: "",
    file: null,
  });
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const handleFileDrop = (event) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    if (files.length > 0) {
      setFileData({
        file_name: files[0].name,
        file: files[0],
      });
    }
    setIsDraggingOver(false);
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      startUpload(selectedFile);
    }
  };

  const startUpload = (file) => {
    setFileData({
      file_name: file.name,
      file: file,
    });
    setIsUploading(true);
    setUploadProgress(0);
    simulateUpload(file);
  };

  const simulateUpload = (file) => {
    const totalSize = file.size;
    let uploaded = 0;

    const interval = setInterval(() => {
      if (uploaded < totalSize) {
        uploaded += totalSize * 0.1; // simulate 10% per interval
        setUploadProgress(Math.min((uploaded / totalSize) * 100, 100));
      } else {
        clearInterval(interval);
        setIsUploading(false);
      }
    }, 500); // update every 500ms
  };

  const clearFileInput = (e) => {
    e.preventDefault();
    setFileData({
      file_name: "",
      file: null,
    });
    setUploadProgress(0);
    setIsUploading(false);
  };

  return (
    <Fragment>
      <label
        onDragOver={(e) => {
          e.preventDefault();
          setIsDraggingOver(true);
        }}
        onDragLeave={() => {
          setIsDraggingOver(false);
        }}
        onDrop={handleFileDrop}
        style={{
          borderColor: isDraggingOver ? "#9747FF" : "#F4F4F4",
          borderStyle: "dashed",
        }}
        htmlFor="file-upload"
        className="file-upload-wrapper"
      >
        <div className={`file-upload-inner`}>
          <div className={`file-upload-icon-wrapper`}>
            <img
              src={fileData.file_name || isUploading ? file : download}
              alt={fileData.file_name || isUploading ? "file" : "download"}
            />
          </div>
          <div className={`file-upload-inner-text`}>
            {isUploading && (
              <div className="progress-bar-wrapper">
                <p className={`file-upload-message`}>File uploading</p>
                <div className={`progress-bar`}>
                  <div
                    className="progress"
                    style={{ width: `${uploadProgress}%` }}
                  ></div>
                </div>
                <p className={`file-upload-size`}>
                  Uploading {uploadProgress.toFixed(0)}%
                </p>
              </div>
            )}
            {!isUploading && fileData.file_name ? (
              <Fragment>
                <p className={`file-upload-message`}>
                  File successfully uploaded
                </p>
                <p className={`file-upload-size`}>
                  File size {(fileData.file.size / (1024 * 1024)).toFixed(2)} Mb
                </p>
              </Fragment>
            ) : (
              <p className={`subtitle md`}>
                <span>Choose a file</span>{" "}
                {isDraggingOver ? "drop here" : "or drag it here"}
              </p>
            )}
          </div>
        </div>
        {fileData.file_name && (
          <Button
            onClick={(e) => clearFileInput(e)}
            style={{ borderRadius: "100%" }}
            size={"md"}
            btnStyle={`tertiary`}
            aria-label="Remove file"
          >
            <img src={trash} alt="trash" />
          </Button>
        )}
        <input
          id="file-upload"
          name="file-upload"
          type="file"
          onChange={(event) => handleFileChange(event)}
          className="sr-only"
        />
      </label>
    </Fragment>
  );
};
