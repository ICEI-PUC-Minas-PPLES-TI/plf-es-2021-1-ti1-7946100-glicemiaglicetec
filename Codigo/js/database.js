$(function() {
    var operação = "A";
    var indice_selecionado = -1;
    var tbUsuarios = localStorage.getItem("tbUsuarios");
    tbUsuarios = JSON.parse(tbUsuarios);
    if (tbUsuarios = null)
        tbUsuarios = [];
});

function Add() {
    var user = JSON.stringify({
        email: $("#txtemail").val(),
        usuario: $("#txtname").val(),
        senha: $("#txtpassword").val(),
        tipo: $("#txttipo").val(),
        frequencia: $("#txtFreq").val(),
        idade: $("#txtId").val()
    });
    tbUsuarios.push(user);
    localStorage.setItem("tbUsuarios", JSON.stringify(tbUsuarios));
    alert("Registro adicionado.");
    operação = "A";
    return true;
}

function editUser() {
    tbUsuarios[indice_selecionado] = JSON.stringify({
        usuario: $("txtname").val(),
        email: $("#txtemail").val(),
        usuario: $("#txtname").val(),
        senha: $("#txtpassword").val(),
        tipo: $("#txttipo").val(),
        frequencia: $("#txtFreq").val(),
    });
    localStorage.setItem("tbUsuarios", JSON.stringify(tbUsuarios));
    alert("Informações editadas.")
    operacao = "A";
    return true;
}

function login(email, senha) {
    if (typeof email == 'string' && typeof password == 'string' && email.length > 0 && senha.length > 0) {
        var loggeduser;
        var user = users[index];
        if (email === user.email && senha === user.senha)
            loggeduser = user;
    }
    if (typeof loggeduser != 'undefined') {
        loggedusers[loggeduser.id] = true;
        updatelist();
        return loggeduser;
    }
}

return false;

function logout(usuario) {
    if (loggedusers[usuario]) {
        var temporary = [];
        for (var id in loggedusers)
            if (id != usuario)
                temporary[id] = true;
        loggedusers = temporary;
        updatelist();
        return true;
    }
    return false;
}

function show() {

    let data = JSON.parse(xhr.responseText);
    let textoHTML = '';
    if ($("#name").val() != 0) {
        textoHTML += '<div class="user"><p class = "user-name" >Olá, ${usuario} < /p> <i class = "fas fa-user-circle" > < /i> < /div > '
    } else {
        textoHTML += '<div class="user"> <p class = "user-name" > Olá, user< /p> <i class = "fas fa-user-circle" > < /i> < /div > '
    }
    document.getElementById('tela').innerHTML = textoHTML;
    let data = JSON.parse(xhr.responseText);
    let textoHTML = '';
    if ($("#name").val() != 0) {
        textoHTML += '<div class="user"><p class = "user-name" >Olá, ${usuario} < /p> <i class = "fas fa-user-circle" > < /i> < /div > '
    } else {
        textoHTML += '<div class="user"> <p class = "user-name" > Olá, user< /p> <i class = "fas fa-user-circle" > < /i> < /div > '
    }
    document.getElementById('tela').innerHTML = textoHTML;
}