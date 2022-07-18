import { Component } from "react";
import './App.css'

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

class Content extends Component {
  render() {
    return <ul className="content-list">
      { conteudos.map((conteudo) => <li>
        <div className="content-list-item">O conteudo é: { conteudo.conteudo }</div>
        <div className="content-list-item">Status: { conteudo.status }</div>
        <div className="content-list-item">Bloco: { conteudo.bloco }</div>
      </li>) }
    </ul>
  }
}

export default Content
