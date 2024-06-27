const buttonDecrypt = document.querySelector("#button_decrypt");

buttonDecrypt.addEventListener("click", (e) => {
  e.preventDefault();
  let textInputDecrypt = document.querySelector("#text_input").value;
  Decrypt(textInputDecrypt);

  document.querySelector("#text_input").value = "";
});

function Decrypt(textForDecrypt) {
  let textOutput = document.querySelector("#text_output");
  var decrypt = textForDecrypt.replace(
    /enter|imes|ai|ober|ufat/g,
    function (match) {
      switch (match) {
        case "enter":
          return "e";
        case "imes":
          return "i";
        case "ai":
          return "a";
        case "ober":
          return "o";
        case "ufat":
          return "u";
      }
    }
  );
  return (textOutput.value = decrypt);
}
