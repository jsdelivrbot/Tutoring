
import React from 'react';
import {formatPrice} from '../helpers'
class Fish extends React.Component {

  render() {
        const {details,index} =this.props;
        const isAvail = details.status === 'available';
        const buttontext = isAvail ? 'Add To Order' : 'Sold Out';

    return (<li className="menu-fish">

    <img src={details.image} alt={details.name}/>

        <h3 className="fish-name">
            {details.name}
            <span className="price"> {formatPrice(details.price)}</span>
        </h3>
        <p> {details.desc}</p>
        <button onClick={() => this.props.addtoOrder(index)} disabled={!isAvail}>{buttontext}</button>
        


    </li>)
  }


}
Fish.propTypes = {
    details: React.PropTypes.object.isRequired,
    index: React.PropTypes.string.isRequired,
    addtoOrder: React.PropTypes.func.isRequired
}
export default Fish;