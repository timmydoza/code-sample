import React, { Component } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';

class SearchField extends Component {
  state = {
    value: ''
  }

  onChange = e => {
    const value = e.target.value;
    this.setState({value}, this.update);
  }

  update = debounce(() => this.props.setSearch(this.state.value), 50)

  render() {
    return   (
      <div>
        <span>Search: </span>
        <input type="text" value={this.state.value} onChange={this.onChange} />
      </div>
    );
  }
}

SearchField.propTypes = {
  setSearch: PropTypes.func.isRequired,
};

export default SearchField;
