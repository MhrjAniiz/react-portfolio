import Background from "../components/Background";
import Text from "../components/Text";
import Client from "../Contentful";
import React, { Component } from "react";
import Project from "../components/Project";

export default class home extends Component {
  constructor() {
    super();
    this.state = {
      info: [],
    };
  }
  componentDidMount() {
    this.getData();
  }

  getData =async() => {
    try {
      let response = await Client.getEntries({
        content_type: "portfolio",
        order: "sys.createdAt",
      });
      this.setState({
        info: response.items
      });
    //   console.log(response.items);
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <div>
        <Background>
          <Text
            name="anish maharjan"
            description="I am a student focused to become a web developer"
          />
        </Background>
        <Project data={this.state.info} />
      </div>
    );
  }
}
