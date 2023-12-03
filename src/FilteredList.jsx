import React, { Component } from 'react';
import { DropdownButton, Dropdown, MenuItem } from 'react-bootstrap';
import List from './List';
import App from './App';

class FilteredList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search: "",
      type: "all"
    };
  }

  onSearch = (event) => {
    this.setState({ search: event.target.value.trim().toLowerCase() });
  }

  filterItem = (item) => {

    const {search, type} = this.state;
    const isMatchingSearch = item.name.toLowerCase().includes(search);

    if (type === "all") {
      return isMatchingSearch; 
    }
    else if (type === "Fruit") {
      return item.type === "Fruit" && isMatchingSearch;
    }
    else if (type === "Vegetable") {
      return item.type === "Vegetable" && isMatchingSearch;
    }

  }

  handleTypeSelect = (selectedType) => {
    this.setState({
      type: selectedType === "all" ? "all" : selectedType
    });
  }

  render() {
    return (
      <div className="filter-list">
        <h1>Produce Search</h1>

        <DropdownButton
          id="typeDropdown"
          title={"Type"}
          onSelect={this.handleTypeSelect} 
        >
          <Dropdown.Item eventKey="all">All</Dropdown.Item>
          <Dropdown.Item eventKey="Fruit">Fruit</Dropdown.Item>
          <Dropdown.Item eventKey="Vegetable">Vegetable</Dropdown.Item>
        </DropdownButton>

        <input
          type="text"
          placeholder="Search"
          onChange={this.onSearch}  
        />

        <List items={this.props.items.filter(this.filterItem)} />
      </div>
    );
  }

}

export default FilteredList;