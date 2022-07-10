import React, { Component } from "react";
import Pokemon from "./Pokemon";
import pokemons from "../data";

class Pokedex extends Component{
    render(){
        return(
            <div className="pokedex">
            { pokemons.map((allPokemons) =>
                 <div><Pokemon pokemon={allPokemons} /></div>)
             }
            </div>
        )
    }
}

export default Pokedex;
