import React from 'react'
import { useState } from 'react';
import data from './data';
import "./styles.css";

const Acc = () => {
  const [selected, setSelected] = useState();
  const[enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getId) {
    setSelected(getId === selected? null: getId);
  }

  function handleMultiSelection(getId) {
    let copyArray = [...multiple];
    let findIndexOfCurrentId = copyArray.indexOf(getId);
    if (findIndexOfCurrentId === -1)
      copyArray.push(getId);
    else 
      copyArray.splice(findIndexOfCurrentId, 1);

    setMultiple(copyArray);
  }

  return (
    <div className="accordion">
      <button className="toggle"
      onClick={()=> setEnableMultiSelection(!enableMultiSelection)}>
        Enable Multi Selection
      </button>
      <div className="acc-wrapper">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div key= {dataItem.id} className="item">
              <div className="title" onClick={enableMultiSelection ? 
              () =>  handleMultiSelection(dataItem.id):
              () => handleSingleSelection(dataItem.id)
              }>
                <h3 className="questions">{dataItem.question}</h3>
                <span>+</span>
              </div>
              {
                enableMultiSelection?
                (multiple.indexOf(dataItem.id) !== -1 && (
                  <div>{dataItem.answer}</div>
                )) :
                selected === dataItem.id && 
                (<div className='answers'>{dataItem.answer}</div>)
              }
            </div>
          ))
        ) : (<div>No Data Found !</div>)}
      </div>
    </div>
  )
}

export default Acc