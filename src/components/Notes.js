import React from "react";
import {
  Header,
  List
} from "semantic-ui-react";

const Notes = ({ selectedNotebook }) => {
  return (
    <div>
      <Header
        as="h2"
        id="note-logo"
        color="blue"
        textAlign="left"
        style={{ padding: "0.7em" }}
      >
        <Header.Content>CS3230</Header.Content>
      </Header>
      <List size="large" inverted style={{ padding: "0.7em"}}>
        <List.Item as="a" className="note-item" color="grey">
          <List.Content>
            <List.Header>Welcome to CS3230</List.Header>
          </List.Content>
        </List.Item>
        <List.Item as="a" className="note-item" color="grey">
          <List.Content>
            <List.Header>01 - Design and Analysis of Algorithms</List.Header>
          </List.Content>
        </List.Item>
        <List.Item as="a" className="note-item" color="grey">
          <List.Content>
            <List.Header>02 - Algorithmic Complexity</List.Header>
          </List.Content>
        </List.Item>
      </List>
    </div>
  );
};

export default Notes;