import React, { Component } from "react";

class About extends Component{
    render(){
        const skills = ["HTML", "CSS", "JavaScript", "Jest", "React", "RTL"]
        const jsxSkills = skills.map((skill) => <li>{skill}</li>)
        return(
            <div>
                <h1>Tiago Ribeiro de Barros</h1>
                <p>ð¨ð»âð» Estudante de desenvolvimento web na Trybe e ð§ð»âð¼ fundador da Parceiros de NegÃ³cio.</p>
                <h2>Minhas Habilidades</h2>
                <ul>
                    { jsxSkills }
                </ul>
            </div>
        )
    }
}

export default About;
