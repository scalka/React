import React from 'react';

class UserList extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        users: [],
        gen: 'all'
      };
      this.handleInputChange = this.handleInputChange.bind(this);
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
        console.log(data.results);
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

    render() {
      const genderSelectd = this.state.gen;

      const list = this.state.users.map( (u, i) => {

/*          if all
            return all
            else if === gen
              check if user's gender matches gender
              else return null*/
            if (genderSelectd === 'all') {
              return <User key={u.login.md5} name={u.name.first} nationality={u.nat} image={u.picture.large}/>;
            }  else if (genderSelectd === u.gender) {
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
