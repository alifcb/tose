var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
			var pictureSource;   // picture source
    var destinationType; // sets the format of returned value
		pictureSource=navigator.camera.PictureSourceType;
       destinationType=navigator.camera.DestinationType;
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
	 
        //var parentElement = document.getElementById(id);
        console.log('Received Event: ' + id);
    }
};

document.addEventListener('deviceready', onDeviceBase, false);
document.addEventListener("offline", onOffline, false);
document.addEventListener("online", onOnline, false);
function onOffline() {
	 // alert('offline');
document.getElementById('online').value=0;
}	
function onOnline() { // alert('onOnline');
document.getElementById('online').value=1;
}	
////////////////////////////////////
function onDeviceBase() {
var db = window.openDatabase("Database", "1.0", "Cordova Ghesbandl", 200000);
db.transaction(table, errorCB, successCB);
}
// end onDeviceBase
function table(tx){    
 //tx.executeSql('DROP TABLE IF EXISTS downloads');
 // tx.executeSql('DROP TABLE IF EXISTS ghese');
tx.executeSql('CREATE TABLE IF NOT EXISTS settings(id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, title text,valuem text)');
tx.executeSql('CREATE TABLE IF NOT EXISTS downloads(id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, id_file INTEGER,links text,pic text,type text,flag INTEGER)');
tx.executeSql('CREATE TABLE IF NOT EXISTS ghese(id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, idb INTEGER, id_cat INTEGER, name text, pic text, fav INTEGER)');

//alert('dd');
}
///////////////////////////////////////error db
function errorCB(err) {
	console.log("Error processing SQLm: "+err.message);
} 
function successCB() {
//var db = window.openDatabase("Database", "1.0", "Cordova borna", 200000);
//db.transaction(flag_one, errorSE);
//alert('iu');

}
function exitFromApp()
{
 navigator.app.exitApp();
}
 
document.addEventListener("backbutton", function(e){
	//alert($.mobile.activePage.attr('id'));
	//var myVideo = document.getElementById("videon"); 
	// myVideo.stop();

	if ($(".ui-panel-open")[0]){ 
		var els=document.querySelectorAll('.ui-panel-dismiss');
//alert(els.length); 
    for (var b = 0; b < els.length; b++) {
//    els[b].classList.remove('ui-panel-dismiss-open');
//	    els[b].classList.remove('ui-panel-dismiss-position-left');
//
//    els[b].classList.remove(' ui-panel-dismiss-display-overlay');

	els[b].style.display='none';
  }
	for (var i = 1; i < 6; i++) {
   document.getElementById('leftpanel'+i).classList.remove("ui-panel-open");
   document.getElementById('leftpanel'+i).classList.add("ui-panel-close");
	}
  
 

} else {
       if($.mobile.activePage.is('#login, #one')){
		       
           e.preventDefault();
           navigator.app.exitApp();
       }
       else if($.mobile.activePage.is('#fullslide')){
    document.getElementById("song").pause();
	navigator.app.backHistory();
	   }else {
	
		 e.preventDefault();
          navigator.app.backHistory();
       }     
}

    }, false);
/////////////////////////////////////////////////////////////////////////////////////
function onPhotoURISuccessd(imageURI) {
	   var i, path, len;
    for (i = 0, len = imageURI.length; i < len; i += 1) {
        path = imageURI[i].fullPath;
		 document.getElementById('largeImage2').src=path;
    }
  var largeImage = document.getElementById('largeImage2');
  largeImage.style.display = 'inline';
  sPicData  = imageURI; 
}
//
function getPhotod(source) {
     navigator.device.capture.captureImage(onPhotoURISuccessd, picOnFailure, { 
            quality: 50,
			limit:1,
            destinationType: Camera.DestinationType.FILE_URI,
            sourceType: Camera.PictureSourceType.SAVEDPHOTOALBUM,
            correctOrientation: true
        });
    }

function onPhotoURISuccessi(imageURI) {
  var largeImage = document.getElementById('largeImage3');
  largeImage.style.display = 'inline';
  largeImage.src = imageURI;
}
//
function getPhotos() {
	fileChooser.open(function(imageURI) {
  var largeImage = document.getElementById('largeImage3');
  largeImage.style.display = 'inline';
  largeImage.src = imageURI;
});
 
   
    }
	
function picOnFailure(message){
	alert('Failed because: ' + message);
}

function sendak() {
 var shosos = document.getElementById('shosos').innerHTML;
 $("#shall").append(shosos);
	 
}

 