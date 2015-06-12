import React from 'react';
import ItemList from './item-list.jsx';
import ItemForm from './item-form.jsx';

class Player extends React.Component {
  doSubmit(newItem) {
    this.refs.itemList.state.items.push(newItem);
    this.refs.itemList.setState(this.refs.itemList.state);
  }

  render() {
    return (
      <div>
        <h1>Quiz player</h1>
        <ItemList ref="itemList"/>
        <ItemForm doSubmitCallback={this.doSubmit.bind(this)}/>
      </div>
    );
  }
}

export default Player;