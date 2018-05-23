import React, {Component} from 'react';

import {Value} from 'slate'

import {Layout} from 'antd';

import './App.css';
import defaultValue from './asset/value.json'
import EditorContainer from "./components/editorContainer";
import Toolbar from "./components/toolbar";
import * as PubSub from "pubsub-js";

const {Header, Sider} = Layout;

const existingValue = JSON.parse(localStorage.getItem('content'))
const initialValue = existingValue || defaultValue
const value = Value.fromJSON(initialValue);

class App extends Component {
  /**
   * Deserialize the initial editor value.
   *
   * @type {Object}
   */
  constructor(props){
    super(props)
    this.state = {
      answerList: ["A","B"],
      scoreList: [],
      sheetDesc: {},
      location: {paperName: "名称是什么东西"},
      value: value,
    }
  }

  // On change, update the app's React state with the new editor value.
  onChange = ({value}) => {

    /*if (value.document != this.state.value.document) {
      const content = JSON.stringify(value.toJSON())
      localStorage.setItem('content', content)
    }*/

    this.setState({value})
  }


  componentDidMount(){
    //通过PubSub库订阅一个信息
    this.pubsub_token = PubSub.subscribe('val', function (topic, value) {
      this.setState({
        value: value
      });
    }.bind(this));
  }

  componentWillUnmount () {
    //当组件将要卸载的时候，退订信息
    PubSub.unsubscribe(this.pubsub_token);
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
        </Layout>
      </div>
    )
  }


}

export default App;
