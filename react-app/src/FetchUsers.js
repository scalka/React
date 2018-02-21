import React from 'react';

class UserList extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        users: [],
        gen: 'all',
        nat: 'all',
        nationalities: []
      };
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleNationalities = this.handleNationalities.bind(this);


    }

    componentWillMount() {
      fetch('https://randomuser.me/api/?results=50')
      .then(response => {
        if(response.ok) return response.json();
        throw new Error('Request failed.');
      })
      .then(data => {
        this.setState({
          users: data.results,
          gen: 'all'
        });

      })
      .then( () => {
        const nat = [... new Set(this.state.users.map(u => u.nat))]
        this.setState({
          nationalities: nat
        });
      })
      .catch(error => {
        console.log(error);
      });
    }

    handleInputChange(event) {
      this.setState({
        gen: event.target.value
      });
      console.log(event.target.value);
      console.log(this.state.gen);
    }

    handleNationalities(event) {
      this.setState({
        nat: event.target.value
      });
      console.log(event.target.value);
    }

    render() {
      const genderSelectd = this.state.gen;
      const nationalitySelectd = this.state.nat;
      const natDropdown = this.state.nationalities.map((n, i) => {
        return <option key={n} value={n}>{n}</option>
      });
      const list = this.state.users.map( (u, i) => {
            if (genderSelectd === 'all') {
              return <User key={u.login.md5} name={u.name.first} nationality={u.nat} image={u.picture.large}/>;
            }  else if (genderSelectd === u.gender) {
                return <User key={u.login.md5} name={u.name.first} nationality={u.nat} image={u.picture.large}/>;
            }
// TODO: get both working at the same time
            if (nationalitySelectd === 'all') {
                return <User key={u.login.md5} name={u.name.first} nationality={u.nat} image={u.picture.large}/>;
            } else if (nationalitySelectd === u.nat) {
                return <User key={u.login.md5} name={u.name.first} nationality={u.nat} image={u.picture.large}/>;
            }
      });

      return (
        <div>
          <form>
            <label>Gender: </label>
            <select onChange={this.handleInputChange} >
              <option value="all">all</option>
              <option value="male">male</option>
              <option value="female">female</option>
            </select>
            <label>nationality: </label>
            <select onChange={this.handleNationalities} >
              <option value="all">all</option>
              {natDropdown}
            </select>
          </form>
          <h1>My users are:</h1>
          {list}
        </div>
      );
    }
  }

  class User extends React.Component {
    render() {
      return (
        <div style={{'borderStyle': 'dotted'}}>
          <img alt='profile' src={this.props.image} />
          <h3>{this.props.name}</h3>
          <h4>{this.props.nationality}</h4>
        </div>
      );
    }
}

export default UserList;
