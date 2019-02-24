import React from "react";
import {
  Container,
  Grid,
  Header,
  Icon,
  Input,
  Image,
  Label,
  List
} from "semantic-ui-react";
import Editor from "./Editor";
import Notebooks from "./Notebooks";
import Notes from "./Notes";
import ReactMarkdown from 'react-markdown';
import "../styles/NoteList.css";


class MainNote extends React.Component {
  state = {
    markdownSrc: "# Hello World",
  }

  renderNumberOfNotes() {
    //console.log(this.props.notebooks);
    if (this.props.numOfNotes) {
      // var total = this.props.notebooks.reduce(
      //   (sum, notebook) => sum + notebook.notes.length, 0
      // );

      return (
        <Label circular color="violet" size="small">
          {this.props.numOfNotes}
        </Label>
      );
    }

    return (
      <Label circular color="violet" size="small">
        ...
      </Label>
    );
  }

  onMarkdownChange = (md) => {
    this.setState({
      markdownSrc: md
    });
    //console.log(this.state.markdownSrc);
  }

  render() {

    return (
      <Grid padded stackable columns="equal">
        <Grid.Column width="3" className="notebook-sidebar">
          <Header
            as="h2"
            id="note-logo"
            color="blue"
            style={{ padding: "0.7em" }}
          >
            <Icon name="write square" />
            <Header.Content>Notelabs</Header.Content>
          </Header>
          <Container style={{ padding: "0.7em" }}>
            <Input fluid inverted icon="search" placeholder="Search..." />
          </Container>
          <List size="large" verticalAlign="middle" inverted>
            <List.Item as="a" id="all-notes">
              <List.Content floated="right">
                {this.renderNumberOfNotes()}
              </List.Content>
              <List.Icon name="file alternate" className="sidebar-icon" />
              <List.Content>
                <List.Header>All Notes</List.Header>
              </List.Content>
            </List.Item>
          </List>
          <Notebooks notebooks={this.props.notebooks} />
        </Grid.Column>
        <Grid.Column width="3" id="notes-bar">
          <Notes />
        </Grid.Column>
        <Grid.Column width="5" id="editor-col">
          <Editor value={this.state.markdownSrc} onChange={this.onMarkdownChange} />
        </Grid.Column>
        <Grid.Column className="result-col">
          <ReactMarkdown className="result" source={this.state.markdownSrc} />
        </Grid.Column>
        
      </Grid>
    );
  }
}

export default MainNote;
