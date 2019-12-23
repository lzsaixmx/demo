/*! Webjs 0.1.0 2016-07-13 */
define(["jquery1.8.3.min","web"],function(a,b){function c(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent?a.attachEvent("on"+b,c):a["on"+b]=c}function d(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent?a.detachEvent("on"+b,c):a["on"+b]=null}b.dialog=b.module.create({name:"Dialog",windowTemplate:'<div class="com_dialog com_widget com_widget-content com_corner-all com_draggable" style="width:<#=width#>px;overflow: hidden;background:#f7f7f7"><#=titleRegion#><div class="com_dialog-content com_widget-content"><#=content#></div></div>',titleTemplate:'<div class="com_dialog-titlebar com_widget-header com_corner-all com_helper-clearfix"><span class="com_dialog-title">{0}</span><a class="icon_close_sale" href="#?" method="close"></a></div>',options:{title:"对话框",htmlContent:"",DialogEvent:null,width:380,closeEvent:null,isCover:!0},init:function(){this.initInnerDom(),this.window=new e({windowElement:this.windowElement,overLayer:this.overlayer,options:{isCover:this.isCover}}),b.browsertype.msie&&b.browsertype.version<=6&&(this.window.Fixed=!1),this.windowElement.find("div.com_dialog-titlebar:eq(0)").length>0&&(this.drag=new g({win:this.windowElement,titleDrag:this.windowElement.find("div.com_dialog-titlebar:eq(0)")})),this.overLay=this.window.OverLay,this.overLay.Color="#cccccc";var a=this;this.windowElement.find("[method='close']").bind("click",function(c){b.isNull(a)||b.isNull(a.closeEvent)||a.closeEvent(a.windowElement),a.close()}),this.DialogEvent(this.windowElement)},initInnerDom:function(){this.contentEndRegion=b.theme.findcontainer(this.name),this.contentEndRegion.attr("style","display:none;z-index:101");var c=b.template.convert(this.windowTemplate,{width:this.width,height:this.height,titleRegion:b.string.isNullOrEmpty(this.title)?"<div></div>":b.string.format(this.titleTemplate,this.title),content:this.htmlContent});this.windowElement=a(c).appendTo(this.contentEndRegion),this.backgroundColor&&this.windowElement.css("background-color",this.backgroundColor);var d=this.windowElement.attr("style");if(null!==d&&void 0!==d&&""!==d){if(d=d.toLowerCase(),this.closebg&&-1!=d.indexOf("background")){var e=/background:.*[;]*/i;d=d.replace(e,"")}(null===this.height||void 0===this.height)&&(d=d.replace(/height:.*px/i,"")),this.windowElement.attr("style",d)}this.overlayer=a("<div></div>").appendTo(this.contentEndRegion)},destroyDom:function(){this.htmlContent="",this.windowElement.remove(),this.overlayer.remove(),this.windowElement=null,this.contentEndRegion=null},show:function(){this.contentEndRegion.show(),this.window.Show()},close:function(){this.window.Close(),this.contentEndRegion.attr("style",this.contentEndRegion.attr("style")+"display:none"),this.destroyDom()}});var e=b.module.create({init:function(){this.Box=this.windowElement.get(0),this.SetOptions(),this.OverLay=new f({overLayer:this.overLayer,options:this.options}),this.Fixed=!!this.options.Fixed,this.Over=!!this.options.Over,this.Center=!!this.options.Center,this.onShow=this.options.onShow,this.isCover=this.options.isCover,this.Box.style.zIndex=this.OverLay.zIndex+1,this.Box.style.display="none",this.isIE6()&&(this._top=this._left=0,this._select=[])},SetOptions:function(){var a={Fixed:!0,Over:!0,Center:!0,isCover:!0,onShow:function(){}};b.extend(this.options,a||{})},_fixed:function(){var a=document.documentElement.scrollTop-this._top+this.Box.offsetTop,b=document.documentElement.scrollLeft-this._left+this.Box.offsetLeft;this.Center&&(a+=this.Box.offsetHeight/2,b+=this.Box.offsetWidth/2),this.Box.style.top=a+"px",this.Box.style.left=b+"px",this._top=document.documentElement.scrollTop,this._left=document.documentElement.scrollLeft},Show:function(a){if(this.Fixed?this.isIE6()?(this.Box.style.position="absolute",this._top=document.documentElement.scrollTop,this._left=document.documentElement.scrollLeft,window.attachEvent("onscroll",this._fixed.bind(this))):this.Box.style.position="fixed":this.Box.style.position="absolute",this.Over)(this.isCover||!this.isCover&&!this.isIE6())&&this.OverLay.Show();else if(this.isIE6()){this._select=[];var b=this;Each(document.getElementsByTagName("select"),function(a){(b.Box.contains?b.Box.contains(a):16&b.Box.compareDocumentPosition(a))||(a.style.visibility="hidden",b._select.push(a))})}if(this.Box.style.display="block",this.Center){this.Box.style.top=this.Box.style.left="50%";var c=-this.Box.offsetHeight/2,d=-this.Box.offsetWidth/2;(!this.Fixed||this.isIE6())&&(c+=document.documentElement.scrollTop,d+=document.documentElement.scrollLeft),this.Box.style.marginTop=c+"px",this.Box.style.marginLeft=d+"px"}this.onShow()},isIE6:function(){return b.browsertype.msie&&6==b.browsertype.version},Close:function(){this.Box.style.display="none",this.OverLay.Close()}}),f=b.module.create({init:function(){this.Lay=this.overLayer.get(0),this._size=function(){},this.SetOptions(),this.Color=this.options.Color,this.Opacity=parseInt(this.options.Opacity),this.zIndex=parseInt(this.options.zIndex),this.Set()},SetOptions:function(a){var a={Color:"#fff",Opacity:50,zIndex:1e3};b.extend(this.options,a||{})},Set:function(){if(this.Lay.style.display="none",this.Lay.style.zIndex=this.zIndex,this.Lay.style.left=this.Lay.style.top=0,this.isIE6()){this.Lay.style.position="absolute";var a=this;this._size=function(){a.Lay.style.width=Math.max(document.documentElement.scrollWidth,document.documentElement.clientWidth)+"px",a.Lay.style.height=Math.max(document.documentElement.scrollHeight,document.documentElement.clientHeight)+"px"},this.Lay.innerHTML='<iframe style="position:absolute;top:0;left:0;width:100%;height:100%;filter:alpha(opacity=0);" src="/favicon.ico"></iframe>'}else this.Lay.style.position="fixed",this.Lay.style.width=this.Lay.style.height="100%"},Show:function(){this.Lay.style.backgroundColor=this.Color,b.browsertype.msie?this.Lay.style.filter="alpha(opacity:"+this.Opacity+")":this.Lay.style.opacity=this.Opacity/100,this.isIE6()&&(this._size(),window.attachEvent("onresize",this._size)),this.Lay.style.display="block"},isIE6:function(){return b.browsertype.msie&&6==b.browsertype.version},Close:function(){this.Lay.style.display="none",this.isIE6()&&window.detachEvent("onresize",this._size)}});b.browsertype.msie||HTMLElement.prototype.__defineGetter__("currentStyle",function(){return this.ownerDocument.defaultView.getComputedStyle(this,null)});var g=b.module.create({options:{win:null,titleDrag:null,options:null},init:function(){var a=this;this._obj=this.win.get(0),this.Drag=this.titleDrag.get(0),this._x=this._y=0,this._fM=function(b){a.Move(window.event||b)},this._fS=function(){a.Stop()},this.SetOptions(this.options),this.Limit=!!this.options.Limit,this.mxLeft=parseInt(this.options.mxLeft),this.mxRight=parseInt(this.options.mxRight),this.mxTop=parseInt(this.options.mxTop),this.mxBottom=parseInt(this.options.mxBottom),this.mxContainer=this.options.mxContainer,this.onMove=this.options.onMove,this.Lock=!!this.options.Lock,this._obj.style.position="absolute",c(this.Drag,"mousedown",function(b){a.Start(window.event||b)})},SetOptions:function(a){this.options={Limit:!0,mxLeft:0,mxRight:0,mxTop:0,mxBottom:0,mxContainer:document.documentElement,onMove:function(){},Lock:!1},b.extend(this.options,a||{})},Start:function(a){this.Lock||(this._x=a.clientX-this._obj.offsetLeft,this._y=a.clientY-this._obj.offsetTop,c(document,"mousemove",this._fM),c(document,"mouseup",this._fS),b.browsertype.msie?(c(this.Drag,"losecapture",this._fS),this.Drag.setCapture()):c(window,"blur",this._fS))},Move:function(a){if(this.Lock)return void this.Stop();var b=a.clientX-this._x,c=a.clientY-this._y;if(this.Limit){this.mxContainer&&(this.mxLeft=this.mxTop=0,this.mxRight=this.mxContainer.clientWidth,this.mxBottom=this.mxContainer.clientHeight);var d=b+this._obj.offsetWidth-this.mxRight,e=c+this._obj.offsetHeight-this.mxBottom;d>0&&(b-=d),e>0&&(c-=e),this.mxLeft>b&&(b=this.mxLeft),this.mxTop>c&&(c=this.mxTop)}this._obj.style.left=b-(parseInt(this._obj.currentStyle.marginLeft)||0)+"px",this._obj.style.top=c-(parseInt(this._obj.currentStyle.marginTop)||0)+"px",this.onMove()},Stop:function(){d(document,"mousemove",this._fM),d(document,"mouseup",this._fS),b.browsertype.msie?(d(this.Drag,"losecapture",this._fS),this.Drag.releaseCapture()):d(window,"blur",this._fS)}});return b});