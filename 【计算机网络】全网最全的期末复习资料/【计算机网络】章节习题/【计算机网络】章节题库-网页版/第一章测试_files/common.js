$(function() {
    //------valuelist
    $("table.valuelist").each(function() {
        $(this).find("tr:even").addClass("even");
        $(this).find("tr").each(function() {
            $(this).hover(function() {
                $(this).addClass("over");
            }, function() {
                $(this).removeClass("over");
            });
            $(this).click(function() {
                if ($(this).hasClass("click")) {
                    $(this).removeClass("click");
                } else {
                    $(this).addClass("click");
                    $(this).siblings().removeClass("click");
                }
            });
        });
    });
});

function openwindow(url, winName)
{
    var width = 820;
    var height = 510;
    var xposition = 0;
    var yposition = 0;
    if ((parseInt(navigator.appVersion) >= 4 ))
    {
        xposition = (screen.width - width) / 2;
        yposition = (screen.height - height) / 2;
    }
    var theproperty = "width=" + width + ","
            + "height=" + height + ","
            + "location=0,"
            + "menubar=0,"
            + "resizable=0,"
            + "scrollbars=1,"
            + "status=0,"
            + "titlebar=0,"
            + "toolbar=0,"
            + "hotkeys=0,"
            + "screenx=" + xposition + "," //��������Netscape
            + "screeny=" + yposition + "," //��������Netscape
            + "left=" + xposition + ","; //IE
    try {
        window.open(url, winName, theproperty);
    } catch(e) {
        alert("�򿪴���ʧ�ܣ�");
    }
}

function doAction(a)
{
    if (a == "delete" && confirm('�Ƿ�ȷ��ɾ��ѡ���û���'))
    {
        document.form00.selaction.value = a;
        document.form00.submit();
    }
}

function FixSize(width, height)
{
    try {
        self.resizeTo(width, height);
        //self.moveTo(1, 1);
    } catch(e) {
        alert("�̶����ڴ�Сʧ�ܣ�");
    }
}

function checkform()
{
    if (document.formMessages.file.value == "")
        alert("��ѡ��Excel�ļ�");
    else
        document.formMessages.submit();
}


function MM_goToURL() { //v3.0
    try {
        var i, args = MM_goToURL.arguments;
        document.MM_returnValue = false;
        for (i = 0; i < (args.length - 1); i += 2) eval(args[i] + ".location='" + args[i + 1] + "'");
    } catch(e) {
        alert("ת���ַʧ�ܣ�");
    }
}

function MM_openBrWindow(theURL)
{ //v2.0
    window.open(theURL, 'wnd_info', 'scrollbars=yes,width=750,height=400');
}

function checkEmail(email)
{
    if (email == "") return false;
    if (email.indexOf("@", 1) < 0) return false;
    if (email.indexOf(".", email.indexOf("@", 1) + 1) < 0) return false;
    if (email.indexOf(".") - email.indexOf("@") < 2) return false;
    if (email.indexOf(".", email.length - 1) > 0) return false;
    return true;
}

function ck(str)
{
    var pattern = /^[A-Za-z0-9]+$/;
    var flag = pattern.test(str);
    if (flag) {
        return true;
    }
    else {
        return false;
    }
}


function selectall(v, elementName) {
    var obj = document.getElementsByName(elementName);
    for (var i = 0; i < obj.length; i++) {
        if (obj[i].disabled == false)
            obj[i].checked = v;
    }
}


//�ı䵱ǰ״̬���ж��Ƿ�ȫѡ
function changechecked(v, Id, elementName) {
    var obj = document.getElementById(Id);
    if (v) {
        if (isallselected(elementName)) obj.checked = true;
    } else {
        obj.checked = false;
    }
}

