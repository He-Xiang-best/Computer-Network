
//$��ͬ��document.getElementById();
function $Doc() {
    var elements = new Array();
    for (var i = 0; i < arguments.length; i++) {
    var element = arguments[i];
    if (typeof element == 'string')
      element = document.getElementById(element);

    if (arguments.length == 1)
      return element;

    elements.push(element);
    }
    return elements;
}

//$T��ͬ��document.getElementsByTagName();
function $T(tagStr){
    if(tagStr != null){
        var elements = new Array();
        elements = document.getElementsByTagName(tagStr);
        return elements;
    }
    return false;
}

//$N��ͬ��document.getElementsByName();
function $N(nameStr){
    if(nameStr != null){
        var elements = new Array();
        elements = document.getElementsByName(nameStr);
        return elements;
    }
    return false;
}

/*�ַ�������
 *1.ȥ���ַ����е����пո�*/
String.prototype.trim = function(){
    var space = new RegExp(" ","g");
    var newStr = this.replace(space,"");
    return newStr;
}

//2.�ж��ַ����Ƿ�Ϊ����
String.prototype.isNum = function (){
        return (!isNaN(this));
}

//3.�ж��ַ����Ƿ�Ϊ������
String.prototype.isFloat = function (){
        if(!(isNotaNumber(this))) return false;
        return (!isNaN(parseFloat(this))) ? true : false;
}

//4.�ж��ַ����Ƿ�Ϊ��Ч��Email��ַ
String.prototype.isEmail = function (){
        return(new RegExp(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/).test(this));
}

