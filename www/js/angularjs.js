// JavaScript Document
var App = angular.module('App', ['ngSanitize'] );
App.controller('CenterCTRL', function ($scope,$http,todoServicez,$sce) {
//////////////////////////////////////open links
$scope.wopen = function(links) {
 window.open(links, '_system', '');
};

///////////////////////////////login
setTimeout(function(){ $scope.rlogin(0);}, 2000);
$scope.rlogin = function (sdv) {
$scope.sephoto=false;
$scope.enphoto=true;
 $http.get("http://admin.borna-grp.ir/api.php?uuid="+device.uuid).then(function(response) {
 $scope.logind = response.data.login;
 //alert(response.data);	
 if( $scope.logind[0].ids==0){
if(sdv==1){new $.nd2Toast({   message :"خطا در اطلاعات وارد شده",ttl : 4000});}	
  }else{
	 $.mobile.changePage( "#one", { transition: "slideup"} );
	 $scope.dall = $scope.logind[0].alls;
	 $scope.dnew = $scope.logind[0].news;
	 //alert($scope.dnew);
	 document.getElementById('userid').value=$scope.logind[0].ids;
	 document.getElementById('usertype').value=$scope.logind[0].type;
	  document.getElementById('username').value=$scope.logind[0].fname+' '+$scope.logind[0].lname;
	 }
});
 
 
};
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
            }
 var url='http://admin.borna-grp.ir/api.php';
$http.post(url, datas, config);
setTimeout(function(){ $scope.rlogin(1);}, 2000);
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
$scope.sephoto=true;
$scope.enphoto=false;
if($scope.khodr.addressb==undefined || $scope.khodr.onvan==undefined || $scope.khodr.tellb==undefined || $scope.khodr.tozihat==undefined){
new $.nd2Toast({   message :"لطفا تمام فیلدها را تکمیل نمایید.",ttl : 4000});
 return 0;}
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
/////////////////////////////////////////////namayesh darkhastha
setTimeout(function(){
var idud=document.getElementById('userid').value;
var typer=document.getElementById('usertype').value;
$http.get("http://admin.borna-grp.ir/api.php?vreq="+idud+"&type="+typer).then(function(response) {
$scope.darkhast = response.data.vreq;
});  
 }, 2500);
 
  
////////////////////////////////////end controler
});	

App.service('todoServicez', function($q) 
{
	this.UserImg=function(imageURI,file_name,counts){
	//alert(imageURI+file_name+counts);
         	var deferred, result = [];
             deferred = $q.defer();
			var options = new FileUploadOptions();
			options.fileKey="filed";
			options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
			options.mimeType = "image/jpeg";
			console.log(options.fileName);
			var params = {};
			params.valuee = file_name;
			params.valuee2  = counts;
			options.params = params;
		    options.chunkedMode = false;
			var ftd = new FileTransfer();
			ftd.upload(imageURI, encodeURI('http://www.borna-grp.ir/sabt_kh.php'),
				function(r){
				//console.log("Code = " + r.responseCode);
				// alert("Response = " + r.response);
				//console.log("Sent = " + r.bytesSent);
					 deferred.resolve(r.response);

				},
				function(error){
					//alert("An error has occurred: Code = " + error.code);
					// console.error("upload error source " + error.source);
					// console.error("upload error target " + error.target);
					deferred.reject(error);

				}, options);

              return deferred.promise;
               },	
this.list_dl2 = function(count,list) 
    {//alert(idss+fave);
	// alert(count);
	};
    });
	
	