import React from 'react';

class ModuleComponent extends React.Component {
  render() {
    return <h1>The name {this.props.name} contains {this.props.name.length} characters </h1>
  }
}

class AppStart extends React.Component {
  // we always overwrite render Rect.Component function
  render() {
    return(
            <div>
      <ModuleComponent name="Sylwia" />
      <ModuleComponent name="Jordan" />
      <ModuleComponent name="Johnnny" />
    </div>
  )
  };
}


export default AppStart;
