import React, { useState } from "react";
import OptionList from "./OptionList";
import "./Autocomplete.css";
const Autocomplete = (props) => {
  const [activeOption, setActive] = useState(0);
  const [filteredOptions, setFiltered] = useState([]);
  const [userInput, setInput] = useState("");
  const [showOptions, setShow] = useState(false);

  // On change, set show to true, change user input, and set the filtered options for the OptionList component
  const onChange = (e) => {
    const { options } = props;
    const userInput = e.currentTarget.value;
    const filteredOptions = options.filter(
      (option) =>
        option.name.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );
    setInput(userInput);
    setShow(true);
    setFiltered(filteredOptions);
  };

  // on click, set the filtered option to what the user clicked on,
  // and the input to what the user clicked on
  const onClick = (e) => {
    setFiltered([e.currentTarget.innerText]);
    setActive(0);
    setInput(e.currentTarget.innerText);
    setShow(false);
  };

  const onKeyDown = (e) => {
    const active = activeOption;
    const filtered = filteredOptions;
    // 13 is enter key, 38 is up arrow, 40 is down arrow
    if (e.keyCode === 13) {
      // if enter, select the option and don't show anymore
      setActive(0);
      setInput(filteredOptions[active]);
      setFiltered([filteredOptions[activeOption]]);
      setShow(false);
    } else if (e.keyCode === 38) {
      // if there's no more options up, return
      if (active === 0) return;
      setActive(active - 1);
    } else if (e.keyCode === 40) {
      // don't go down anymore if there's no more options
      if (active - 1 === filtered.length) return;
      setActive(active + 1);
    }
  };
  return (
    <div className="search">
      <input
        type="text"
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={userInput}
        className="search-box"
      ></input>
      <OptionList
        list={filteredOptions}
        onClicked={onClick}
        active={activeOption}
        show={showOptions}
        input={userInput}
      />
    </div>
  );
};
export default Autocomplete;
