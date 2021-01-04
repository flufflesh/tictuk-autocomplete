import React from "react";
import "./OptionList.css";
const OptionList = (props) => {
  if (props.show && props.input) {
    //If the list of filtered items exists...
    if (props.list.length) {
      return (
        // Here I load all the items that are filtered
        <ul>
          {props.list.map((optionName, index) => {
            let className;
            if (index === props.active) {
              className = "active";
            }
            return (
              <li
                className={className}
                key={optionName.name}
                onClick={props.onClicked}
              >
                {optionName.name}
              </li>
            );
          })}
        </ul>
      );
    }
  }
  // If it doesn't exist / show is off - show that there's "No option!"
  return (
    <div>
      <p>No option!</p>
    </div>
  );
};
export default OptionList;
