// JavaScript Document
var App = angular.module('App', ['ngSanitize'] );

App.controller('CenterCTRL', function ($scope,$http,todoServicez,$sce) {
//////////////////////////////////////open links
$scope.loginoff=true;
$scope.loginon=false;

$scope.wopen = function(links) {
 window.open(links, '_system', '');
};

$scope.inappb = function(links){ 
var fild=links.split('.');
 var ext=fild[2].split('.').pop();
 //alert(ext);
 var valid_formats =["jpg", "png", "gif", "bmp", "jpeg","GIF","JPG","JPEG","PNG"];
 if(valid_formats.includes(ext)){
	 
 var browser = cordova.InAppBrowser.open(links, '_blank', 'location=no','hideurlbar=yes');
	 }else{
downloader.init({folder: "download", unzip: true});
downloader.get(links);
document.addEventListener(DOWNLOADER_error, function(event){
 alert('خطا: '+event.data);
});
 }

};
///////////////////////////////login
setTimeout(function(){ $scope.rlogin(1);}, 2000);
$scope.rlogin = function (sdv) {
$scope.sephoto=false;
$scope.enphoto=true;
 $http.get("http://admin.borna-grp.ir/api.php?uuid="+device.uuid).then(function(response) {
 $scope.logind = response.data.login;
// alert($scope.logind[0].ids);	
 if( $scope.logind[0].ids==0){
	  $.mobile.changePage( "#login", { transition: "slideup"} );
if(sdv==1){new $.nd2Toast({   message :"خطا در اطلاعات وارد شده",ttl : 4000});}	
  }else{
	  if($.mobile.activePage.is('#login')){
	  $.mobile.changePage( "#one", { transition: "slideup"} );
	  }
	 $scope.dall = $scope.logind[0].alls;
	 $scope.dnew = $scope.logind[0].news;
	 //alert($scope.dnew);
	 $scope.loginoff=false;
	 $scope.loginon=true;
	 $scope.fnamep=$scope.logind[0].fname+' '+$scope.logind[0].lname;
	 $scope.iduser=$scope.logind[0].ids;
	 if($scope.logind[0].type==1){$scope.pro='کاربر'; $scope.typer=false;}else{$scope.pro='مدیر'; $scope.typer=true;}
	 document.getElementById('userid').value=$scope.logind[0].ids;
	 document.getElementById('usertype').value=$scope.logind[0].type;
	  document.getElementById('username').value=$scope.logind[0].fname+' '+$scope.logind[0].lname;
	 }
});
};


var myVar = setInterval(myTimer, 60000);
function myTimer() {
 $http.get("http://admin.borna-grp.ir/api.php?uuid="+device.uuid).then(function(response) {
 $scope.loginds = response.data.login;
	 $scope.dall = $scope.loginds[0].alls;
	 $scope.dnew = $scope.loginds[0].news;
	 if(dnew!=0){
	 new $.nd2Toast({   message : $scope.dnew +" درخواست جدید وجود دارد",ttl : 4000});
	 }
});
}
//////////////////////////////// form login
 $scope.login = {};	
$scope.sabt_login = function () {

if($scope.login.pass==undefined || $scope.login.email==undefined ){
new $.nd2Toast({   message :"لطفا تمام فیلدها را تکمیل نمایید.",ttl : 4000});
 return 0;}
   var datas = $.param({uid:device.uuid, pass:$scope.login.pass, email:$scope.login.email});
  var config = {
                headers : {
					'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                }
            };
 var url='http://admin.borna-grp.ir/api.php';
$http.post(url, datas, config);
setTimeout(function(){ $scope.rlogin(1);}, 2000);
};
/////////////////////////// exit
$scope.exits = function () {
	var uuid=document.getElementById('userid').value;
 $http.get("http://admin.borna-grp.ir/api.php?exit="+uuid).then(function(response) {
	//alert(uuid);
if(response.data.exit==1){
  $scope.loginoff=true;
 $scope.loginon=false;
 $.mobile.changePage( "#login", { transition: "slideup"} );
}
   });
};
////////////////////////////////

$scope.pids = function (id) {
	$scope.pidss=id;
};

 $scope.ch_pass={};
$scope.ch_passs = function () {

var ids=$scope.pidss;
var npass=$scope.chpass.npass;	 
 if(npass==undefined ){
new $.nd2Toast({   message :"لطفا تمام فیلدها را تکمیل نمایید.",ttl : 4000});
return 0;}
var datas = $.param({pass_new:npass, pass_id_reg:ids});
var config = {
headers : {
	'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
}
};
var url='http://admin.borna-grp.ir/api.php';
$http.post(url, datas, config);
new $.nd2Toast({   message :"تغییر رمز عبور انجام شد.",ttl : 4000});
$scope.ch_pass={};
};
////////////////////////////////////////////
$scope.sab_da = function () {
$scope.sephoto=false;
$scope.enphoto=true;
document.getElementById('largeImage2').style.display = 'none';
document.getElementById('shall').innerHTML="";
 
};
 /////////////////////////////////////////////////////////////////////////ersal form sabt darkhst
 $scope.khodr = {};	
$scope.sabt_darkhast = function () {
var addressd=$scope.khodr.onvan;
var postid=$scope.khodr.addressb;
var phoned=$scope.khodr.tellb;
var tozihatd=$scope.khodr.tozihat;
var typedd=$scope.khodr.nooe;
$scope.uid =  document.getElementById('userid').value;
if($scope.khodr.addressb==undefined || $scope.khodr.onvan==undefined || $scope.khodr.tellb==undefined || $scope.khodr.tozihat==undefined){
new $.nd2Toast({   message :"لطفا تمام فیلدها را تکمیل نمایید.",ttl : 4000});
 return 0;}
 $scope.sephoto=true;
$scope.enphoto=false;
new $.nd2Toast({   message :"در حال ارسال اطلاعات",ttl : 4000});
  $http({
  method  : 'POST',
  url     : 'http://admin.borna-grp.ir/manage/code.php',
  data    : $.param({idreg: $scope.uid, sd_text:addressd, sd_address:postid, sd_phone: phoned, type:typedd, sd_tozih:tozihatd}),  // pass in data as strings
  headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
 })
.success(function() {
 //$.mobile.changePage( "#khodro", { transition: "slideup"} );
new $.nd2Toast({   message :"ثبت با موفقیت ارسال به بخش بعدی",ttl : 4000});
 $scope.khodr = {};	
   });
 };
 
 ////////////////////ersal aksha darkhast
  $scope.khodr = {};	
$scope.sendaks = function () {
var vImage = document.getElementById('largeImage2').src;
$scope.uid =  document.getElementById('userid').value;
if(vImage==undefined){


new $.nd2Toast({   message :"لطفا تمام فیلدها را تکمیل نمایید.",ttl : 4000});
 return 0;}
new $.nd2Toast({   message :"در حال ارسال اطلاعات",ttl : 4000});
var d = new Date();	
var largeImage = document.getElementById('largeImage2');
var imageURI=largeImage.src;

var fild=imageURI.split('.');  
 var ext=fild[1];
var namefile=d.getTime()+'.'+ext;
todoServicez.UserImg(imageURI,namefile,'end').then(function(){
document.getElementById('largeImage2').src="img/Sdcds.jpg";
new $.nd2Toast({   message :"ارسال انجام شد.",ttl : 4000});
});
$http.get("http://admin.borna-grp.ir/api.php?idx="+$scope.uid+"&pict="+namefile).then(function(response) {
 $scope.logind = response.data.login;
 $scope.khodr = {};	
   });
 };
  /////////////////////////////////////////////////////////////////////////ersal form sabt users
$http.get("city.json").then(function(response) {
$scope.ostani = response.data.ostan;
});   

$scope.shcity = function () {
$scope.ostanid= $scope.userd.selected;
$http.get("city.json").then(function(response) {
$scope.citys = response.data.city;
});  
};

$scope.userd = {};	
$scope.sabt_user = function () {
var vshop=$scope.userd.shop;
var vkhangi=$scope.userd.khangi;
var shopr=$scope.userd.shopr;
var rbazargani=$scope.userd.rbazargani;
var vaddress=$scope.userd.address;
var fname=$scope.userd.fname;
var lname=$scope.userd.lname;
var vcell=$scope.userd.cell;
var vtell=$scope.userd.tell;
var vemail=$scope.userd.emails;
var vcity=$scope.userd.city;
var vostan=$scope.userd.selected;
var vpassword=$scope.userd.pass;
var vtype=1;
$scope.uid =  document.getElementById('userid').value;

if($scope.userd.fname==undefined || $scope.userd.pass==undefined || $scope.userd.selected==undefined || $scope.userd.shop==undefined){
new $.nd2Toast({   message :"لطفا تمام فیلدها را تکمیل نمایید.",ttl : 4000});
 return 0;}
new $.nd2Toast({   message :"در حال ارسال اطلاعات",ttl : 4000});
  $http({
  method  : 'POST',
  url     : 'http://admin.borna-grp.ir/api.php',
  data    : $.param({fname_add: fname, lname_add:lname, tell:vtell, address: vaddress, email:vemail, type:vtype, city: vcity, bazargani:rbazargani, cell:vcell, password:vpassword, shop: vshop, rshop:shopr, khangi:vkhangi, ostan:vostan}),  // pass in data as strings
  headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
 })
.success(function() {
 //$.mobile.changePage( "#khodro", { transition: "slideup"} );
new $.nd2Toast({   message :"ثبت با موفقیت انجام شد",ttl : 4000});
 $scope.userd = {};	
 });
 $scope.userd = {};	
};
///////////////////////////////////////////////// pasokh dadan

 $scope.answer = {};	
$scope.sendanswer = function () {
 var coder = document.getElementById('coderip').value;
var vImage = document.getElementById('largeImage3').src;
$scope.uid =  document.getElementById('userid').value;
if(vImage==undefined){
new $.nd2Toast({   message :"لطفا تمام فیلدها را تکمیل نمایید.",ttl : 4000});
 return 0;}
new $.nd2Toast({   message :"در حال ارسال اطلاعات",ttl : 4000});
var d = new Date();
var largeImage = document.getElementById('largeImage3');
var imageURI=largeImage.src;

var fild=imageURI.split('.');  
 var ext=fild[1];
var namefile=d.getTime()+'.'+ext;
//alert(namefile);
//alert(imageURI);
todoServicez.UserImg(imageURI,namefile,'end').then(function(){
document.getElementById('largeImage3').src="img/Sdcds.jpg";
new $.nd2Toast({   message :"ارسال انجام شد.",ttl : 4000});
});

  $http({
  method  : 'POST',
  url     : 'http://admin.borna-grp.ir/manage/code.php',
  data    : $.param({idreg: $scope.uid, text:$scope.answer.text, id_replys:coder}),  // pass in data as strings
  headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
 });


$http.get("http://admin.borna-grp.ir/api.php?idx="+$scope.uid+"&pict="+namefile).then(function(response) {
 $scope.logind = response.data.login;
 $scope.answer = {};	
   });
 };
/////////////////////////////////////////////namayesh darkhastha
$scope.shdarkh = function (flag) {
	 $scope.flagd=flag;
var idud=document.getElementById('userid').value;
var typer=document.getElementById('usertype').value;
$http.get("http://admin.borna-grp.ir/api.php?vreq="+idud+"&type="+typer).then(function(response) {
$scope.darkhast = response.data.vreq;
});  
 };
/////////////////////////////////////////////namayesh darkhastha ba city
$scope.shdarkhc = function (city) {
	 $scope.flagd=0;
	
var idud=document.getElementById('userid').value;
var typer=document.getElementById('usertype').value;
$http.get("http://admin.borna-grp.ir/api.php?vosta="+idud+"&type="+typer+"&idos="+city).then(function(response) {
$scope.darkhast = response.data; 

}).catch(function(response) {
	$scope.darkhast = response.data;
//alert(response.data);
});
 
 };
 /////////////////all city darkhastha
 
$http.get("http://admin.borna-grp.ir/api.php?lostan").then(function(response) {
$scope.allcda = response.data.lostan;
$( "#listv,#listv2,#listv3,#listv4,#listv5,#listv6,#listv7,#listv8" ).listview( "refresh" );
});
 
 
 /////////////////////////////////////////////namayesh user
 
$scope.shusers = function () {
$http.get("http://admin.borna-grp.ir/api.php?users").then(function(response) {
$scope.users = response.data.users;
});  
 };
/////////////////////////////////////////// show info darkhastha
$scope.shinfo = function (idss) {
	//alert(idss);
$http.get("http://admin.borna-grp.ir/api.php?infos="+idss).then(function(response) {
$scope.infos = response.data;
});  
 /////////////////////////////////////////// show chat info
$http.get("http://admin.borna-grp.ir/api.php?chat="+idss).then(function(response) {
$scope.chat = response.data.chat;
});  
 };
  
////////////////////////////////////end controler
});	

App.service('todoServicez', function($q) 
{
	this.UserImg=function(imageURI,file_name,counts){
	//alert(imageURI+file_name+counts);
	document.getElementById('bloader').style.display='block';
   document.getElementById('bloader2').style.display='block';
         	var deferred, result = [];
             deferred = $q.defer();
			var options = new FileUploadOptions();
			options.fileKey="filed";
			options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
			 options.mimeType = "application/octet-stream";
			// alert(imageURI.substr(imageURI.lastIndexOf('/')+1));
			var params = {};
			params.valuee = file_name;
			params.valuee2  = counts;
			options.params = params;
		    options.chunkedMode = false;
			var ftd = new FileTransfer();
			ftd.upload(imageURI, encodeURI('http://borna-grp.ir/sabt_kh.php'),
				function(r){
					 deferred.resolve(r.response);
				},
	 ftd.onprogress = function(progressEvent) {
    if (progressEvent.lengthComputable) {
        var perc=0;
			perc = Math.floor(progressEvent.loaded / progressEvent.total * 100);
			document.getElementById('bloader').innerHTML=perc+'%';
			document.getElementById('bloader2').innerHTML=perc+'%';
   if(perc==100){document.getElementById('bloader').style.display='none';
   document.getElementById('bloader2').style.display='none';}
    }
},
				function(error){
					deferred.reject(error);
                    alert("خطا در ارسال فایل: Code = " + error.code);
					//alert("upload error source " + error.source);
					//alert("upload error target " + error.target);
				}, options);

              return deferred.promise;
               },	
this.list_dl2 = function(count,list) 
    {//alert(idss+fave);
	// alert(count);
	};
    });
	
	