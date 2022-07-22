import { Component } from "react";

class ProfessionalInfo extends Component{
    render(){
        const { curriculumSummary, jobTitle, jobDescription, curriculumSummaryValue, jobTitleValue, jobDescriptionValue, jobTitleMouseEnter } = this.props;
        return(
            <>
            <h2>Informações Profissionais</h2>
            <fieldset>
                <label htmlFor="curriculumSummary">Resumo do currículo
                    <textarea name="curriculumSummary" id="curriculumSummary" cols="30" rows="10" maxLength="1000" value={curriculumSummaryValue} onChange={curriculumSummary} required></textarea>
                </label>

                <label htmlFor="jobTitle">Cargo
                    <input type="text" name="jobTitle" id="jobTitle" maxLength="40" value={jobTitleValue} onChange={jobTitle} onMouseEnter={jobTitleMouseEnter} required />
                </label>

                <label htmlFor="jobDescription">Descrição do cargo
                    <textarea name="jobDescription" id="jobDescription" cols="30" rows="10" maxLength="500" value={jobDescriptionValue} onChange={jobDescription} required></textarea>
                </label>
            </fieldset>
            </>
        );
    }
}

export default ProfessionalInfo;
