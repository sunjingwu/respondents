import React, {Component} from 'react';

import {Value} from 'slate'
import {message, Button, Layout, Tabs, BackTop, Modal, Icon} from 'antd';

import './App.css';
import EditorContainer from "./components/editorContainer";
import * as PubSub from "pubsub-js";
import Toolbar from "./components/toolbar";
import Logo from "./components/topbar/logo";
import {ASUtil} from "./utils/ASUtil";
import {SheetService} from "./service/sheetService";
import {DescCtrl} from "./controller/descCtrl";
import $ from 'jquery';
import {DocCtrl} from "./controller/docCtrl";

import defaultValue from "./asset/value";

const {Content,Header,Sider} = Layout;
const TabPane = Tabs.TabPane;

class App extends Component {
  /**
   * Deserialize the initial editor value.
   *
   * @type {Object}
   */
  constructor(props){
    super(props)


    let descValue;
    let slateValue
    //判断时新建还是加载答题卡预览或二次编辑
    if(window.location.pathname === '/createSheet' || window.location.pathname === '/genSheet'){
      if(document.referrer === window.location.href){
        //刷新情况

      }

      let sheetName = ASUtil.GetQueryString('sheetName')

      //初始化答题卡描述
      descValue = DescCtrl.init(sheetName);

      //FIXME 根据答题卡默认配置，生成默认的value
      slateValue = Value.fromJSON(defaultValue);
      //slateValue = DocCtrl.initFromDefault();


      if(window.location.pathname === '/genSheet'){
        //判断是否已经存在对应试卷的答题卡，如果存在的话需要对比结构是否变化，结构发生变化时需重新生成答题卡
        //let paperId
        //DescCtrl.isTopicSame();

        //自动生成的场景
        // 6.根据参数中的题目信息，生成对应题目的doc



      }

    } else {
      //二次加载
      const sheetId = ASUtil.GetQueryString('sheetId')
      //获取对应答题卡的desc,根据desc生成value
      let doc = SheetService.getDocument(sheetId)
      descValue = SheetService.getSheetDesc(sheetId)
      slateValue = Value.fromJSON(doc);
    }


    // 补齐页面
    //DocCtrl.completePages()


    this.state = {
      //答题卡中题目的答案信息，主要用于手阅卡：客观题、填空题等，需考虑到大题带小题、一题多空等情况
      answerList: ["A","B"],
      //题目的分数信息，主要用于手阅卡：可能存在多选特殊的给分规则，即不同的选择组合不同的分值
      scoreList: [],
      //答题卡的基本描述信息
      sheetDesc: descValue,
      //答题卡相关的位置信息，可以不存，用户保存的时候存储，如果实现实时保存，需要是是生成
      location: {paperName: "用户保存的时候回自动生成"},
      //答题卡的排版信息 根据JSON通过Value.fromJS()生成
      value: slateValue,
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

    message.success('保存成功！',2);
  }


  /**
   * 添加主观题
   *
   **/
  insertSubject = () => {



    //根据窗口输入信息，生成block

    //插入到最后一个题目后面

    //更新state

  }


  // Render the editor.
  render() {

    const headStyle = {
      padding: '0',
      backgroundColor: "#FFF",
      height: "auto",
      lineHeight: '30px',
      zIndex: 1,
      borderBottom: '1px solid #ccc'
    }


    //保存预览复制等处理
    const operations = (
      <div>
        <Button style={{margin:'0px 10px'}} type="primary" onMouseUp={this.onClickSave}>保存1</Button>
        <Button type="primary" onMouseUp={this.onClickSave}>保存</Button>
      </div>
    );


    return (
      <div className="App">
        <Layout>
          <Header className={'headerBar'} style={headStyle}>

            <Logo/>

            <Tabs tabBarExtraContent={operations}>
              <TabPane tab="设置" key="0">
                <span className={'funcBtn'}>页面设置</span>
                <span className={'funcBtn'}>批改模式</span>
                <span className={'funcBtn'}>考号板式</span>
                <span className={'funcBtn'}>题目排序方式</span>
                <span className={'funcBtn'}>客观题布局方式</span>
                <span className={'funcBtn'}>0.5分支持</span>
              </TabPane>

              <TabPane tab="开始" key="1">
                <Toolbar editorChange={this.onChange} state={this.state}/>
              </TabPane>
              <TabPane tab="插入" key="2">
                <Button.Group>
                  <Button>
                    <Icon type="left" />Backward
                  </Button>
                  <Button>
                    Forward<Icon type="right" />
                  </Button>
                </Button.Group>
                <Button icon="search" onMouseUp={this.insertSubject}>主观题</Button>
              </TabPane>
              <TabPane tab="视图" key="3">
                <span className={'funcBtn'}>缺考标记</span>
                <span className={'funcBtn'}>禁止作答区</span>
                <span className={'funcBtn'}>密封线</span>
              </TabPane>
            </Tabs>

            {/*这里可以放置二级菜单 <div>1</div>*/}
          </Header>

          <Layout>
            <Content>
              <EditorContainer editorChange={this.onChange} state={this.state}/>
            </Content>
            <Sider defaultCollapsed={true} collapsedWidth={30} collapsible={true} reverseArrow={true} width={300} theme={'light'}>
              Sider
            </Sider>
          </Layout>

        </Layout>
      </div>
    )
  }
}

export default App;
