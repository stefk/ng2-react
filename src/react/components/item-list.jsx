import React from 'react';

class ItemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  render() {
    let list;

    if (this.state.items.length == 0) {
      list = <p>No items</p>;
    } else {
      list =
        <ul>
          {
            this.state.items.map((item, index) => {
              return <li key={index}>{item}</li>;
            })
          }
        </ul>;
    }

    return (
      <div>
        <h2>Items:</h2>
        {list}
      </div>
    );
  }
}

export default ItemList;