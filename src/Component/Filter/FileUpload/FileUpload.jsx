import React, { useState } from "react";

const FileUpload = () => {
  const [files, setFiles] = useState([]);
  const [fileType, setFileType] = useState("");
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const currentFileType = selectedFiles[0].type;
    const isValidSize = selectedFiles.every(
      (file) => file.size <= 2 * 1024 * 1024
    );
    const isValidType = selectedFiles.every(
      (file) => file.type === currentFileType
      );
      console.log(isValidSize);

    // Check if all files are of the same type and either image or pdf
    if (
      !isValidType ||
      !(
        currentFileType.includes("image") ||
        currentFileType === "application/pdf"
      )
    ) {
      setError(
        "All files must be of the same type and either all images or all PDFs."
      );
      setFiles([]);
      return;
    }

    // Check if all files are below 2MB
      if (!isValidSize) {
      console.log("All files must be below 2MB.");
      setError("All files must be below 2MB.");
      setFiles([]);
      return;
    }

    setError("");
    setFileType(currentFileType.includes("image") ? "Image" : "PDF");
    setFiles(selectedFiles);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} multiple />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div>
        <p>Selected File Type: {fileType}</p>
        <ul>
          {files.map((file, index) => (
            <li key={index}>
              {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FileUpload;
