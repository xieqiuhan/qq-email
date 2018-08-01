function setCookie(name,value,iDay)
{
    var oDate=new Date();
    oDate.setDate(oDate.getDate()+iDay);
    document.cookie=name+'='+value+'; expires='+oDate;
}

function getCookie(name)
{
    var arr=document.cookie.split('; ');//根据cookie中的表现方式，将cookie拆分

    for(var i=0;i<arr.length;i++) {
        var arr2 = arr[i].split('=');

        if (arr2[0] == name) {
            return arr2[1];
        }
        return ' ';//假如第一次使用没有cookie记录，则返回空格
    }
}
function removeCookie(name)
{
    setCookie(name,1,-1);
}
