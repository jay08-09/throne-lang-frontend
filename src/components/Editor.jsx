import React, { useState, useEffect, useRef } from "react";
import MonacoEditor from "react-monaco-editor";
import * as monaco from "monaco-editor";
import "./edit.css";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { PrimaryButton } from "./PrimaryButton/PrimaryButton";

function Editor() {
  const [code, setCode] = useState(""); // State for the code
  const [output, setOutput] = useState(null); // State for dynamic output box
  const editorRef = useRef(null); // Ref for the editor instance
  const STORAGE_KEY = "monacoEditorState";

  const compileToken = {
    decarys: "print",
    attack: "if",
    attack_again: "elif",
    fallback: "else",
    watch: "while",
    march: "for",
    siege: "do",
    declare: "def",
    house: "class",
    summon: "import",
    rightful: "True",
    traitor: "False",
    claim: "",
    send: "return",
  };

  const defineCustomLanguage = () => {
    monaco.languages.register({ id: "customLang" });

    monaco.languages.setMonarchTokensProvider("customLang", {
      tokenizer: {
        root: [
          [
            new RegExp(`\\b(${Object.keys(compileToken).join("|")})\\b`),
            "custom-token",
          ],
        ],
      },
    });

    monaco.editor.defineTheme("customTheme", {
      base: "vs-dark",
      inherit: true,
      rules: [{ token: "custom-token", foreground: "FF0000", fontStyle: "bold" }],
      colors: {},
    });
  };

  const editorDidMount = (editor, monaco) => {
    defineCustomLanguage();
    monaco.editor.setTheme("customTheme");
    editorRef.current = editor;

    // Restore the editor state if available
    const savedState = localStorage.getItem(STORAGE_KEY);
    if (savedState) {
      const { content, viewState } = JSON.parse(savedState);
      editor.setValue(content); // Restore editor content
      if (viewState) {
        editor.restoreViewState(viewState); // Restore view state
      }
      editor.focus(); // Ensure focus is set correctly
    }
  };

  const options = {
    selectOnLineNumbers: false,
    roundedSelection: true,
    readOnly: false,
    cursorStyle: "line",
    automaticLayout: true,
    fontSize: 16,
    fontFamily: "Fira Code, Consolas, Menlo, monospace",
    fontLigatures: true,
    minimap: { enabled: false },
    scrollbar: {
      useShadows: false,
      vertical: "hidden",
      horizontal: "hidden",
    },
  };

  const handleSaveState = () => {
    if (editorRef.current) {
      const viewState = editorRef.current.saveViewState();
      const content = editorRef.current.getValue();
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ content, viewState }));
      // console.log("State Saved:", { content, viewState });
    }
  };

  useEffect(() => {
    // Save the editor state when the component unmounts
    return () => handleSaveState();
  }, []);

  const handleSubmit = async () => {
    console.log("Submitted Code:", code);
    handleSaveState(); // Save state on submit

    try {
      const response = await fetch("http://127.0.0.1:8000/api/receive_code/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Server Response:", data);
        setOutput(data.message || "Code executed successfully!"); // Show output dynamically
      } else {
        console.error("Failed to submit code:", response.status);
        setOutput(`Error: Failed to submit code. Status ${response.status}`);
      }
    } catch (error) {
      console.error("Error submitting code:", error);
      setOutput(`Error: ${error.message}`);
    }
  };

  return (
    <>
      <div className="editor-container" id="editor-id">

        <MonacoEditor
          width="70%"
          height="80%"
          language="customLang"
          theme="customTheme"
          value={code}
          onChange={(newCode) => setCode(newCode)}
          options={options}
          editorDidMount={editorDidMount}
        />

        <PrimaryButton
          className="submit-button"
          color="primary"
          size="large"
          onClick={handleSubmit}
        >
          Submit
        </PrimaryButton>
        {output && (
          <Box
            className="output-container mt-5 w-[70%] p-4 bg-[#1e1e1e] text-[#d4d4d4] rounded-md text-sm shadow-lg max-h-[300px] overflow-auto"
          >
            <strong>Output:</strong>
            <pre >{output}</pre>
          </Box>
        )}
      </div>
    </>

  );
}

export default Editor;
