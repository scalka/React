import React from 'react';
import ReactDOM from 'react-dom';




class Listy extends React.Component {
  render() {
    const users = ['John','Jill','Joan','Jenny'];
    let listlong = require('./list.json');

    // // the map iterator below is identical to this for loop
    // const list = [];
    // for(let i = 0; i < users.length; i++) {
    //   list.push(<li key={i}>{users[i]}</li>);
    // }

    const list = listlong.map( (u,i) => {
      return <li key={i}>
              {u.first_name} {u.last_name} <br /> {u.email}
            </li>;
    });

    return (
      <ul>
        {list}
      </ul>
    );
  }
}


export default Listy;
