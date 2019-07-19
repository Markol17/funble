// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require jquery3
//= require popper
//= require bootstrap-sprockets
//= require_tree .
function menuTrigger() {
	y = document.getElementsByClassName('side_bar');
	z = document.getElementsByClassName("overlay");
	x =	document.getElementsByClassName("menu_icon");
	//b1 = document.getElementsByClassName("bar1");
	//b2 = document.getElementsByClassName("bar3");

 	x[0].classList.toggle("change");
 	y[0].classList.toggle("translate");
 	z[0].classList.toggle("fade");
 	//b1[0].classList.toggle("change");
 	//b2[0].classList.toggle("change");
}
