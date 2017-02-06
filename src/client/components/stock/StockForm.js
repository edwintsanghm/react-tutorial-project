import React from 'react';

export default class StockForm extends React.Component{
  constructor(props) {
  	super(props);
    if(this.props.editAction)
      this.state = {
        number: this.props.editAction.number, 
        price: this.props.editAction.price, 
        shares: this.props.editAction.shares, 
        editing: true
      };
    else
      this.state = {number: '', price: '', shares: '', editing: false};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNumberChange = this.handleNumberChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleSharesChange = this.handleSharesChange.bind(this);
  }

  handleNumberChange(e) {
    this.setState({number: e.target.value});
  }

  handlePriceChange(e) {
    this.setState({price: e.target.value});
  }

  handleSharesChange(e) {
    this.setState({shares: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    var number = this.state.number;
    var price = this.state.price;
    var shares = this.state.shares;
    if (!shares || !number || !price) {
      alert('please input something');
      return;
    }

    if(this.props.editAction) {
      this.props.editAction.number = number;
      this.props.editAction.price = price;
      this.props.editAction.shares = shares;

      this.props.onActionSubmit(this.props.editAction);
    } else {
      this.props.onActionSubmit({number: number, price: price, shares: shares});
    }
    this.state = {number: '', price: '', shares: '', editing: false};
  }

  render() {
    return (
      <form className="stockForm" onSubmit={this.handleSubmit}>
        <input type="number" placeholder="Stock Number" value={this.state.number} onChange={this.handleNumberChange}/>
        <input type="number" placeholder="Price" value={this.state.price} step="any" onChange={this.handlePriceChange}/>
        <input type="number" placeholder="Shares" value={this.state.shares} onChange={this.handleSharesChange}/>
        <input type="submit" value="Submit" />
      </form>
    );
  }
};