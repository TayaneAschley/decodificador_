function copyText(IdElement) {
  var textArea = document.getElementById(IdElement).value;
  navigator.clipboard.writeText(textArea);
}
