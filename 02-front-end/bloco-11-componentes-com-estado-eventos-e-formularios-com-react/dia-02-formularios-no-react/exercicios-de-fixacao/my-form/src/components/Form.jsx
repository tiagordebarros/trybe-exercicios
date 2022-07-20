import { Component } from "react";

class Form extends Component{
    constructor(props){
        super(props);
        this.state={
            nationality: 'Brasileiro',
            fullname: '',
            age: 0,
            about: null,
            accept: false,
        }
    }

    handleChange = ({ target }) => {
      const { name, checked, type } = target;
    //   console.log(checked);
      const value = type === 'checkbox' ? checked : target.value;
      this.setState({
        [name]: value,
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

                <fieldset>
                <label htmlFor="fullname">Nome Completo
                    <input
                    name="fullname"
                    id="fullname"
                    type="text"
                    onChange={this.handleChange}
                    />
                </label>

                <label htmlFor="age">Idade
                    <input 
                    id="age"
                    name="age"
                    type="number"
                    onChange={this.handleChange}
                    />
                </label>

                <label htmlFor="about">Sobre mim
                    <textarea name="about" id="about" cols="30" rows="10" onChange={this.handleChange}></textarea>
                </label>
                </fieldset>

                <label htmlFor="docs">Anexar documentação
                    <input type="file" name="docs" id="docs" />
                </label>

                <label htmlFor="accept">Li e concordo com os termos de uso
                    <input type="checkbox" name="accept" id="accept" onChange={this.handleChange}/>
                </label>

            </form>
            </div>
        );
    }
}

export default Form;
