var resultDiv = document.createElement("div");
resultDiv.id = "clickbait_result";
document.body.insertBefore (resultDiv, document.body.firstChild);

console.log("Here");

function getHighlightedText() {
	var text;
	if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text;
}

document.onmouseup = function() {
    var highlightedText = getHighlightedText();
    document.getElementById("clickbait_result").value = highlightedText;
    chrome.runtime.sendMessage({
        clickbait_text: highlightedText
    });
};