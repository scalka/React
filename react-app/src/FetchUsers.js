import React from 'react';

class UserList extends React.Component {
  constructor() {
    super();
    this.state = {
      allUsers: '',
      allUsersData: ''
    };
  }

  componentWillMount() {
    // use this URL 'https://randomuser.me/api/?results=50'
    fetch('https://randomuser.me/api/?results=50')
    .then(response => {
      if(response.ok) return response.json();
      throw new Error('Request failed.');
    })
    .then(data => {
      const all = data.results;
      // could be re-written so that here we store only data in state and we generate html in render
      const allUsers = all.map( (u) => {
        return (
           <li key={u.login.md5}>
              <h2>{u.name.first} {u.name.last}</h2> <h3>{u.email}</h3>
            </li>
              )
      });

      this.setState( {
        allUsers: allUsers,
        allUsersData: all
      });
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {


    return (
      <ul>
        {this.state.allUsers}
      </ul>
    );
  }
}

export default UserList;