String.prototype.isHttp = function (){
        return(new RegExp(/^http:\/\/[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/).test(this));
}

/*--------��������ز���--------------------------------------------
 *  inputObj������Ҫ�������ڹ���input.type=text(�����)����;
 *  ���÷���:
 *   var obj = new inputObj('Id')
 *   ����˵��:
 *    id: input������idֵ;
 *    ע�⣺����Ҫ����˫���Ż�����;
 *    �ж�Ϊ�գ�obj.isNull,����T��F;
 *
----------------------------------------------------*/
function inputObj(objId){
    this.idStr = objId;
    var obj = $Doc(this.idStr);
    this.value = function (){return $Doc(this.idStr).value;}
    this.proto = obj;
    //this.seeProto = function(){for(x in this.proto) alert( x + "-" + this.proto[x]);}
    this.isNull = function(){
        if(this.value()=="" || (this.value().trim().length < 1))
            return true;
        return false;
    }
}
/*----------------------------------------------------
 *  checkBox��������Ҫ��������ȫѡ;
 *  ���÷���:
 *   <body onload=checkBox('name','Id')>
 *   ����˵��:
 *    name: Ҫȫѡ�����nameֵ;
 *    id: �����ѡ��ʵ��ȫѡ����Ĺ��ܵ�idֵ;
 *    ע�⣺����Ҫ����˫���Ż�����;
 *
 *    ʵ����
 *		<body onload="checkBox('check','box')">
 *		<INPUT TYPE="checkbox" NAME="check"><br/>
 *		<INPUT TYPE="checkbox" NAME="check"><br/>
 *		<INPUT TYPE="checkbox" NAME="check"><br/>
 *		<br />
 *		<input type="checkbox" id="box"><br />
----------------------------------------------------*/
function checkBox(name,id){
    var boxArray = $N(name);
    var checkObj = $Doc(id);
    var statu = new status();
    checkObj.onclick = function (){
      for(var i = 0; i < boxArray.length; i++)
         boxArray[i].checked = this.checked;
    }

    for(var i = 0; i < boxArray.length; i++){
        boxArray[i].onclick = function (){
         if (this.checked) {
             if(statu.state()) checkObj.checked = true;
            }else{
             checkObj.checked = false;
            }
        }
    }

    function status(){
        this.state = function (){
             for(var i = 0; i < boxArray.length; i++){
                 if (!(boxArray[i].checked)){
                    return false;
                 }
             }
             return true;
        }
    }
}

/*----------------------------------------------------
 *  isChk������������Ҫ���������ж��Ƿ�ѡ���˸�ѡ��;
 *  ���÷���:
 *   isChk(chkName)
 *   ����˵��:
 *    chkName: ��ѡ���nameֵ;
 *    ��ѡ���˸�ѡ���򷵻�True����֮����False;
 *    ע�⣺����Ҫ����˫���Ż�����;
 *
----------------------------------------------------*/
function isChk(chkName){
    var chkObj = $N(chkName);
    for(var i = 0; i < chkObj.length; i++){
        if( chkObj[i].checked ) return true;
    }
    return false;
}

/*-----����Ƿ�ѡ���������˵�------------
 *  isSelect������������Ҫ�������ڼ���Ƿ�ѡ���������˵���ѡ��;
 *  ���÷���:
 *   isSelect(selectId)
 *   ����˵��:
 *    selectId: �����˵���Idֵ;
 *    ��ѡ�����򷵻�True����֮����False;
 *    ע�⣺����Ҫ����˫���Ż�����;
---------------------------------------*/
function isSelect(selectId){
    var obj = $Doc(selectId);
    if(obj.options[0].selected == true) return false;
	return true;
}

/*-----���������˵���ѡ�е�ֵ------------
 *  $SelectValue������������Ҫ�������ڷ���ָ�������˵���ѡ�����value;
 *  ���÷���:
 *   $SelectValue(str,state)
 *   ����������˵���Name�����򷽷��磺$SelectValue('selectName');
 *   ����������˵���Id�����򷽷��磺$SelectValue('selectId',id);
 *   ����˵��:
 *    str: �����������˵���Id��name;
 *    state:�������ߺ�����������Id����Name;һ����ʶ������;
 *    ���������˵���ǰѡ���value;
 *    ע�⣺����strҪ����˫���Ż�����;
---------------------------------------*/
function $SelectValue(str,state){
    if (state != null)
    {
        var sObj = $Doc(str);
    }else{
        var sObj = $N(str)[0];
    }
    //alert(sObj.options[sObj.options.selectedIndex].value);
    return sObj.options[sObj.options.selectedIndex].value;
}

//�رմ���
function winclose(){
    window.close();
}

/*���´��ڣ���ͬ��window.open()����
   ����windowopen(��../***.do��)
----------------------------------*/
function windowopen( url, winName){
			width = 1024;
			height = 768;
			xposition=0; yposition=0;
            if(winName == null) winName = "";
            if ((parseInt(navigator.appVersion) >= 4 ))
			{
				xposition = (screen.width - width) / 2;
				yposition = (screen.height - height) / 2;
			}
			theproperty= "width=" + width +","
				+ "height="+height+","
				+ "location=0,"
				+ "menubar=0,"
				+ "resizable=1,"
				+ "scrollbars=1,"
				+ "status=0,"
				+ "titlebar=0,"
				+ "toolbar=0,"
				+ "hotkeys=0,"
				+ "screenx=" + xposition + ","
				+ "screeny=" + yposition + "," /
				+ "left=" + xposition + ","
		try{
				window.open( url,winName,theproperty );
			}catch(e){
				alert("�򿪴���ʧ�ܣ�");
		}
}

//
/*���Ƶ������ڴ�С����ͬ��window.open()����
   ����windowopen(��../***.do����width , height)
----------------------------------*/
function windowopen( url, width , height){
			if(width == null) width = 1024;
			if(height == null) height = 768;
			xposition=0; yposition=0;
            if ((parseInt(navigator.appVersion) >= 4 ))
			{
				xposition = (screen.width - width) / 2;
				yposition = (screen.height - height) / 2;
			}
			theproperty= "width=" + width +","
				+ "height="+height+","
				+ "location=0,"
				+ "menubar=0,"
				+ "resizable=1,"
				+ "scrollbars=1,"
				+ "status=0,"
				+ "titlebar=0,"
				+ "toolbar=0,"
				+ "hotkeys=0,"
				+ "screenx=" + xposition + ","
				+ "screeny=" + yposition + "," /
				+ "left=" + xposition + ","
		try{
				window.open( url,'new',theproperty );
			}catch(e){
				alert("�򿪴���ʧ�ܣ�");
		}
}

//��ַת��
function gotoURL(urlStr){
    document.location.href = urlStr;
}

function viewphoto(mypic,imgfile) {
    if (imgfile.value){
        mypic.src=imgfile.value;
        mypic.style.display="";
        mypic.border=1;
    }
}
//�ð�ť��ʵ��ȫѡ
function checkAll(name){
    var boxArray = $N(name);
    for(var i = 0; i < boxArray.length; i++)
         boxArray[i].checked = true;
 }
//�ð�ť��ʵ��ȡ��ȫѡ
function checkNone(name){
    var boxArray = $N(name);
    for(var i = 0; i < boxArray.length; i++)
         boxArray[i].checked = false;
 }

//
function allSelect(nameStr){
    var sObj =  $N(nameStr)[0];
    for(var i = 0;i < sObj.length;i++)
        sObj[i].selected = true;
}
//
function calSelect(nameStr){
    var sObj =  $N(nameStr)[0];
    for(var i = 0;i < sObj.length;i++)
        sObj[i].selected = false;
}

function del(promptStr){
    if(promptStr == null || promptStr == "") promptStr = "Are you delete?";
    if(confirm(promptStr)){
        return true;
    }else{
        return false;
    }
}




function isEmpty(str){
	if(str.length==0){
		return true
	}else if(jsTrim(str).length==0){
		return true;
	}
	return false;
}
//=============================================
//Trim left spaces
//=============================================
function jsLTrim(str){
	var rtnStr = "";
	for (var i=0; i<str.length; i++){
		if (str.charAt(i)!=" ")	{
			rtnStr=str.substr(i);
			break;
		}
	}
	return rtnStr;
}

//==========================================
// Trim right spaces
//==========================================
function jsRTrim(str){
	var rtnStr = "";
	for (var i=str.length-1;i>=0;i--){
		if (str.charAt(i)!=" ")	{
			rtnStr=str.substring(0,i+1);
			break;
		}
	}
	return rtnStr;
}

//==========================================
//Purpose: Trim both left and right spaces
//==========================================
function jsTrim(str){
	return(jsLTrim(jsRTrim(str)));
}

function goBack(){
    if ((navigator.userAgent.indexOf('MSIE') >= 0) && (navigator.userAgent.indexOf('Opera') < 0)){ // IE
        if(history.length > 0){
            window.history.go( -1 );
        }else{
            window.opener=null;window.close();
        }
    }else{ //��IE�����
        if (navigator.userAgent.indexOf('Firefox') >= 0 ||
            navigator.userAgent.indexOf('Opera') >= 0 ||
            navigator.userAgent.indexOf('Safari') >= 0 ||
            navigator.userAgent.indexOf('Chrome') >= 0 ||
            navigator.userAgent.indexOf('WebKit') >= 0){

            if(window.history.length > 1){
                window.history.go( -1 );
            }else{
                window.opener=null;window.close();
            }
        }else{ //δ֪�������
            window.history.go( -1 );
        }
    }
}