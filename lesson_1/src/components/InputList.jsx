import { useState, useEffect } from "react";

function InputList({ items }) {
  const [listItems, setListItems] = useState([]);

  useEffect(() => {
    setListItems(items);
  }, [items]);

  return (
    <ul>
      {listItems.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default InputList;
