import logo from "./logo.svg";
import { Document, Page } from "franco-react-pdf/dist/esm/entry.webpack";
import "./App.css";
import pdf from "./sample.pdf";
import { useState } from "react";

function App() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <div style={{ textAlign: "left", padding: '16px' }}>
        <button
          style={{ marginRight: "16px" }}
          type="button"
          onClick={() =>
            setPageNumber((prev) => (prev === 1 ? prev : prev - 1))
          }
        >
          Previous
        </button>
        <button
          type="button"
          onClick={() =>
            setPageNumber((prev) => (prev === numPages ? prev : prev + 1))
          }
        >
          Next
        </button>
      </div>
      <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
    </div>
  );
}

export default App;
