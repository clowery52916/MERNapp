import React, { Component } from "react";
import axios from "axios";
import EditUserForm from "./EditUserForm";

class UserView extends Component {
  state = {
    user: {},
    showEditUser: false
  };

  componentWillMount() {
    if (this.props.match.params) {
      const userId = this.props.match.params.id;
      axios.get(`${userId}`).then(res => {
        const user = {
          name: res.data.name,
          img: res.data.img,
          userSince: res.data.userSince,
          favCon: res.data.favCon,
          about: res.data.about
        };
        console.log({ user });
        this.setState({ user });
      });
    }
  }

  toggleShowEditUser = () => {
    this.setState({ showEditUser: !this.state.showEditUser });
  };

  render() {
    return (
      <div>
        {this.state.showEditUser ? (
          <EditUserForm user={this.state.user} />
        ) : (
          <div>
            <h1>{this.state.user.name}</h1>
            <img src={this.state.user.img} alt={this.state.user.name} />
            <h2>{this.state.user.userSince}</h2>
            <h3>{this.state.user.favCon}</h3>
            <h4>{this.state.user.about}</h4>
          </div>
        )}
        <button onClick={this.toggleShowEditUser}>Edit</button>
        
      </div>
    );
  }
}

export default UserView;
