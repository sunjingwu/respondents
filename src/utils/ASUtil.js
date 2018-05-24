export class ASUtil {
  static getDPI() {
    var arrDPI = new Array();
    if (window.screen.deviceXDPI != undefined) {
      arrDPI[0] = window.screen.deviceXDPI;
      arrDPI[1] = window.screen.deviceYDPI;
    }
    else {
      var tmpNode = document.createElement("div");
      tmpNode.style.cssText = "width:1in;height:1in;position:absolute;left:0px;top:0px;z-index:99;visibility:hidden";
      document.body.appendChild(tmpNode);
      arrDPI[0] = parseInt(tmpNode.offsetWidth);
      arrDPI[1] = parseInt(tmpNode.offsetHeight);
      tmpNode.parentNode.removeChild(tmpNode);
    }
    return arrDPI;
  }


  static pxPerMm(){

    var tmpNode = document.createElement("div");
    tmpNode.style.cssText = "width:2mm;height:100mm;visibility:hidden";
    document.body.appendChild(tmpNode);

    var pxPerMm = tmpNode.offsetHeight / 100;
    tmpNode.parentNode.removeChild(tmpNode);
    return pxPerMm;
  }


  /**
   * 获取请求参数
   * @param name
   * @returns {*}
   * @constructor
   */
  static GetQueryString(name) {
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
  }
}
