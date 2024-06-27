var buttonEncrypt = document.querySelector("#button_encrypt");

buttonEncrypt.addEventListener("click", (e) => {
  e.preventDefault();
  let textInputEncrypt = document.querySelector("#text_input").value;
  console.log({ textInputEncrypt });
  Encrypt(textInputEncrypt);

  document.querySelector("#text_input").value = "";
});

function Encrypt(textForEncrypt) {
  let textOutput = document.querySelector("#text_output");
  var encrypt = textForEncrypt.replace(/i|e|a|o|u/g, function (match) {
    switch (match) {
      case "a":
        return "ai";
      case "e":
        return "enter";
      case "i":
        return "imes";
      case "o":
        return "ober";
      case "u":
        return "ufat";
    }
  });

  return (textOutput.value = encrypt);
}
