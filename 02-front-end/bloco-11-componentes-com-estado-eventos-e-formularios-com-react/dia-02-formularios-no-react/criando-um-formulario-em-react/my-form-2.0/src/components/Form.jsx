import { Component } from "react";
import PersonalInfo from "./PersonalInfo";
import ProfessionalInfo from "./ProfessionalInfo";
import CompiledForm from "./CompiledForm";

class Form extends Component{
    constructor(props){
        super(props);
        this.state={
            fullname: '',
            email: '',
            cpf: '',
            address: '',
            city: '',
            state: '',
            housingType: '',
            alertMessage: true,
            curriculumSummary: '',
            jobTitle: '',
            jobDescription: '',
            submitted: false,
        }
    }

    handleChange = ({ target }) => {
      const { type, checked, name, value, id  } = target;
      let stateValue = type === 'checkbox' || type === 'radio' ? checked : value;
      if (name === 'fullname') stateValue = value.toUpperCase();
      if (name === 'address') stateValue = value.replace(/[^\w\s]/gi, '');
      if (name === 'housingType' && id === 'house') {
        stateValue = 'Casa'
      } else if (name === 'housingType' && id === 'apartment') {
        stateValue = 'Apartamento'
      };
      this.setState({
        [name]: stateValue,
      });
    }

    handleBlur = ({ target }) => {
      const { type, checked, name } = target;
      let value = type === 'checkbox' ? checked : target.value;
      if (name === 'city') value = value.match(/^\d/) ? '' : value;
      this.setState({
        [name]: value,
      });   
    }

    onMouseEnter = () => {
        const { alertMessage } = this.state;
        alertMessage && alert('Preencha com cuidado esta informação');
        this.setState({
            alertMessage: false,
        });
    }

    submittedForm = (event) => {
      event.preventDefault();
      this.setState({
        submitted: true,
      });
    }

    resetForm = () => {
      this.setState(
        {
          fullname: '',
          email: '',
          cpf: '',
          address: '',
          city: '',
          state: '',
          housingType: '',
          alertMessage: true,
          curriculumSummary: '',
          jobTitle: '',
          jobDescription: '',
          submitted: false,
        }
      );
    }

    render(){
        const { fullname, email, cpf, address, city, state, housingType, curriculumSummary, jobTitle, jobDescription, submitted } = this.state;
        return(
            <>
                <h1>Curriculum Vitae</h1>
                <form action="" method="get">
                <PersonalInfo
                    fullname={this.handleChange}
                    fullnameValue={fullname}
                    email={this.handleChange}
                    emailValue={email}
                    cpf={this.handleChange}
                    cpfValue={cpf}
                    address={this.handleChange}
                    addressValue={address}
                    city={this.handleChange}
                    cityValue={city}
                    cityBlur={this.handleBlur}
                    state={this.handleChange}
                    stateValue={state}
                    housingType={this.handleChange}
                    housingTypeValue={housingType}
                />
                <ProfessionalInfo
                    curriculumSummary={this.handleChange}
                    curriculumSummaryValue={curriculumSummary}
                    jobTitle={this.handleChange}
                    jobTitleValue={jobTitle}
                    jobTitleMouseEnter={this.onMouseEnter}
                    jobDescription={this.handleChange}
                    jobDescriptionValue={jobDescription}
                />
                <button type="submit" onClick={this.submittedForm}>Enviar</button>
                <button type="reset" onClick={this.resetForm}>Limpar</button>
                </form>
                <div>
                {submitted && <CompiledForm currentState={this.state} />}
                </div>
            </>
        );
    }
}

export default Form;
