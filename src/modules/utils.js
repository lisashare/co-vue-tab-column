export default{

  /**
 * 存储sessionStorage
 */
  setSessionStore (name, content) {
    if (!name) return
    if (typeof content !== 'string') {
      content = JSON.stringify(content)
    }
    window.sessionStorage.setItem(name, content)
  },

  /**
 * 获取sessionStorage
 */
  getSessionStore (name) {
    if (!name) return
    return window.sessionStorage.getItem(name)
  },

  /**
 * 存储localStorage
 */

  setStore (name, content) {
    if (!name) return
    if (typeof content !== 'string') {
      content = JSON.stringify(content)
    }
    window.localStorage.setItem(name, content)
  },

  /**
 * 获取localStorage
 */
  getStore (name) {
    if (!name) return
    // var value = JSON.parse(window.localStorage.getItem(name));
    var value = window.localStorage.getItem(name)
    return value
  },

  /**
 * 删除localStorage
 */
  removeStore (name) {
    if (!name) return
    window.localStorage.removeItem(name)
  },

  /**
 * 存储cookie
 */
  setCookie (objName, objValue, objHours = 30) {
    var str = objName + '=' + escape(objValue)
    if (objHours != null) {
      var date = new Date()
      var ms = objHours * 3600 * 1000 * 24
      date.setTime(date.getTime() + ms)
      str += '; expires=' + date.toGMTString()
    }
    document.cookie = str
  },

  /**
   * 获取cookie
   */
  getCookie (objName) {
    var search = objName + '='
    if (document.cookie.length > 0) {
	  var offset = document.cookie.indexOf(search)
	  if (offset != -1) {
		  offset += search.length
		  var end = document.cookie.indexOf(';', offset)
		  if (end == -1) end = document.cookie.length
		  return unescape(document.cookie.substring(offset, end))
	  } else {
		  return ''
	  }
    }
    return ''
  },
  /**
   * 删除cookie
   */
  delCookie (name) {
    var exp = new Date()
    exp.setTime(exp.getTime() - 1)
    var cval = getCookie(name)
    if (cval != null) {
	  document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString()
    }
  },
  /**
   * 删除所有cookie
   */
  clearCookie () {
    var keys = document.cookie.match(/[^ =;]+(?=\=)/g)
    if (keys) {
	  for (var i = keys.length; i--;) {
        document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()
	  }
    }
  },
/*******************************************************************************************弹框***********************************************************************************************/
/**
 * 原生javascript实现extend
 */
extend() {
  var length = arguments.length;
  var target = arguments[0] || {};
  if (typeof target!="object" && typeof target != "function") {
      target = {};
  }
  if (length == 1) {
      target = this;
      i--;
  }
  for (var i = 1; i < length; i++) {
      var source = arguments[i];
      for (var key in source) {
          // 使用for in会遍历数组所有的可枚举属性，包括原型。
          if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
          }
      }
  }
  return target;
  },
  /**
   * toast 普通框
   */
  mobileTip(settings){
      var options={obj:"",isshow: true,width:"4rem",content:""};
      this.extend(options, settings);

      if(options.content.length>7){
          options.width="7rem";
      }
      options.obj.$vux.toast.show({
          position:"middle",
          width:options.width,
          type:"text",
          text:options.content

      })
      /*options.obj.toast.isshow = options.isshow
      options.obj.toast.text=options.content;
      options.obj.toast.position = "middle"*/
  },
  /**
   * 询问框
   */
  mobileConfirm(settings){
      var options={obj:"",isshow:true,title:"",butconfirm:"确定",butcancel:"取消",content:"",onCancel:"",confirm:""};
      this.extend(options, settings);

      options.obj.$vux.confirm.show({
          confirmText:options.butconfirm,
          cancelText:options.butcancel,
          content:options.content,
          onCancel () {
              if(options.noCallBack)options.noCallBack();
          },
          onConfirm () {
              if(options.sucCallBack)options.sucCallBack();
          }
      })
    /*
      options.obj.confirm.isshow = options.isshow
      options.obj.confirm.butconfirm=options.butconfirm
      options.obj.confirm.butcancel=options.butcancel
      options.obj.confirm.text=options.content
      options.obj.confirm.confirm=function () {//确定
          if(options.sucCallBack)options.sucCallBack();
      }
      options.obj.confirm.onCancel=function () {//取消
          if(options.noCallBack)options.noCallBack();
      }
      */
  },
  /**
   *  关闭
   *  @param type 弹框的序号 (confirm、)
   */
  mobileClose(settings){
      var options={obj:"","type":""};
      this.extend(options, settings);
      if(options.type=="confirm"){
          options.obj.$vux.confirm.hide()
      }
  }
}
