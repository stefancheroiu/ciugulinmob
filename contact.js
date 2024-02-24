function sendMail() {
  var params = {
    nume: document.getElementById("nume").value,
    prenume: document.getElementById("prenume").value,
    email: document.getElementById("email").value,
    mesaj: document.getElementById("mesaj").value,
    telefon: document.getElementById("telefon").value,
  };

  const serviceID = "service_lh4h08k";
  const templateID = "template_qirg61f";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("nume").value = "";
      document.getElementById("prenume").value = "";
      document.getElementById("email").value = "";
      document.getElementById("mesaj").value = "";
      document.getElementById("telefon").value = "";
      console.log(res);
      alert("Mesajul a fost trimis cu succes !");
    })
    .catch((err) => console.log(err));
}
