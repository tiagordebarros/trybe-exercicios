import { Component } from "react";

class Form extends Component{
    constructor(props){
        super(props);
        this.state={
            nationality: 'Brasileiro',
        }
    }

    handleChange = ({ target }) => {
      const { value } = target;
      this.setState({
        nationality: value,
      });
    }

    render(){
        return(
            <div>
                <h1>Informações Pessoais</h1>
            <form>
                <p>Por favor, compile os dados abaixo:</p>

                <label htmlFor="Nationality">Eu sou
                    <select name="nationality" id="nationality" onChange={this.handleChange}>
                        <option>Brasileiro</option>
                        <option>Estrangeiro</option>
                    </select>
                </label>

                <label htmlFor="fullname">Nome Completo
                    <input
                    name="fullname"
                    id="fullname"
                    type="text"
                    />
                </label>

                <label htmlFor="age">Idade
                    <input 
                    id="age"
                    name="age"
                    type="number"
                    />
                </label>

                <label htmlFor="about">Sobre mim
                    <textarea name="about" id="about" cols="30" rows="10"></textarea>
                </label>

            </form>
            </div>
        );
    }
}

export default Form;
