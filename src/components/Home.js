import React from "react";
import { withRouter } from 'react-router-dom';
import authentication from "../apis/authentication";
import axios from "axios";
import MainNote from "./MainNote";

import * as routes from '../constants/routes';


class HomePage extends React.Component {
  state = { notebooks: [], numOfNotes: 0 }

  componentDidMount() {
    axios.get("http://localhost:5000/api/example", {}).then(response => {
      console.log(response.data.notebooks);
      console.log(response.data.numOfNotes);
      this.setState({ notebooks: response.data.notebooks, numOfNotes: response.data.numOfNotes });
    }).catch(error => {
      console.log(error);
      if (error.response.status === 401) {
        this.props.history.push(routes.LOGIN);
      }
    })
  }

  render() {
    return (
      <div className="home-page">
        <MainNote notebooks={this.state.notebooks} numOfNotes={this.state.numOfNotes} />
      </div>
    );
  };
};

export default withRouter(HomePage);
