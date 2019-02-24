import React from "react";
import { Label, List } from "semantic-ui-react";

const Notebooks = ({ notebooks }) => {
  const renderNotebooks = notebooks.map(notebook => {
    return (
      <List.Item
        as="a"
        className="notebook-item"
        color="grey"
        key={notebook.id}
      >
        <List.Icon name="book" className="sidebar-icon" />
        <List.Content>
          <List.Header>{notebook.title}</List.Header>
        </List.Content>
      </List.Item>
    );
  });

  return (
    <List size="large" inverted>
      <List.Item className="sidebar-item">
        <List.Icon name="folder" className="sidebar-icon" />
        <List.Content>
          <List.Header>Notebooks</List.Header>
          <List.List style={{ overflow: "auto", maxHeight: 200 }}>
            {renderNotebooks}
          </List.List>
        </List.Content>
      </List.Item>
    </List>
  );
};

export default Notebooks;
