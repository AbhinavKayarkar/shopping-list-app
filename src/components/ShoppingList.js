import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function ShoppingList() {
  const [list, setList] = useState({ item: "", quantity: "" });
  const [items, setItems] = useState([]);

  // function for capturing the value
  const handleChange = (e) => {
    let lst = { ...list };
    lst[e.target.name] = e.target.value;
    setList(lst);
  };

  // function for handling form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setItems([...items, list]);
    setList({ item: "", quantity: "" });
    console.log(items);
  };

  // Edit function 
  const handleEdit = (e) => {
    let row = e.target.parentNode.parentNode.parentNode;
    // console.log(row);

    // get value
    let itemCell = row.cells[1];
    let quantityCell = row.cells[2];

    const newItemCell = prompt("Enter Item name", itemCell.innerHTML)
    const newQuantityCell = prompt("Enter Quantity name", quantityCell.innerHTML)

    itemCell.innerHTML = newItemCell;
    quantityCell.innerHTML = newQuantityCell
  }

  // Delete Function
  function handleDelete(event) {
    var td = event.target.parentNode;
    var tr = td.parentNode;
    tr.parentNode.remove(tr);
  }

  return (
    // React Fragment
    <div className="m-3 border border-black">
      {/* Helmet gives title to current Page */}
      <Helmet>
        <title>Shopping List</title>
      </Helmet>

      <h2 className="text-center text-success-emphasis mt-5">Shopping List</h2>

      {/* Form  */}
      <form onSubmit={handleSubmit} className="text-center mt-5 ">
        {/* Item */}
        <div>
          <label htmlFor="item">Item :</label>
          <input
            id="item"
            className="m-2 p-1 border border-primary-subtle w-10"
            type="text"
            name="item"
            placeholder="Please enter the item name"
            value={list.item}
            onChange={handleChange}
            required
          ></input>
        </div>

        {/* Quantity */}
        <div className="me-4">
          <label htmlFor="quantity">Quantity :</label>
          <input
            id="quantity"
            className="m-2 p-1 border border-primary-subtle"
            type="number"
            name="quantity"
            placeholder="Please enter the quantity"
            value={list.quantity}
            onChange={handleChange}
            required
          ></input>
        </div>

        {/* Submit Button */}
        <button type="submit" className="m-2 btn btn-success">
          Add
        </button>
      </form>

      <br />
      <div className="m-2 p-5">
        <table className="table table-secondary">
          <thead>
            <tr className="text-center">
              <th scope="col" className="m-4 p-2">
                Sr no.
              </th>
              <th scope="col" className="m-4 p-2">
                Items
              </th>
              <th scope="col" className="m-4 p-2">
                Quantity
              </th>
              <th scope="col" className="m-2 p-1">
                Actions
              </th>
            </tr>
          </thead>

          {/* body of table */}
          <tbody>
            {items.map((item, index) => {
              return (
                <tr key={index} className="text-center">
                  <td>{index + 1}</td>
                  <td>{item.item}</td>
                  <td>{item.quantity}</td>
                  <td>
                    <span><button className="m-2 btn btn-primary" onClick={handleEdit}>
                      Edit
                    </button></span>
                    <span><button className="m-2 btn btn-danger" onClick={handleDelete}>
                      Delete
                    </button></span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ShoppingList;
