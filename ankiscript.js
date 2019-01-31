
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

if (document.getElementById("colorTehKanji")) {
  var text = document.getElementById("colorTehKanji").innerHTML;
  document.getElementById("colorTehKanji").innerHTML = formatString("colorTehKanji", text);
}
