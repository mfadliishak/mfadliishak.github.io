
function formatString(type, string) {

	var text = string;

	// class 'colored' should be in styling card template
	var coloredContainer = ["<span class=colored>", "</span>"];

	// regex
	var reg = /\${2}(.*?)\${2}/g; // captures anything between $$kanji$$ at $1

	// replace the kanji with colorize css
	text = text.replace(reg, coloredContainer[0] + '$1' + coloredContainer[1]);

	return text;
}

// get all the class objects 
var obClasses = document.getElementsByClassName("colorThis");

// colorized all if exist
if (obClasses) {
	var i;
	for (i = 0; i < obClasses.length; i++) {
		var text = obClasses[i].innerHTML;
  		obClasses[i].innerHTML = formatString("colorThis", text);
	}
}
