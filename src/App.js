import React, {Component} from 'react';

import {Value} from 'slate'

import {Layout} from 'antd';


import './App.css';
import initialValue from './asset/value.json'
import EditorContainer from "./components/EditorContainer";
import Toolbar from "./components/Toolbar";

const {Header, Sider} = Layout;

const value = Value.fromJSON(initialValue);


class App extends Component {
  /**
   * Deserialize the initial editor value.
   *
   * @type {Object}
   */

  state = {
    value: value,
  }

  // On change, update the app's React state with the new editor value.
  onChange = ({value}) => {
    this.setState({value})
  }

  // Render the editor.
  render() {

    return (
      <div className="App">
        <Layout>
          <Header>
            {/*<Logo/>*/}
            <Toolbar state={this.state} editorChange={this.onChange}/>

          </Header>
          <Layout>
            <Sider>Sider</Sider>

            <EditorContainer state={this.state} editorChange={this.onChange}>
            </EditorContainer>

            <Sider>Sider</Sider>
          </Layout>
          {/*<Footer>Footer</Footer>*/}
        </Layout>
      </div>
    )
  }


}

export default App;
