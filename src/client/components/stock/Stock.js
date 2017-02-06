import React from 'react';

export default class Stock extends React.Component{
  render() {
    return (
      <div className="stock">
        <h4 className="stockAuthor">
          {this.props.stockItem}
        </h4>
        {this.props.children}
      </div>
    );
  }
}