import React, { Component } from "react";
import PropTypes from 'prop-types';

class Pokemon extends Component{
    render(){
        const {id, name, type, averageWeight: {value, measurementUnit}, image} = this.props.pokemon;
        return(
        <div className="pokemon" key={id}>
            <p>{name}</p>
            <p>{type}</p>
            <p>{value}{measurementUnit}</p>
            <img src={image} alt={name}/>
        </div>
        )
    }
}

Pokemon.propTypes = {
    pokemon: PropTypes.shape({
      name: PropTypes.string,
      type: PropTypes.string,
      averageWeight: PropTypes.shape({
        measurementUnit: PropTypes.string,
        value: PropTypes.number,
      }),
      image: PropTypes.string,
    }).isRequired,
  };

export default Pokemon;
