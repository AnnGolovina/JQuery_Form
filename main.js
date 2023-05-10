$(document).ready(function () {
  let users = [];

  $("#button").on("click", function () {
    const name = $("#inpt-name").val();
    const lastName = $("#inpt-lastname").val();
    const email = $("#inpt-email").val();
    const password = $("#inpt-password").val();

    const user = {
      name: name,
      lastName: lastName,
      email: email,
      password: password,
    };

    users.push(user);

    $("#inpt-name,#inpt-lastname, #inpt-email, #inpt-password ").val("");

    (name.length < 3 || lastName.length < 3) &&
      alert("Enter more data about Name or Lastname");

    (email.length <= 6 || !email.includes(".") || !email.includes("@")) &&
      alert("Please enter a valid email address whith '@' and '.'");

    password.length <= 10 && alert("The password is too short");

    const arr = password.split("");

    let ok = false;
    for (let i = 0; i < arr.length; i++) {
      if (Number(arr[i])) {
        ok = true;
        break;
      }
    }
    !ok && alert("Password must contain at least one number");

    //-----------------------------------------
    //const num = /[0-9]/g;
    //!password.match(num) && alert("Password must contain at least one number");

    return console.log(users);
  });

  $("#button").fadeTo(0, 0.7);
  $("#inpt-password").on("keyup change", function () {
    $("#button").fadeTo(0, 1);
  });
});
