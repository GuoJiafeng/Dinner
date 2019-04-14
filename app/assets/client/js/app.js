/**
 * Created by hanxin on 19-2-3.
 */

var rootUrl = "http://192.168.5.208:8080/diancan/";
var fileurl = rootUrl+"upload/";
var clientUrl = rootUrl+"Wehall!";
var uploadUrl = rootUrl+"Upload";

//var rootUrl = "http://ideaweshop.sinaapp.com/";
//var fileurl = "http://ideaweshop-public.stor.sinaapp.com/upload/";
//var clientUrl = rootUrl+"index.php/Client/";


function ownpage(el){
    $("#showimg").css({"left":"0px","top":"0px"});
    changePage("imgshow");
    $("#showimg").attr("src",el.src);
    var imgcontaner = document.getElementById("showimg");
    var hammertime = Hammer(imgcontaner, {
        preventDefault: true
    });
    var lastScale = 1;
    var startX = 0;
    var startY = 0;
    var changeX = 0;
    var changeY = 0;
    var currentX = 0;
    var currentY = 0;
    var hasDoubleTap = false;
    hammertime.on("transform",function(ev){
        $(imgcontaner).css({"transform":"scale("+ev.gesture.scale*lastScale+","+ev.gesture.scale*lastScale+")"});
        lastScale = ev.gesture.scale;
        $("#showimg").css({"left":"0px","top":"0px"});
    });
    hammertime.on("dragstart",function(ev){
        $(imgcontaner).css({"transition": ""});
        startX = ev.gesture.center.clientX;
        startY = ev.gesture.center.clientY;
        currentX = $(imgcontaner).css("left").split("px")[0]*1;
        currentY = $(imgcontaner).css("top").split("px")[0]*1;
    });
    hammertime.on("drag",function(ev){
        changeX = ev.gesture.center.clientX-startX;
        changeY = ev.gesture.center.clientY-startY;
        $(imgcontaner).css("left",currentX+changeX);
        $(imgcontaner).css("top",currentY+changeY);
    });
    hammertime.on("doubletap",function(ev){
        $("#showimg").css({"left":"0px","top":"0px"});
        if(hasDoubleTap){
            $(imgcontaner).css({"transform":"scale(1,1)","transition": "all 200ms ease-in"});
            hasDoubleTap = false;
        }else{
            $(imgcontaner).css({"transform":"scale(6,6)","transition": "all 200ms ease-in"});
            hasDoubleTap = true;
        }

    });

}

function getPositionByBaidu(json){
    var info = JSON.parse(json);
    var latitude = info.latitude;
    var longitude = info.longitude;
    var addr = info.addr;
};

function setTheme(){
    window.location.href="indexblue.html";
}