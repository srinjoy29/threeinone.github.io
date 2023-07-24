import React from "react";
import Header from "./Header.jsx";
// import { Opacity } from "@mui/icons-material";

function UserManual() {
  return (
    <>
    <div>
      <Header />
      <div>
        <h2 style={{ fontSize: "3rem", Opacity:"100%" ,marginLeft:"0rem"}} >User Manual:</h2>
        <ol style={{fontSize: "2.5rem", opacity: "0.5", marginLeft: "3.5rem", fontWeight: "lighter" }}>
          <li>
            <strong>Introduction:</strong>
            <br />
            3-IN-ONE is a versatile web application that offers three essential features in a single platform. It allows 
            users to convert speech to text, execute voice commands, and function as a keeper app to store notes. This user manual 
            provides a comprehensive guide on how to use the various functionalities of the app.
          </li>
          <li>
            <strong>Speech to Text Conversion:</strong>
            <br />
            This enables users to convert their spoken words into text format. To use this feature, follow these steps:
            <ul>
              <li>Click on the "Start Listening" button to enable the speech-to-text feature.</li>
              <li>Begin speaking, and your words will be automatically converted to text in the designated text box.</li>
              <li>Click on the "Stop Listening" button to disable the speech-to-text feature.</li>
            </ul>
          </li>
          <li>
            <strong>Voice Commands:</strong>
            <br />
            The app also supports executing commands through voice input. Here's how you can use voice commands:
            <ul>
              <li>Click on the "Start Listening" button to enable voice commands.</li>
              <li>Give a command such as "Open 'xyz.com'," where 'xyz.com' represents the desired domain with the extension.</li>
              <li>The app will process the command and open the specified website.</li>
              <li>Similarly, you can change the background color by saying "Change Background color to green/blue" or any desired color.</li>
              <li>If user give a command "Clear" , it will automatically clear the screen and do same work of "Cleartext" Button</li>
            </ul>
          </li>
          
          <li>
            <strong>Keeper App Functionality:</strong>
            <br />
            It works as a keeper app to store notes. To use this feature:
            <ul>
              <li>Type or speak the content you want to save in the text box.</li>
              <li>Click on the "Add" button to store the note.</li>
              <li>Your notes will be displayed below the text box, and you can access them anytime.</li>
              
            </ul>
          </li>
          
          <li>
            <strong>Clear Text:</strong>
            <br />
            
            <ul>
              <li>To clear the text from the text box, click on the "Clear Text" button. This action will remove all the content from the text box.</li>
              {/* <li>Click on the "Add" button to store the note.</li>
              <li>Your notes will be displayed below the text box, and you can access them anytime.</li>
               */}
            </ul>
          </li>
          <li>
            <strong>User Interface:</strong>
            <br />
            <ul>
              <li>The app's header contains the logo "3-IN-ONE" and navigation links for Home, User Manual, and Contact Us pages.</li>
              <li>The text box is provided for typing or speaking text.Both can be done simaltaniously - typying + voice or voice + type</li>
              <li>Buttons such as "Start Listening," "Stop Listening," "Add," and "Clear Text" are available for different functionalities.</li>
              <li>Notes stored using the keeper app feature are displayed in a list below the text box.</li>
              
            </ul>
          </li>
          <p>
          Enjoy using the 3-IN-ONE app and make your life easier with its versatile functionalities!
        </p>
         <br />

        </ol>
        
      </div>
    
    </div>
    
    </>
  );
}

export default UserManual;
