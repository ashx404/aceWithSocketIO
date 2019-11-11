function changeTheme() {
    editor.setTheme("ace/theme/theme-twilight");
  }
  function changeCTheme() {
    editor.setTheme("ace/theme/clouds");
  }
  var editor = ace.edit("editor");
  editor.setTheme("ace/theme/theme-twilight");
  editor.session.setMode("ace/mode/javascript");

  const socket = io("http://localhost:8888");
  console.log(socket);

  document.querySelector("#editor").addEventListener("keypress", e => {
    //e.preventDefault();
    console.log(editor.getValue());
    var code = editor.getValue();
    socket.emit("updSv", { code: code });
  });
  document.querySelector("#editor").addEventListener("paste", e => {
    e.preventDefault();
    var code = editor.getValue();
    socket.emit("updSv", { code });
  });

  socket.on("updCl", data => {
    editor.setValue(data.abc + " ");
  });