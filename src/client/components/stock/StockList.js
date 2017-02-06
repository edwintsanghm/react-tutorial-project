import React from 'react';
import Stock from './Stock';
import StockForm from './StockForm';

export default class StockList extends React.Component{
  constructor(props){
    super(props);

    this.toggleUpdate = this.toggleUpdate.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
 
  toggleUpdate(action){
    this.props.toggleActionUpdate(action);
  }

  handleUpdate(action){
    this.props.onActionUpdate(action);
  }

  handleDelete(action){
    this.props.onActionDelete(action);
  }

  render() {
    var actionNodes = this.props.data.map(function(action) {
      if(action.editing) {
        return (
          <div key={action._id}>
            <StockForm editAction={action} onActionSubmit={this.handleUpdate} />
          </div>
        );
      } else {
        return (
          <div key={action._id}>
            <Stock stockItem={action.number}>
              {action.price}, {action.shares}
              <button type="button" onClick={() => this.toggleUpdate(action)}>Edit</button>
              <button type="button" onClick={() => this.handleDelete(action)}>Delete</button>  
            </Stock>
          </div>
        );
      }
    }, this);

    return (
      <div className="stockList">
        {actionNodes}
      </div>
    );
  }
}
