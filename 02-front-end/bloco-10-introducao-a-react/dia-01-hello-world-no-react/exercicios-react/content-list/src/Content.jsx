import React, { Component } from "react";

const conteudos = [
    {
      conteudo: 'High Order Functions',
      bloco: 8,
      status: 'Aprendido'
    },
    {
      conteudo: 'Composicao de Componentes',
      bloco: 11,
      status: 'Aprendendo',
    },
    {
      conteudo: 'Composicao de Estados',
      bloco: 12,
      status: 'Aprenderei'
    },
    {
      conteudo: 'Redux',
      bloco: 16,
      status: 'Aprenderei'
    },
  ];
class Content extends Component{
    render(){
        return(
            <>
            { conteudos.map(({ conteudo, bloco, status }) => 
                <div key={conteudo}>
                <p>O conteúdo é: {conteudo}</p>
                <p>Status: {status}</p>
                <p>Bloco: {bloco}</p>
                </div>
            ) }
            </>
        )
    }
}

export default Content;
