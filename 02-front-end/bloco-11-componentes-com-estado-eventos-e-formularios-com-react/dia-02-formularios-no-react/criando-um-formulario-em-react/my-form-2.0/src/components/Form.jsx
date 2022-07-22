import { Component } from "react";
import PersonalInfo from "./PersonalInfo";
import ProfessionalInfo from "./ProfessionalInfo";

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
        }
    }

    handleChange = ({ target }) => {
      const { type, checked, name  } = target;
      let value = type === 'checkbox' || type === 'radio' ? checked : target.value;
      if (name === 'fullname') value = value.toUpperCase();
      if (name === 'address') value = value.replace(/[^\w\s]/gi, '');
      this.setState({
        [name]: value,
      });
    }

    handleBlur = ({ target }) => {
      const { type, checked, name  } = target;
      let value = type === 'checkbox' || type === 'radio' ? checked : target.value;
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

    render(){
        const { fullname, email, cpf, address, city, state, housingType, curriculumSummary, jobTitle, jobDescription } = this.state;
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
                <button type="submit">Enviar</button>
                </form>
            </>
        );
    }
}

export default Form;
