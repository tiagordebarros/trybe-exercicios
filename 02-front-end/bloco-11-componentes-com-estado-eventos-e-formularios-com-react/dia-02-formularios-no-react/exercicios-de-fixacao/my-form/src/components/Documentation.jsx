import { Component } from "react";

class Documentation extends Component{
    render(){
        const { accept, acceptChecked } = this.props;
        return(
            <fieldset>
            <label htmlFor="docs">Anexar documentação
                <input type="file" name="docs" id="docs" />
            </label>

            <label htmlFor="accept">Li e concordo com os termos de uso
                <input type="checkbox" name="accept" id="accept" onChange={accept} checked={acceptChecked}/>
                { acceptChecked === true ? '✅' : '❌' }
            </label>
            </fieldset>
        );
    }
}

export default Documentation;
