import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: [],
      loading: true,
    };
  }

  fetchUsers = () => {
    fetch('https://api.randomuser.me/')
    .then(response => response.json())
    .then(data => {
      console.log(data.results);
      this.setState({
        loading: false,
        users: data.results
      })
    })
  }

  shouldComponentUpdate(_nextProps, nextState) {
    const AGE = 50;
    if (nextState.users[0].dob.age > AGE) {
      console.log('Muito velho!!!');
      this.fetchUsers();
      return false;
    }
    return true;
  }

  componentDidMount() {
    this.fetchUsers();
  }

  render() {
  const { users, loading } = this.state;

    return (
      <div className="App">
        <h1>
          Users
        </h1>
        <div className="body">
        {loading ? <label>Carregando....</label> : (
          users.map(({ name, email, dob, picture }) => {
            return (
              <div key={name.last}>
                <p>{`${name.title}. ${name.first} ${name.last}`}</p>
                <p>{email}</p>
                <p>{dob.age}</p>
                <img src={ picture.medium } alt={ name.last } />
              </div>
            )
          })
        )}
      </div>
      </div>
    )
  }
}

