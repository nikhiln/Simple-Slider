Simple Text Slider
=============
- only one function call requires for text slider
- it's very simple, no advance feature like anything sliding, made only for text


Example
-------

	<div class="div-slider">
		<h1>Google’s mission is to organize the world’s information and make it universally accessible and useful.</h1>
		<h1>Facebook's mission is to make the world more open and connected.</h1>
		<h1>Yahoo! is focused on making the world's daily habits inspiring and entertaining</h1>
		<h1>Linked In's mission is to connect the world's professionals to make them more productive and successful.</h1> 
	</div>
	
    <script>
		$( document ).ready(function() {
			/* initilizing and starting text slider */
			$(".div-slider").simpleslider({"duration":400, "slide-transition": 2000});
		});
    </script>


You can set slide transition duration and animation duration to show/hide text slide
-------
	Pass animation duration as 'duration' in milliseconds.
    <script>
		e.g.
		$(".div-slider").simpleslider({"duration":400});
    </script>
	
	Pass slide transition duration as 'slide-transition' in milliseconds.
    <script>
		e.g.
		$(".div-slider").simpleslider({"slide-transition":2000});
    </script>
	
Supported browser
-------

Tested on Chrome, Safari, Firefox, IE 9.0.

MIT License
-------

Copyright (C) 2013 Nikhil Navadiya

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.