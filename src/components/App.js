import React, { Component } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

class App extends Component {
  state = {
    items: itemData,
    isDarkMode: false,
  };

  handleDarkModeClick = () => {
    this.setState((prevState) => {
      return { isDarkMode: !prevState.isDarkMode };
    });
  };

  render() {
    const { items, isDarkMode } = this.state;

    return (
      <div className={"App " + (isDarkMode ? "dark" : "light")}>
        <header>
          <h2>Shopster</h2>
          <button onClick={this.handleDarkModeClick}>
            {isDarkMode ? "Dark" : "Light"} Mode
          </button>
        </header>
        <ShoppingList items={items} />
      </div>
    );
  }
}

export default App;
