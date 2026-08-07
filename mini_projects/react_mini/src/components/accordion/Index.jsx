// single selection
// multiple selection

import { useState } from "react";
import data from "./data";
import "./styles.css";

const Index = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(currentId) {
    setSelected(currentId === selected ? null : currentId);
  }

  function handleMultiSelection(currentId) {
    let copyMultiple = [...multiple];
    const findIndexOfCurrentId = copyMultiple.indexOf(currentId);
    console.log(findIndexOfCurrentId);
    if (findIndexOfCurrentId === -1) copyMultiple.push(currentId);
    else copyMultiple.splice(findIndexOfCurrentId, 1);
    setMultiple(copyMultiple);
  }

  return (
    <div className="acc-wrapper">
      <button
        className="btn"
        onClick={() => setEnableMultiSelection(!enableMultiSelection)}
      >
        Enable Multi Selection
      </button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div key={dataItem.id} className="container">
              <div
                className="title"
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {enableMultiSelection
                ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div className="answer">
                      {dataItem.answer}
                    </div>
                  )
                : selected === dataItem.id && (
                    <div className="answer">
                      {dataItem.answer}
                    </div>
                  )}
            </div>
          ))
        ) : (
          <div> No Data Found !!</div>
        )}
      </div>
    </div>
  );
};

export default Index;