// Registrasi
let formDaftar = document.getElementById("form-daftar");
let submitDaftar = document.getElementById("submit-daftar");
let hasilregister = [];

submitDaftar.addEventListener("click", (e) => {
  e.preventDefault();

  const email = document.getElementById("email-daftar").value;
  const password = document.getElementById("password-daftar").value;

  if (email === "" || email === undefined) {
    email_status = false;
  } else {
    email_status = true;
  }

  if (password === "" || password === undefined) {
    password_status = false;
  } else {
    password_status = true;
  }

  if (email_status && password_status) {
    simpanDataDaftar();
    Swal.fire({
      title: "Sweet!",
      text: "Selamat anda berhasil Registrasi",
      icon: "success",
      showConfirmButton: false,
      timer: 1500,
    });
    formDaftar.reset();
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops!",
      text: "Data tidak boleh kosong atau data yang anda masukkan salah",
      showConfirmButton: false,
      timer: 1500,
    });
  }
  function simpanDataDaftar() {
    // HasilLogin.push(form);
    let HasilDaftar = {
      mail: email,
      Password: password,
    };
    hasilregister.push(HasilDaftar);
    let Daftar = JSON.stringify(hasilregister);
    localStorage.setItem("registerApoteq", Daftar);

    console.log(HasilDaftar);
  }
});

// Login
let formMasuk = document.getElementById("form-masuk").value;
let submitMasuk = document.getElementById("submit-masuk");

let hasilLogin = [];
let login = false;

submitMasuk.addEventListener("click", function (event) {
  event.preventDefault();

  const emailMasuk = document.getElementById("email-masuk").value;
  const passwordMasuk = document.getElementById("password-masuk").value;

  if (emailMasuk === "") {
    email_status = false;
  } else {
    email_status = true;
  }

  if (passwordMasuk === "") {
    password_status = false;
  } else {
    password_status = true;
  }

  if (email_status && password_status) {
    simpanDataMasuk();
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops!",
      text: "Data tidak boleh kosong atau data yang anda masukkan salah",
      showConfirmButton: false,
      timer: 1500,
    });
  }
  function simpanDataMasuk() {
    let HasilLogin = {
      mail: emailMasuk,
      Password: passwordMasuk,
    };

    let registerUser = JSON.parse(localStorage.getItem("registerApoteq"));
    if (registerUser) {
      let found = registerUser.find((user) => {
        return HasilLogin.mail === user.mail && HasilLogin.Password === user.Password;
      });
      if (found) {
        Swal.fire({
          title: "Sweet!",
          text: "Selamat anda berhasil Masuk",
          icon: "success",
          confirmButtonColor: "#3491b2",
          confirmButtonText: '<a href="/index.html">Great! </a>',
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops!",
          text: "Akun tidak ditemukan",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  }
});
