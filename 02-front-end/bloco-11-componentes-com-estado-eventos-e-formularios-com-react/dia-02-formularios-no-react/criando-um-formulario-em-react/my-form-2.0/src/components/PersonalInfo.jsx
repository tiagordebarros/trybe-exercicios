import React, { Component } from "react";

class PersonalInfo extends Component{
    render(){
        const brazilianStates = [
            'Acre',
            'Alagoas',
            'Amapá',
            'Amazonas',
            'Bahia',
            'Ceará',
            'Distrito Federal',
            'Espírito Santo',
            'Goiás',
            'Maranhão',
            'Mato Grosso',
            'Mato Grosso do Sul',
            'Minas Gerais',
            'Pará',
            'Paraíba',
            'Paraná',
            'Pernambuco',
            'Piauí',
            'Rio de Janeiro',
            'Rio Grande do Norte',
            'Rio Grande do Sul',
            'Rondônia',
            'Roraima',
            'Santa Catarina',
            'São Paulo',
            'Sergipe',
            'Tocantins'
        ];

        const { fullname, email, cpf, address, city, state, housingType, fullnameValue, emailValue, cpfValue, addressValue, cityValue, stateValue, housingTypeValue, cityBlur  } = this.props;

        return(
            <>
            <h2>Informações Pessoais</h2>
            <fieldset>
                <label htmlFor="fullname">Nome
                    <input type="text" name="fullname" id="fullname" maxLength="40" value={fullnameValue} onChange={fullname} required />
                </label>

                <label htmlFor="email">E-mail
                    <input type="email" name="email" id="email" maxLength="50" value={emailValue} onChange={email} required />
                </label>

                <label htmlFor="cpf">CPF
                    <input type="text" name="cpf" id="cpf" maxLength="11" pattern="[0-9]{11}" value={cpfValue} onChange={cpf} required />
                </label>

                <label htmlFor="address">Endereço
                    <input type="text" name="address" id="address" maxLength="200" value={addressValue} onChange={address} required />
                </label>

                <label htmlFor="city">Cidade
                    <input type="text" name="city" id="city" maxLength="28" value={cityValue} onChange={city} onBlur={cityBlur} required />
                </label>

                <label htmlFor="state">Estado
                    <select name="state" id="state" value={stateValue} onChange={state} required>
                        { brazilianStates.map((state, index) => 
                            <option key={index} value={state}>{state}</option>
                        )}
                    </select>
                </label>

                <p>Tipo de moradia</p>
                <label htmlFor="house">
                    <input type="radio" name="housingType" id="house" value={housingTypeValue} onChange={housingType} required/>Casa
                </label>
                <label htmlFor="apartment">
                    <input type="radio" name="housingType" id="apartment" />Apartamento
                </label>

            </fieldset>
            </>
        );
    }
}

export default PersonalInfo;
