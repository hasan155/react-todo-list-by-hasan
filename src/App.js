import React, { Component } from 'react'
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid";

export default class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false
  };
  handleChange = e => {
    this.setState({
      item: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
      const newItem = {
        id: this.state.id,
        title: this.state.item
      }
      const updateItems = [...this.state.items, newItem];
      this.setState({
        items: updateItems,
        item: "",
        id: uuid(),
        editItem: false
      });
  };
  clearList = () => {
    this.setState({
      items: []
    })
  }
  handleDelete = id => {
  const filterDeleteItem = this.state.items.filter(item => item.id !== id);
  this.setState({
    items: filterDeleteItem
  })
  }
  handleEdit = id => {
   const filterDeleteItem = this.state.items.filter(item => item.id !== id);
  const selectItem = this.state.items.find(item => item.id === id);
   this.setState({
     items: filterDeleteItem,
     item: selectItem.title,
     editItem: true,
     id:id
   })
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">todo input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList 
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}
