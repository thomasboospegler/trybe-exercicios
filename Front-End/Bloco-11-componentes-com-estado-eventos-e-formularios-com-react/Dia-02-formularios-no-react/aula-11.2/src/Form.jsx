import React, { Component } from 'react'
import PersonalField from './PersonalField';
import './Form.css'

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      estadoFavorito: '',
      idade: 0,
      vaiComparecer: false,
      palavraChaveFavorita: '',
      name: '',
      email: '',
      formularioComErros: true,
    };
  }

  handleError() {
    const { name, idade, email,  estadoFavorito, vaiComparecer } = this.state;

    const errorCases = [
      !name.length,
      !email.match(/^\S+@\S+$/i),
      !idade.length,
      !estadoFavorito.length,
      !vaiComparecer,
    ];

    const formularioPreenchido = errorCases.every((error) => error !== true);

    this.setState({
      formularioComErros: !formularioPreenchido,
    });
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, () => { this.handleError() });
  }

  render() {
    const { name, idade, email,  estadoFavorito, formularioComErros } = this.state;
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">

          <fieldset>

            <PersonalField
            name={ name }
            idade={ idade }
            email={ email }
            estadoFavorito={ estadoFavorito }
            handleChange={ this.handleChange }
            />

            <fieldset>
              <label>
                Voce vai comparecer?
                <input
                  type="checkbox"
                  name="vaiComparecer"
                  value={this.state.vaiComparecer}
                  onChange={this.handleChange}
                />
              </label><br />

              <label>
                Escolha sua palavra chave favorita:
                <select name="palavraChaveFavorita" value={this.state.palavraChaveFavorita}>
                  <option value="estado" onChange={this.handleChange}>Estado</option>
                  <option value="evento" onChange={this.handleChange}>Evento</option>
                  <option value="props" onChange={this.handleChange}>Props</option>
                  <option value="hooks" onChange={this.handleChange}>Hooks</option>
                </select>
              </label><br />

            </fieldset>

          </fieldset>
        </form>
        { formularioComErros
            ? <span style={ { color: 'red' } }>Preencha todos os campos</span>
            : <span style={ { color: 'green' } }>Todos campos foram preenchidos</span> }
      </div>
    );
  }
}

export default Form;
