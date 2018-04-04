import React from 'react';
/*import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';*/
/* Requiere de https://www.npmjs.com/package/jquery
npm instal material-ui */

class SideBar extends React.Component {
  
  /*constructor(props) {
    super(props);
    this.state = {open: false};
  }

  childContextTypes:{
    muiTheme: React.PropTypes.object.isRequired,
  }
  getChildContext() {
    return {muiTheme: getMuiTheme(baseTheme)};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
      <div>
        <Drawer open={this.state.open}>
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }*/
  render(){
    return <div></div>;
  }
}

export default SideBar;

 /* Códidgo basado en http://www.material-ui.com/#/components/drawer */