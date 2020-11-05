import React, { Component } from 'react';
import './buttonsPanel.css';

class ButtonsPanel extends Component {

  handleChange = (e) => {
    let value = e.target.value;
    this.props.onClick(value);
  }

  clearChange = () => {
    this.props.clearChange()
  }

  render() {
    return (
      <div>

        <button value={1} className='btn-num' onClick={this.handleChange}>1</button>
        <button value={2} className='btn-num' onClick={this.handleChange}>2</button>
        <button value={3} className='btn-num' onClick={this.handleChange}>3</button>
        <button value= '+' className='btn-op' onClick={this.handleChange}>+</button>
        <br />
        <button value={4} className='btn-num' onClick={this.handleChange}>4</button>
        <button value={5} className='btn-num' onClick={this.handleChange}>5</button>
        <button value={6} className='btn-num' onClick={this.handleChange}>6</button>
        <button value= '-' className='btn-op' onClick={this.handleChange}>-</button>
        <br />
        <button value={7} className='btn-num' onClick={this.handleChange}>7</button>
        <button value={8} className='btn-num' onClick={this.handleChange}>8</button>
        <button value={9} className='btn-num' onClick={this.handleChange}>9</button>
        <button value= 'x' className='btn-op' onClick={this.handleChange}>x</button>
        <br />
        <button className='btn' onClick={this.clearChange}>C</button>
        <button value={0} className='btn-num' onClick={this.handleChange}>0</button>
        <button value='.' className='btn-num' onClick={this.handleChange}>.</button>
        <button value= '/' className='btn-op' onClick={this.handleChange}>/</button>
        <br />
        <button value='=' className='btn-op' id='equal' onClick={this.handleChange}>=</button>
      </div>
    );
  }
}

export default ButtonsPanel;