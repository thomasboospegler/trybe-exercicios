import React, { Component } from 'react'

class Form extends Component {

  state = {
    name: '',
    email: '',
    cpf: '',
    adress: '',
    city: '',
    estado: '',
    house: '',
    curriculum: '',
    cargo: '',
    alert: true,
    description: '',
    submitResult: '',
    display: 'block'
  }

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  verifyCity = ({ target }) => {
    const { name, value } = target;
    
    if (/^\d/.test(value)) {
      this.setState({
        [name]: '',
      })
    }
  }

  workAlert = () => {
    if (this.state.alert) {
      alert('Preencha com cuidado esta informação.');
      this.setState({
        alert: false,
      })
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, cpf, adress, city, estado, house, curriculum, cargo, description}  = this.state;
    const result = <div className='result-content'>
      <p>Nome: {name}</p>
      <p>Email: {email}</p>
      <p>Cpf: {cpf}</p>
      <p>Endereço: {adress}</p>
      <p>Cidade: {city}</p>
      <p>Estado: {estado}</p>
      <p>Residencia: {house}</p>
      <p>Curriculo: {curriculum}</p>
      <p>Cargo: {cargo}</p>
      <p>Descrição cargo: {description}</p>
    </div>
    this.setState({
      submitResult: result,
      display: 'none'
    })
  }

  clearButton = (event) => {
    event.preventDefault();
    this.setState({
      name: '',
      email: '',
      cpf: '',
      adress: '',
      city: '',
      estado: '',
      house: '',
      curriculum: '',
      cargo: '',
      alert: true,
      description: '',
      submitResult: '',
      display: 'block'
    })
  }

  render() {
    return (
      <>
        <div className='result-content'>
          { this.state.submitResult}
        </div>
        <form onSubmit={ this.handleSubmit} style={{display: this.state.display}}>
          <fieldset className="personal-info-container">
            <h3>Informações pessoais</h3>

            {/* Preciso colocar em upperCase */}
            <label>
              Nome:
              <input
              type="text"
              name="name"
              size="40"
              value={ this.state.name.toUpperCase() }
              onChange={ this.handleChange }
              required
              />
            </label>

            <label>
              Email:
              <input
              type="text"
              name="email"
              size="50"
              value={ this.state.email }
              onChange={ this.handleChange }
              required
              />
            </label>

            <label>
              CPF:
              <input
              type="text"
              name="cpf"
              size="11"
              value={ this.state.cpf }
              onChange={ this.handleChange }
              required
              />
            </label>

            {/* Ao remover o foco desse campo (evento onBlur), verificar se o nome da cidade começa com números. Caso comece, limpar o campo. */}
            <label>
              Cidade:
              <input
              type="text"
              name="city"
              size="28"
              value={ this.state.city }
              onChange={ this.handleChange }
              onBlur={ this.verifyCity }
              required
              />
            </label>

            <label>
              Estado:
              <select name="estado">
                <option value="">Selecione</option>
                <option value="AC">AC</option>
                <option value="AL">AL</option>
                <option value="AM">AM</option>
                <option value="AP">AP</option>
                <option value="BA">BA</option>
                <option value="CE">CE</option>
                <option value="DF">DF</option>
                <option value="ES">ES</option>
                <option value="GO">GO</option>
                <option value="MA">MA</option>
                <option value="MG">MG</option>
                <option value="MS">MS</option>
                <option value="MT">MT</option>
                <option value="PA">PA</option>
                <option value="PB">PB</option>
                <option value="PE">PE</option>
                <option value="PI">PI</option>
                <option value="PR">PR</option>
                <option value="RJ">RJ</option>
                <option value="RN">RN</option>
                <option value="RS">RS</option>
                <option value="RO">RO</option>
                <option value="RR">RR</option>
                <option value="SC">SC</option>
                <option value="SE">SE</option>
                <option value="SP">SP</option>
                <option value="TO">TO</option>
              </select>
            </label>

            <label>Residencia:
            <label><input type="radio" name="house" value="casa" />Casa</label>
            <label><input type="radio" name="house" value="apartamento" />Apartamento</label>
            </label>

            {/* Preciso remover caracteres especiais */}
            <label>
              Endereço:
              <input
              type="text"
              name="adress"
              size="200"
              value={ this.state.adress.replace(/[^\w\s]/gi, '') }
              onChange={ this.handleChange }
              required
              />
            </label>

          </fieldset>


          <fieldset className='work-info-container'>
            <h3>Curriculo</h3>

            <label id='cargo-container'>
              <p>Cargo:</p>
              <textarea
              name="cargo"
              value={ this.state.cargo }
              onChange={ this.handleChange }
              onMouseEnter={ this.workAlert }
              size="40"
              required
              >
              </textarea>
            </label>

            <label  className='big'>
              <p>Resumo do curriculo:</p>
              <textarea
              name="curriculum"
              value={ this.state.curriculum }
              onChange={ this.handleChange }
              size="1000"
              required
              >
              </textarea>
            </label>

            <label className='big'>
              <p>Descrição do cargo:</p>
              <textarea
              name="description"
              value={ this.state.description }
              onChange={ this.handleChange }
              size="500"
              required
              >
              </textarea>
            </label>

          </fieldset>

          <div className='buttons'>
            <button className='submit'>Submit</button>
            <button className='clear' onClick={this.clearButton}>Clear</button>
          </div>
        </form>
      </>
    )
  }
}

export default Form;
