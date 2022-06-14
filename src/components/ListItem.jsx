/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import Items from './Items';

function ListItems({
  label, options, setFunction, selectedValue,
}) {
  // console.log("from list item" ,label, options)

  function handleChange(event) {
    setFunction(event.target.value);
  }

  const items = options;
  console.log(items, 'from list items');

  return (
    <div>
      <div className="textToSynth">
        <form>
          <label>

            {label}
            <br />
          </label>
          <select value={selectedValue} onChange={(e) => { handleChange(e); }}>
            {items.map((item, index) => (
              item.length > 0
                ? (<Items key={item + index + 20} item={item} setFunction={setFunction} />)
                : null
            ))}
          </select>
          <br />
        </form>
      </div>
    </div>
  );
}

export default ListItems;
