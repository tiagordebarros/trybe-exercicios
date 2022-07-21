import { Component } from "react";

class PersonalInfo extends Component{
    render(){
        const { fullname, fullnameValue, age, ageValue, about, aboutValue } = this.props;
        return(
            <fieldset>
                <label htmlFor="fullname">Nome Completo
                    <input
                    name="fullname"
                    id="fullname"
                    type="text"
                    onChange={fullname}
                    value={fullnameValue}
                    />
                    { fullnameValue.length ? '✅' : '❌' }
                </label>

                <label htmlFor="age">Idade
                    <input 
                    id="age"
                    name="age"
                    type="number"
                    onChange={age}
                    value={ageValue}
                    />
                    { ageValue > 0 ? '✅' : '❌' }
                </label>

                <label htmlFor="about">Sobre mim
                    <textarea name="about" id="about" cols="30" rows="10" onChange={about} value={aboutValue} />
                    { aboutValue.length ? '✅' : '❌' }
                </label>
                </fieldset>
        );
    }
}

export default PersonalInfo;
