import React, {Component} from 'react';

import {Value} from 'slate'
import {Layout, Menu} from 'antd';

import './App.css';
import defaultDescValue from './asset/front.json'
import EditorContainer from "./components/editorContainer";
import * as PubSub from "pubsub-js";
import Toolbar from "./components/toolbar";
import Logo from "./components/topbar/logo";
import {ASUtil} from "./utils/ASUtil";
import {SheetService} from "./service/sheetService";
import {DocCtrl} from "./controller/docCtrl";

const {Header} = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class App extends Component {
  /**
   * Deserialize the initial editor value.
   *
   * @type {Object}
   */
  constructor(props){
    super(props)

    let descValue;
    //判断时新建还是加载答题卡预览或二次编辑
    if(window.location.pathname === '/createSheet'){
      if(document.referrer === window.location.href){
        //刷新
      }
      //新建入口，从文件中读取默认答题卡描述、生成默认的value
      descValue = defaultDescValue
    } else {
      //加载
      const sheetId = ASUtil.GetQueryString('sheetId')
      //获取对应答题卡的desc,根据desc生成value
      descValue = SheetService.getSheetDesc(sheetId)
    }

    const initialValue = DocCtrl.fromDesc(descValue)
    const value = Value.fromJSON(initialValue);

    this.state = {
      answerList: ["A","B"],
      scoreList: [],
      sheetDesc: descValue,
      location: {paperName: "名称是什么东西"},
      value: value,
    }
  }

  componentDidMount(){
    //通过PubSub库订阅一个信息，接收子组件的信息，用于分页分栏
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


  /**
   * 菜单点击事件处理函数
   * @param e
   */
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }


  // On change, update the app's React state with the new editor value.
  onChange = ({value}) => {

    /*if (value.document != this.state.value.document) {
      const content = JSON.stringify(value.toJSON())
      localStorage.setItem('content', content)
    }*/

    this.setState({value})
  }

  changeState (state) {
    this.setState(state)
  }

  // Render the editor.
  render() {

    const headStyle = {
      padding: '0',
      backgroundColor: "#FFF",
      height: "auto",
      lineHeight: '30px',
      zIndex: 1
    }


    return (
      <div className="App">
        <Layout>
          <Header className={'headerBar'} style={headStyle}>
            <Logo/>

            <Menu
              onClick={this.handleClick}
              mode="horizontal"
            >
              <SubMenu title={<span>文件</span>}>
                <Menu.Item key="setting:1">Option 1</Menu.Item>
                <Menu.Item key="setting:2">Option 2</Menu.Item>
                <Menu.Item key="setting:3">Option 3</Menu.Item>
                <Menu.Item key="setting:4">Option 4</Menu.Item>
              </SubMenu>
              <Menu.Item key="insert">
                插入
              </Menu.Item>
              <SubMenu title={<span>格式</span>}>
                <MenuItemGroup title="Item 1">
                  <Menu.Item key="setting:1">Option 1</Menu.Item>
                  <Menu.Item key="setting:2">Option 2</Menu.Item>
                </MenuItemGroup>
                <MenuItemGroup title="Item 2">
                  <Menu.Item key="setting:3">Option 3</Menu.Item>
                  <Menu.Item key="setting:4">Option 4</Menu.Item>
                </MenuItemGroup>
              </SubMenu>
              <Menu.Item key="update">
                修改
              </Menu.Item>
              <Menu.Item key="tool">
                工具
              </Menu.Item>
            </Menu>

            <Toolbar editorChange={this.onChange} state={this.state}/>
            {/*这里可以放置二级菜单 <div>1</div>*/}
          </Header>

          <Layout>
            <EditorContainer editorChange={this.onChange} state={this.state}/>
          </Layout>
        </Layout>
      </div>
    )
  }


}

export default App;
