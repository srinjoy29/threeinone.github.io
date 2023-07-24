

// // export default Containers;
// import React, { useState } from "react";
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
// import AddIcon from '@mui/icons-material/Add';

// function Containers(props) {
//   const [note, setNote] = useState({
//     content: ""
//   });

//   const [isTyping, setIsTyping] = useState(false);

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setNote(previousNote => ({
//       ...previousNote,
//       [name]: value
//     }));
//     setIsTyping(true); // User is typing manually
//   };

//   const submitNote = (event) => {
//     const finalContent = note.content + " " + transcript;
//     props.onAdd({ content: finalContent });
//     setNote({
//       content: ""
//     });
//     resetTranscript();
//     setIsTyping(false); // User submitted the note, so set isTyping to false
//     event.preventDefault();
//   };

//   const commands = [
//     {
//       command: 'open *',
//       callback: (site) => {
//         window.open('http://' + site);
//       }
//     },
//     {
//       command: 'Change Background colour to *',
//       callback: (colour) => {
//         document.body.style.background = colour;
//       }
//     },
//     {
//       command: 'clear',
//       callback: ({ resetTranscript }) => resetTranscript()
//     }
//   ];

//   const { transcript, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition({ commands });

//   if (!browserSupportsSpeechRecognition) {
//     return null;
//   }

//   const startListening = () => {
//     resetTranscript();
//     setIsTyping(false); // User clicked "Start Listening," so enable speech-to-text
//     SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
//   };

//   const stopListening = () => {
//     SpeechRecognition.stopListening();
//   };

//   const clearAllText = () => {
//     resetTranscript();
//     setNote({ content: "" });
//   };

//   return (
//     <>
//       <div className="container">
//         <form className="main-content">
//           <textarea
//             name="content"
//             onChange={handleChange}
//             value={isTyping ? note.content : note.content + " " + transcript} // Combine typed and speech-to-text content
//             placeholder="Read the User-manual and make your day productive with 3-In-One!"
//             rows={8}
//           />
//           <button onClick={submitNote}><AddIcon fontSize="large" /></button>
//         </form>

//         <div className="btn">
//           <button onClick={startListening}>Start Listening</button>
//           <button onClick={stopListening}>Stop Listening</button>
//           <button onClick={clearAllText}>Clear Text</button>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Containers;
import React, { useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import AddIcon from '@mui/icons-material/Add';

function Containers(props) {
  const [note, setNote] = useState({
    content: ""
  });

  const [isTyping, setIsTyping] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNote(previousNote => ({
      ...previousNote,
      [name]: value
    }));
    setIsTyping(true); // User is typing manually
  };

  const submitNote = (event) => {
    const finalContent = note.content + " " + transcript;
    props.onAdd({ content: finalContent });
    setNote({
      content: ""
    });
    resetTranscript();
    setIsTyping(false); // User submitted the note, so set isTyping to false
    event.preventDefault();
  };

  const commands = [
    {
      command: 'open *',
      callback: (site) => {
        window.open('http://' + site);
      }
    },
    {
      command: 'Change Background colour to *',
      callback: (colour) => {
        document.body.style.background = colour;
      }
    },
    {
      command: 'clear',
      callback: () => {
        clearAllNotes();
      }
    }
  ];

  const { transcript, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition({ commands });

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  const startListening = () => {
    resetTranscript();
    setIsTyping(false); // User clicked "Start Listening," so enable speech-to-text
    SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
  };

  const stopListening = () => {
    SpeechRecognition.stopListening();
  };

  const clearAllNotes = () => {
    resetTranscript();
    setNote({ content: "" });
  };

  return (
    <>
      <div className="container">
        <form className="main-content">
          <textarea
            name="content"
            onChange={handleChange}
            value={isTyping ? note.content : note.content + " " + transcript} // Combine typed and speech-to-text content
            placeholder="Read the User-manual and make your day productive with 3-In-One!"
            rows={8}
          />
          <button onClick={submitNote}><AddIcon fontSize="large" /></button>
        </form>

        <div className="btn">
          <button onClick={startListening}>Start Listening</button>
          <button onClick={stopListening}>Stop Listening</button>
          <button onClick={clearAllNotes}>Clear Text</button>
        </div>
      </div>
    </>
  );
}

export default Containers;