//�Ƿ�ȫ��ѡ��
function isallselected(elementName) {
    var obj = document.getElementsByName(elementName);
    for (var i = 0; i < obj.length; i++) {
        if (!(obj[i].checked)) {
            return false;
        }
    }
    return true;
}
/*
 //����ʵ��
 <INPUT onclick="selectall(this.checked,'userName')" type="checkbox" id="clickId">ȫѡ
 <INPUT onclick="changechecked(this.checked,'clickId','userName')" type="checkbox" name="userName">
 <INPUT onclick="changechecked(this.checked,'clickId','userName')" type="checkbox" name="userName">
 <INPUT onclick="changechecked(this.checked,'clickId','userName')" type="checkbox" name="userName">
 <INPUT onclick="changechecked(this.checked,'clickId','userName')" type="checkbox" name="userName">
 */

function Trim(s)
{
    while ((s.substring(0, 1) == ' ') || (s.substring(0, 1) == '\n') || (s.substring(0, 1) == '\r') || (s.substring(0, 1) == '\t'))
    {
        s = s.substring(1, s.length);
    }

    while ((s.substring(s.length - 1, s.length) == ' ') || (s.substring(s.length - 1, s.length) == '\n') || (s.substring(s.length - 1, s.length) == '\r') || (s.substring(s.length - 1, s.length) == '\t'))
    {
        s = s.substring(0, s.length - 1);
    }

    return s;
}

function $N(nameStr){
    if(nameStr != null){
        var elements = new Array();
        elements = document.getElementsByName(nameStr);
        return elements;
    }
    return false;
}

function isChk(chkName){
    var chkObj = $N(chkName);
    for(var i = 0; i < chkObj.length; i++){
        if( chkObj[i].checked ) return true;
    }
    return false;
}


/*is number
 �������д����
 */
function isNotaNumber(string, sign)
{
    var integer;
    if ((sign != null) && (sign != '-') && (sign != '+'))
    {
        alert('IsInter(string,sign)�Ĳ�������\nsignΪnull��"-"��"+"');
        return false;
    }
    integer = parseInt(string);
    if (isNaN(integer))
    {
        return false;
    }
    else if (integer.toString().length == string.length)
    {
        if ((sign == null) || (sign == '-' && integer < 0) || (sign == '+' && integer > 0))
        {
            return true;
        }
        else
            return false;
    }
    else
        return false;
}


/*�Ƿ�ѡ���˸�ѡ��*/
function isChecked(SEL)
{
    var col = document.getElementsByName(SEL);
    for (var i = 0; i < col.length; i++) {
        if (col[i].checked == true && col[i].disabled == false)
            return true;
    }
    return false;
}


/*������������Ƿ�С�ڵ�ǰ���ڣ�С�ڷ���false�����ڵ��ڷ���true*/
function chkDate(dateStr) {
    var thedate = new Date();
    var note = dateStr.split("-");
    if (note[0] < thedate.getYear()) {
        return false;
    } else if (note[0] != thedate.getYear()) {
        return true;
    } else if (note[1] < thedate.getMonth() + 1) {
        return false;
    } else if (note[1] != thedate.getMonth() + 1) {
        return true;
    } else if (note[2] < thedate.getDate()) {
        return false;
    } else {
        return true;
    }
}

$(document).ready(function() {
    $("div.function ul li:last").addClass("last");
    $("div.functionc ul li:last").addClass("last");
});

function isNotaIntNumber (string,sign)
{
  var integer;
	if ((sign!=null) && (sign!='-') && (sign!='+'))
	{
	alert('IsInter(string,sign)�Ĳ�������\nsignΪnull��"-"��"+"');
	return false;
	}
	integer = parseInt(string);
	if (isNaN(integer))
	{
	return false;
	}
	else if (integer.toString().length==string.length)
	{
	if ((sign==null) || (sign=='-' && integer<0) || (sign=='+' && integer>0))
	{
	return true;
	}
	else
	return false;
	}
	else
	return false;
}
function htmlDecode(str){
    str = str.replace(new RegExp("&lt;","gm"), "<");
    str = str.replace(new RegExp("&gt;","gm"), ">");
    str = str.replace(new RegExp("&quot;","gm"), "\"");
    str = str.replace(new RegExp("&amp;","gm"), "\"");
    str = str.replace(new RegExp("&#39;","gm"), "\"");
    return str;
}
