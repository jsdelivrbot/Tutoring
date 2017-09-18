import React , {Component} from 'react';
import {Button} from 'react-bootstrap';
import Gift from './Gift'
import {max_number} from '../helper'
class App extends Component {
  constructor() {
    super();

    this.state = {
        gifts: []
    }

  }
  addGift =() =>{
    const { gifts } = this.state;
    const ids = this.state.gifts.map(gift => gift.id);
    //geting max id and use helper function 
    const max_id = max_number(ids)
    gifts.push({id: max_id+1 })
    this.setState({gifts})
  }
  //Passing this function as props to the Gift
  removeGift = (id) =>{
    const  gifts  = this.state.gifts.filter(gift => gift.id !== id );
    this.setState({gifts})
  }
  render() {
    return (
        <div>
            <h2>Gift Giver</h2>

            <div className="gift-list">
                {this.state.gifts.map(gift =>{
                    return (
                        <Gift key = {gift.id}
                              gift = {gift}
                              removeGift = {this.removeGift}
                        />
                    )
                })}
            </div>
            <Button className="btn-add" onClick={this.addGift}> Add Gift </Button>
        </div>
    )
  }

  componentDidMount() {
   
  }
}

export default App;