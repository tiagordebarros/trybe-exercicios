import { Component } from "react";
import PersonalInfo from "./PersonalInfo";
import Documentation from "./Documentation";

class Form extends Component{
    constructor(props){
        super(props);
        this.state={
            nationality: 'Brasileiro',
            fullname: '',
            age: 0,
            about: '',
            accept: false,
            formularioComErros: true,
        }
    }

    handleError = () => {
        const {fullname, age, about, accept } = this.state;
        const errorCases = [
            !fullname.length,
            !age > 0,
            !about.length,
            !accept === true,
        ];
        const compiledForm = errorCases.every((errorCase) => errorCase !== true);
        this.setState({
            formularioComErros: !compiledForm,
        });
    }

    handleChange = ({ target }) => {
      const { name, checked, type } = target;
      const value = type === 'checkbox' ? checked : target.value;
      this.setState({
        [name]: value,
      },
      () => this.handleError());
    }

    render(){
        const { fullname, age, about, accept, formularioComErros } = this.state;
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

                <PersonalInfo
                    fullname={this.handleChange}
                    age={this.handleChange}
                    about={this.handleChange}
                    fullnameValue={fullname}
                    ageValue={age}
                    aboutValue={about}
                />

                <Documentation
                    accept={this.handleChange} 
                    acceptChecked={accept}
                />

            </form>

            { formularioComErros
            ? <p style={ { color: 'red' } }>Por favor, preencha todos os campos.</p>
            : <p style={ { color: 'green' } }>Todos campos foram preenchidos.</p> }

            </div>
        );
    }
}

export default Form;
