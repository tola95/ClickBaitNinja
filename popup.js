function injectScript(file, node) {
    var th = document.getElementsByTagName(node)[0];
    var s = document.createElement('script');
    s.setAttribute('type', 'text/javascript');
    s.setAttribute('src', file);
    th.appendChild(s);
}

function getHighlightedText() {
	var text;
	if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text;
}


//injectScript( chrome.extension.getURL('my_file.js'), 'body');

document.onmouseup = document.onkeyup = document.onselectionchange = function() {
  document.getElementById("clickbait_result").value = getHighlightedText();
};