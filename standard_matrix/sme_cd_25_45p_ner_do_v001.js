/*
 * Copyright (C) 2012 Joseph Simpson all rights reserved
 *
 *
*/
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

// Basic Functions.....................................................

function drawChart(context, line_color, block_color, one_color, font_color, font, step, size, data) {
   context.strokeStyle = line_color;
   context.lineWidth = 1;
   context.canvas.width = step * size;	
   context.canvas.height = step * size;	
   for (var i = 1; i <= context.canvas.width +1; i += step) {
      context.beginPath();
      context.moveTo(i, 0);
      context.lineTo(i, context.canvas.height);
      context.stroke();
      context.beginPath();
      context.moveTo(0, i);
      context.lineTo(context.canvas.width, i);
      context.stroke();
      context.rect(i+1, i+1, step-2 , step-2 );
   	  context.strokeStyle = line_color;
   	  context.lineWidth = '2';
   	  context.fillStyle = block_color;
   	  context.fill(); // fills orange color on diagonal  
   	} 
   	// add the yellow background for each one..
   	var object_name_counter = 1;	
   	for (var i = 1; i < context.canvas.width; i += step) {
   	  for (var x = 1; x <= size; x = x + 1) {
   	  	if(data[((object_name_counter - 1) * (size)) + (x - 1)] === '1'){
   	  		context.rect(((step) * (x - 1)) + 2, ((object_name_counter-1) * step) + 2, step-2, step-2);
   	  		context.strokeStyle = line_color;
   	  		context.lineWidth = '2';
   	  		context.fillStyle = one_color;
   	  		context.fill(); 
   	  	}
   	  }		 
   	  object_name_counter = object_name_counter + 1; 
   }
   // add the text to the matrix 
   var object_name_counter = 1;
   for (var i = 1; i < context.canvas.width; i += step) {
   	  context.rect(i, i, step , step );
   	  context.fillStyle = font_color;
   	  context.font = font;
   	  //code to fill complete matrix ....
   	  for (var x = 0; x < size; x = x + 1) {
   	  	context.fillText(data[((object_name_counter - 1) * (size)) + x], (x * (step)) + 10, ((object_name_counter-1) * step) + (0.75 * step));
   	  } 
   	  object_name_counter = object_name_counter + 1;     
   }
}

function selectSize(size) {
	if (size === 25) {
		size = 25;
		step = 35;
		line_color = 'black';
		block_color = 'orange';
		one_color = 'yellow';
		font_color = 'black';
		font = '25px tahoma';
		data = ['A','0','1','0','1','0','0','0','1','1','0','0','0','1','1','0','1','0','1','1','0','0','1','0','0'
,'0','B','0','1','0','0','1','0','0','0','0','0','1','1','0','0','0','1','1','0','1','0','0','0','1'
,'1','1','C','0','0','1','1','0','0','1','1','0','1','1','1','1','0','0','1','0','1','0','1','1','0'
,'0','0','0','D','1','1','1','1','0','0','1','0','1','0','1','1','0','1','1','0','1','0','0','1','1'
,'1','1','1','1','E','0','1','1','1','1','0','0','1','0','0','1','1','1','1','1','0','0','1','0','0'
,'1','0','0','0','1','F','0','0','1','0','1','1','0','0','1','0','0','0','0','1','1','0','0','1','0'
,'0','1','0','0','1','1','G','1','0','0','1','0','0','0','1','1','0','1','1','0','0','0','1','0','0'
,'0','0','0','1','0','0','0','H','1','1','1','1','1','1','0','1','0','1','1','0','0','0','0','0','1'
,'0','0','0','1','0','0','1','0','I','0','1','1','0','1','0','1','0','1','1','1','0','1','1','0','0'
,'0','0','1','0','0','1','1','0','1','J','1','0','1','0','0','0','1','0','1','0','0','1','0','1','0'
,'0','1','1','0','1','0','0','1','1','1','K','0','0','0','0','1','0','0','1','1','1','1','0','0','1'
,'0','1','1','0','0','0','0','0','0','1','1','L','0','0','1','1','0','1','0','1','1','0','1','0','1'
,'0','1','0','1','1','1','0','0','0','1','1','1','M','1','0','0','0','0','0','1','1','0','1','1','0'
,'0','1','1','0','1','0','0','0','0','1','0','1','0','N','1','1','0','1','0','1','0','1','0','1','0'
,'0','1','0','0','1','0','1','0','0','0','0','0','1','0','O','0','0','1','1','0','0','0','0','1','0'
,'0','1','0','0','0','1','0','0','1','0','0','0','1','0','1','P','1','0','0','0','0','0','0','0','0'
,'0','1','0','1','0','1','1','0','1','1','1','1','0','1','0','1','Q','0','0','0','0','0','0','1','0'
,'1','0','1','0','1','0','0','0','1','0','0','1','0','1','1','1','0','R','0','1','0','0','0','0','0'
,'1','1','1','0','0','0','0','0','1','0','0','0','1','0','0','0','1','0','S','0','1','1','0','0','0'
,'0','1','0','0','0','1','1','0','0','0','0','1','1','0','1','0','0','1','0','T','1','0','0','1','1'
,'1','1','0','1','1','0','0','1','1','0','0','1','1','1','0','1','0','1','0','1','U','0','1','0','1'
,'1','1','0','0','1','0','0','0','0','1','1','1','1','1','1','1','0','0','1','1','0','V','1','0','1'
,'0','0','0','1','0','1','1','0','1','1','1','1','0','1','0','0','1','1','0','1','1','1','W','0','0'
,'1','1','0','1','0','1','0','1','0','0','0','1','0','0','0','0','1','1','1','0','1','1','0','X','0'
,'1','0','1','0','0','1','0','0','1','0','1','1','0','0','0','1','1','0','0','1','0','0','1','0','Y']


	}
	
	
	drawChart(context, line_color, block_color, one_color, font_color, font, step , size, data);
}

// Initialize Chart................................................


  selectSize(25);

