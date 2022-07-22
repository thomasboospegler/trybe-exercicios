import React, { Component } from 'react'

class PersonalField extends Component {
  render() {
    const { name, idade, email, estadoFavorito, handleChange } = this.props;
    return (
      <fieldset>

        <label>
          Idade:
          <input
            type="number"
            name="idade"
            value={ idade }
            onChange={ handleChange }
          />
        </label><br />

        <label>
          Nome:
          <input
            type="text"
            name="name"
            value={ name }
            onChange={ handleChange }
          />
          { !name.length ? ' -nome inválido- ' : ' -ok- '}
        </label><br />

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={ email }
            onChange={ handleChange }
          />
          { !email.match(/^\S+@\S+$/i) ? ' -email inválido- ' : ' -ok- ' }
        </label><br />

        <label>
          Insira uma imagem sua:
          <input type="file" />
        </label><br />

        <label>
          Diga qual o seu Estado favorito! De React ou do Brasil, você decide! =)
          <textarea name="estadoFavorito" value={ estadoFavorito } onChange={ handleChange } />
        </label><br />

      </fieldset>
    )
  }
}

export default PersonalField;
