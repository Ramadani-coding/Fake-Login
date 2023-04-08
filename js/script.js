let usernameInput = document.getElementById("usernameInput");
      let passInput = document.getElementById("passInput");

      function onLogin() {
        if (usernameInput.value.length == 0 && passInput.value.length == 0) {
          alert("Username & Password tidak boleh kosong");
          return false;
        }
        if (usernameInput.value.length == 0) {
          alert("Username tidak boleh kosong!!");
          return false;
        }
        if (passInput.value.length == 0) {
          alert("Password tidak boleh kosong!!!");
          return false;
        }

        if (usernameInput.value.length < 4 && passInput.value.length < 8) {
          alert("Minimum user 4 karakter dan password 8 karakter");
          return false;
        }
        if (usernameInput.value.length < 4) {
          alert("Username kurang dari 4 karakter");
          return false;
        }
        if (passInput.value.length < 8) {
          alert("Password kurang dari 8 karakter");
          return false;
        }

        if (usernameInput.value == localStorage.getItem("username", usernameInput.value) && passInput.value == localStorage.getItem("password", passInput.value)) {
          window.location.href = "user.html";
          return false;
        }

        if (usernameInput.value == "admin" && passInput.value == "admin123") {
          window.location.href = "praktikum.html";
          localStorage.setItem("role", "admin");
          return false;
        }
        if (usernameInput.value == "super" && passInput.value == "super123") {
          window.location.href = "user-super.html";
          localStorage.setItem("role", "user super");
          return false;
        } else {
          alert("Username atau Password salah!");
        }
      }