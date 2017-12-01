import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      balance: '',
      rate: '',
      term: '30',
      payment: '',
    };

    this.handleAppChange = this.handleAppChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleAppChange (event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleButtonClick(event){

    event.preventDefault();

    let payment;
    let balance = this.state.balance;
    let rate = this.state.rate / 100 / 12;
    let term = this.state.term * 12;

    payment = calculateMortgage(balance, rate, term);
      
    function calculateMortgage (balance, rate, term) {
      return balance * rate * (Math.pow(1 + rate, term)) / (Math.pow(1 + rate, term) - 1);
    }

    this.setState ({payment: payment.toFixed(2)});
       
  };
    
  render() {
    return (
      <form className='form-horizontal'>
        <div className="col-1g-12">
          <h3>Mortgage Calculator</h3>
          <hr />
        </div>
        
        <div className="row container">
          <div className="form-group">
            <label className="col-sm-4 control-label">
              <div className="text-left">Loan Balance</div>
              <div className="col-md-12">
                <input
                onChange={this.handleAppChange}
                value={this.state.balance}
                id="balance"
                className="form-control"
                name="balance"
                type="number"
                />
              </div>
            </label>
          </div>
          <div className="clearfix" />
          
          <div className="form-group">
            <label className="col-sm-4 control-label">
              <div className="text-left">Interest Rate (%)</div>
              <div className="col-md-12">
                <input 
                onChange={this.handleAppChange}
                value={this.state.rate}
                id="rate"
                className="form-control"
                name="rate"
                type="number"
                step="0.01"
                />
              </div>
            </label>
          </div>
          <div className="clearfix" />

          <div className="form-group">    
            <label className="col-sm-4 control-label">
              <div className="text-left">Loan Term (in years)</div>
              <div className="col-md-12">
                <select 
                value={this.state.term} 
                onChange={this.handleAppChange}
                className="form-control"
                name='term'>
                  <option value="15">15</option>
                  <option value="30">30</option>
                </select>
              </div>
            </label>
          </div>    
          <div className="clearfix" />

          <div className="form-group">
            <div className="col-sm-10">
            <button 
              className="btn btn-primary btn-default" 
              id="submit" 
              type="submit" 
              onClick={this.handleButtonClick}>Calculate</button>
            </div>
          </div>

          {this.state.payment && (<div className="form-group text-justify" id="output" name='output'>
            <h4>${this.state.payment} is your payment.</h4>
          </div>)}
       </div>   
      </form>
    );
  }
}
