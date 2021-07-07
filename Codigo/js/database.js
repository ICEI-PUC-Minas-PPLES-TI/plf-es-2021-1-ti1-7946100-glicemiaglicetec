var db_usuarios_inicial = {
    "data": [{
            "id": 1,
            "nome": "Venancia Matias",
            "Tipo_Diabetes": "Tipo 3",
            "email": "veve@gmail.com",
            "data_nasciment": "17/04/1942",
            "senha": "Craqueneto1704"
        },
        {
            "id": 2,
            "nome": "Peter Parquer",
            "Tipo_Diabetes": "Tipo 1",
            "email": "miranha@gmail.com",
            "data_nasciment": "22/02/1998",
            "senha": "vaiteia22"
        },
        {
            "id": 3,
            "nome": "Tony Esterco",
            "Tipo_Diabetes": "Pré-diabético",
            "email": "tonyesterco@gmail.com",
            "data_nasciment": "22/08/02",
            "senha": "Iamtheironman"
        },
        {
            "id": 4,
            "nome": "Thor Sonofodin",
            "Tipo_Diabetes": "Tipo 2",
            "email": "melhorvingador@gmail.com",
            "data_nasciment": "04/04/2004",
            "senha": "Filhinhodepapai"
        },
        {
            "id": 5,
            "nome": "Estevão Rogério",
            "Tipo_Diabetes": "Tipo 4",
            "email": "picole@gmail.com",
            "data_nasciment": "13/05/1972",
            "senha": "picoleidoso"
        },
        {
            "id": 6,
            "nome": "Doutor Normal",
            "Tipo_Diabetes": "Tipo 5",
            "email": "normal@outlook.com",
            "data_nasciment": "14/07/1983",
            "senha": "magodasmagias1"

        },
    ]
}

var db = JSON.parse(localStorage.getItem('db_usuarios'));
if (!db) {
    db = db_usuarios_inicial;
};

function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertUsuario(usuario) {
    let novoId = db.data[db.data.length - 1].id + 1;
    let novoUsuario = {
        "id": novoId,
        "nome": usuario.nome,
        "Tipo_Diabetes": usuario.Tipo_Diabetes,
        "email": usuario.email,
        "data_nasciment": usuario.data_nasciment,
        "senha": usuario.senha,
    };

    db.data.push(novoUsuario);
    displayMessage("Cadastro inserido com sucesso");
    localStorage.setItem('db_usuario', JSON.stringify(db));
}

function updateUsuario(id, usuario) {
    let index = db.data.map(obj => obj.id).indexOf(id);
    db.data[index].nome = usuario.nome,
        db.data[index].email = usuario.email,
        db.data[index].Tipo_Diabetes = usuario.Tipo_Diabetes,
        db.data[index].data_nasciment = usuario.data_nasciment,
        db.data[index].senha = usuario.senha,

        displayMessage("Cadastro alterado com sucesso");

    localStorage.setItem('db_usuarios', JSON.stringify(db));
}

function deleteUsuario(id) {
    db.data = db.data.filter(function(element) { return element.id != id });

    displayMessage("Cadastro removido com sucesso");
    localStorage.setItem('db_usuarios', JSON.stringify(db));
}

function init() {
    $("#btnInsert").click(function() {
        if (!$('#form-usuario')[0].checkValidity()) {
            displayMessage("Preencha o cadastro com suas informações");
            return;
        }
        let campoNome = $("#inputNome").val();
        let campoTipo_Diabetes = $("#inputTipo_Diabetes").val();
        let campoEmail = $('#inputEmail').val();
        let camposenha = $("#inputsenha").val();
        let campodata_nasciment = $('#inputdata_nasciment').val();
        let usuario = {
            nome: campoNome,
            Tipo_Diabetes: campoTipo_Diabetes,
            email: campoEmail,
            senha: camposenha,
            data_nasciment: campodata_nasciment
        };

        insertUsuario(usuario);
        exibeUsuario();
        $("#form-usuario")[0].reset();
    });
    $("#btnUpdate").click(function() {
        let campoId = $("#inputId").val();
        if (campoId == "") {
            displayMessage("Selecione um usuario para ser alterado.");
            return;
        }
        let campoNome = $("#inputNome").val();
        let campoTipo_Diabetes = $("#inputTipo_Diabetes").val();
        let campoEmail = $('#inputEmail').val();
        let camposenha = $("#inputsenha").val();
        let campodata_nasciment = $('#inputdata_nasciment').val();
        let usuario = {
            nome: campoNome,
            Tipo_Diabetes: campoTipo_Diabetes,
            email: campoEmail,
            senha: camposenha,
            data_nasciment: campodata_nasciment
        };

        updateUsuario(parseInt(campoId), usuario);
        exibeUsuario();
        $("#form-usuario")[0].reset();
    });
    $("#btnDelete").click(function() {
        let campoId = $("#inputId").val();
        if (campoId == "") {
            displayMessage("Selecione um usuario a ser excluído.");
            return;
        }
        deleteUsuario(parseInt(campoId));
        exibeUsuario();
        $("#form-usuario")[0].reset();
    });
    $("#btnClear").click(function() {
        $("#form-usuario")[0].reset();
    });
    $('#msg').bind("DOMSubtreeModified", function() {
        window.setTimeout(function() {
            $(".alert").fadeTo(500, 0).slideUp(500, function() {
                $(this).remove();
            });
        }, 5000);
    });
    $("#grid-usuarios").on("click", "tr", function(e) {
        let linhaUsuario = this;
        colunas = linhaUsuario.querySelectorAll("td");

        $("#inputId").val(colunas[0].innerText);
        $("#inputNome").val(colunas[1].innerText);
        $("#inputTipo_Diabetes").val(colunas[2].innerText);
        $("#inputEmail").val(colunas[3].innerText);
        $("#inputsenha").val(colunas[4].innerText);
        $("#inputdata_nasciment").val(colunas[5].innerText);
    });
    exibeUsuarios();
}