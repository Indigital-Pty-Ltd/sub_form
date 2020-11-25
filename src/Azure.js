import React from "react";
import azure from './azure.css';
import 'bootstrap/dist/css/bootstrap.css';

  function Azure() {
        
    const { BlobServiceClient } = require("@azure/storage-blob");

    const createContainerButton = document.querySelector("#create-container-button");
    const deleteContainerButton = document.querySelector("#delete-container-button");
    const selectButton = document.querySelector("#select-button");
    const fileInput = document.querySelector("#file-input");
    const listButton = document.querySelector("#list-button");
    const deleteButton = document.querySelector("#delete-button");
    const status = document.querySelector('#status');
    const fileList = document.querySelector("#file-list");

    function reportStatus (message) {
      try {
        status.innerHTML += `${message}<br/>`;
        status.scrollTop = status.scrollHeight;
      } catch(error) {
        console.log(error)        
      }
    }

    // Update <placeholder> with your Blob service SAS URL string
    const blobSasUrl = "http://127.0.0.1:10000/devstoreaccount1/challenge-submissions?sv=2018-03-28&si=challenge-submissions-175F951CE3B&sr=c&sig=vyaEfxX6%2FhStYQBYlKO6u8arczf8%2F5YL5sUW3ovFESo%3D";

    // Create a new BlobServiceClient
    const blobServiceClient = new BlobServiceClient(blobSasUrl);

    // Create a unique name for the container by 
    // appending the current time to the file name
    const containerName = "container" + new Date().getTime();

    // Get a container client from the BlobServiceClient
    const containerClient = blobServiceClient.getContainerClient(containerName);

    const createContainer = async (e) => {
      try {
          reportStatus(`Creating container "${containerName}"...`);
          await containerClient.create();
          reportStatus(`Done.`);
      } catch (error) {
          reportStatus(error.message);
      }
  };
  
    const deleteContainer = async () => {
        try {
            reportStatus(`Deleting container "${containerName}"...`);
            await containerClient.delete();
            reportStatus(`Done.`);
        } catch (error) {
            reportStatus(error.message);
        }
    };

    return (

      <div className = "container">
    
        {/* probably use form input variable to determine this automatically tho  */}
        <button id="create-container-button" className="btn btn-primary" onClick = {createContainer}>Create container</button>

        {/* deleting container will be restricted tho  */}
        <button id="delete-container-button" className="btn btn-primary" onClick = {deleteContainer}>Delete container</button>

        <button type = "button" className="btn btn-primary"   id="select-button">Select and upload files</button>
        <input type="file" id="file-input"  />
        <button type = "button" className="btn btn-primary"  id="list-button">List files</button>
        <button type = "button" className="btn btn-primary" id="delete-button">Delete selected files</button>
        
        <p><b>Status:</b></p>
        <p id='status' value=""></p>
        <p><b>Files:</b></p>
        <select id="file-list"/>
     
      </div>

    )
}

export default Azure;