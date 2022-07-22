import { Component } from "react";

class CompiledForm extends Component{
    render(){
        const { fullname, email, cpf, address, city, state, housingType, curriculumSummary, jobTitle, jobDescription,  } = this.props.currentState;
        return(
        <>
        <h3>Currículo Compilado</h3>
        <h4>Informações Pessoais</h4>
        <p>Nome: {fullname}</p>
        <p>E-mail: {email}</p>
        <p>CPF: {cpf}</p>
        <p>Endereço: {address}</p>
        <p>Cidade: {city}</p>
        <p>Estado: {state}</p>
        <p>Tipo de moradia: {housingType}</p>
        <h4>Informações Profissionais</h4>
        <p>Resumo do currículo: {curriculumSummary}</p>
        <p>Cargo: {jobTitle}</p>
        <p>Descrição do cargo: {jobDescription}</p>
        </>
        );
    }
}

export default CompiledForm;
