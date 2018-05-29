import React, {Component} from 'react';

import {Value} from 'slate'
import {Button, Layout, Menu} from 'antd';

import './App.css';
import defaultValue from './asset/value.json'
import EditorContainer from "./components/editorContainer";
import * as PubSub from "pubsub-js";
import Toolbar from "./components/toolbar";
import Logo from "./components/topbar/logo";
import {ASUtil} from "./utils/ASUtil";
import {SheetService} from "./service/sheetService";
import {DescCtrl} from "./controller/descCtrl";
import $ from 'jquery';

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

    let doc;
    let descValue;
    //判断时新建还是加载答题卡预览或二次编辑
    if(window.location.pathname === '/createSheet'){
      if(document.referrer === window.location.href){
        //刷新
      }
      //新建入口，从文件中读取默认答题卡描述、生成默认的value
      doc = defaultValue
    } else {
      //加载
      const sheetId = ASUtil.GetQueryString('sheetId')
      //获取对应答题卡的desc,根据desc生成value
      doc = SheetService.getDocument(sheetId)
      descValue = SheetService.getSheetDesc(sheetId)
    }

    const value = Value.fromJSON(doc);

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


    //生成desc，用户保存时候生成位置信息
    let descCtrl = new DescCtrl()
    descCtrl.genSheetDesc(this.state.value)

    this.setState({
      sheetDesc: descCtrl.sheetDesc
    });

    this.setState({value})
  }

  changeState (state) {
    this.setState(state)
  }


  onClickSave = (event) => {

    const content = this.state.value.toJS()
    localStorage.setItem('content', content)


    /* 获取页面上的html
    const string = html.serialize(value)
    localStorage.setItem('html', string)*/

    let htmlStr = "";
    const pages = document.getElementsByClassName("page");
    let pageLength = pages.length;
    for (let i = 0; i < pageLength; i++) {
      htmlStr += pages[i].outerHTML;
    }

    //添加HTML文档头部
    localStorage.setItem('html', htmlStr)

    //TODO 获取所有元素，获取对应位置信息
    for (let i = 0; i < pageLength; i++) {
      const pg = pages[i];
      const studyNo = pg.getElementsByClassName("studyNo");
    }


    //所有位置相对纸张
    var position = $('.absent').position();
    var top = position.top;
    var left = position.left;


    //this.state.location;


    alert("保存成功！")
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

              <Button type="primary" onMouseUp={this.onClickSave}>保存</Button>

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
