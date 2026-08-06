// single selection 
// multiple selection

import {useState} from 'react';
import data from './data';
import './styles.css';

const Accordion = () => {

  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);


  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }
  
  function handleMultiSelection(getCurrentId) {
    let cpyMutiple = [...multiple];
    const findIndexOfCurrentId = cpyMutiple.indexOf(getCurrentId);

    console.log(findIndexOfCurrentId);
    if (findIndexOfCurrentId === -1) cpyMutiple.push(getCurrentId);
    else cpyMutiple.splice(findIndexOfCurrentId, 1);

    setMultiple(cpyMutiple);
  }

  return (
    <div className = "acc-wrapper">
      <button>
        Enable Multi Selection 
      </button>
      <div className ="accordion">{/*{ data? : data.map() : (no data)}*/}
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className = "container">
              <div className = "title"
              OnClick = {
                enableMultiSelection
                ? () => handleMultiSelection(dataItem.id)
                : () => handleSingleSelection(dataItem.id)
              }>
                <h3>{}</h3>
                <span>+</span>
              </div>
              {

              }
            </div>
          ))
        ): (<div>No Data Found !</div>)}
      </div>
    </div>
  );
}

export default Accordion;