import React from 'react';

class ItemForm extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
    let newItem = React.findDOMNode(this.refs.newItem);
    let value = newItem.value.trim();

    if (value) {
      this.props.doSubmitCallback(value);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" ref="newItem"/>
        <button>Add item</button>
      </form>
    );
  }
}

export default ItemForm;