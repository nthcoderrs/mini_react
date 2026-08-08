import React from "react";
import { useState } from "react";
import QrCodeGenerator from "react-qr-code";

const QrCode = () => {
  const [input, setInput] = useState("");
  const [qr, setQr] = useState("");

  function handleGenerateQr() {
    setQr(input);
    setInput("");
  }
  return (
    <div>
      <h1 className="heading">Qr Code Generator</h1>
      <div className="input-container">
        <input
          type="text"
          name="input"
          placeholder="Enter the Input here ..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleGenerateQr}
        >
          Generate
        </button>
      </div>
      <div className="qr-code">
        {qr && (
          <QrCodeGenerator
            id="qr-code-value"
            value={qr}
            size={400}
            bgColor="#fff"
          />
        )}
      </div>
    </div>
  );
};

export default QrCode;
