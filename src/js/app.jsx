import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      balance: '',
      rate: '',
      term: '30',
      payment: ''

    };

    this.handleAppChange = this.handleAppChange.bind(this);
    this.calculateMortgage = this.calculateMortgage.bind(this);

  }

    handleAppChange (event) {
      this.setState({[event.target.name]: event.target.value});
      

    }
    
    calculateMortgage () {

      var balance = this.state.balance;
      var rate = this.state.rate / 100 / 12;
      var term = this.state.term * 12;
        
      balance * rate * (math.pow(1 + rate, term)) 
      / (math.pow(1 + rate, term) - 1);
      
      this.setState (
        payment
      )

      }
    
  render() {
    return (
      <div className='container'>
        <div class="col-1g-12">
          <h3>Mortgage Calculator</h3>
        </div>
        
        <div class="col=lg=12">
          <label>
            Loan Balance
            <input
            onChange={this.handleAppChange}
            value={this.state.balance}
            id="amount-balance"
            name="balance"
            type="number"
            />
          </label>
        </div>
        <div className="clearfix" />
        
        <div class="col-lg-12">
          <label>
            Interest Rate (%)
            <input 
            onChange={this.handleAppChange}
            value={this.state.rate}
            id="amount-rate"
            name="rate"
            type="number"
            step="0.01"
            />
          </label>
        </div>
        <div className="clearfix" />

        <div class="col-lg-12">    
          <label>
            Loan Term (in years)
            <select name='term'>
              <option value="15">15</option>
              <option value="30">30</option>
            </select>
          </label>
        </div>    
        <div className="clearfix" />

        <button 
        className="btn btn-primary btn-lg" 
        name="submit" 
        id="submit" 
        type="submit" 
        onClick={this.calculateMortgage}>
        Calculate
        </button>

        <div name='output'>
          <h4>{this.state.payment} is your payment.</h4>
        </div>
        
      </div>
    );
  }
}
