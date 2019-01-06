// JavaScript Document
var App = angular.module('App', ['ngSanitize'] );

App.controller('CenterCTRL', function ($scope,$http,todoServicez,$sce) {
//////////////////////////////////////open links
$scope.wopen = function(links) {
 window.open(links, '_system', '');
};


////////////////////////////////////end controler
});	

App.service('todoServicez', function($q) 
{
	
this.list_dl2 = function(count,list) 
    {//alert(idss+fave);
	// alert(count);
	};
    });
	
	