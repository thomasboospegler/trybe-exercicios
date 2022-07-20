import React from 'react';

class Pokemons extends React.Component {
  render() {

    const { name, type, averageWeight, image } = this.props.pokemon
    
    return (
      <div className='pokemon'>
        <section className='pokemon-info'>
          <p>{ name }</p>
          <p>{ type }</p>
          <p>{ `Average weigth: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
        </section>
        <section className='pokemon-img'>
          <img src={ image } alt={`Foto ${ name }`} />
        </section>
      </div>
    )
  }
}

export default Pokemons;
