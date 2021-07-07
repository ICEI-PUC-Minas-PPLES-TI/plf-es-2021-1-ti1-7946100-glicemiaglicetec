var db_diabeticos_inicial = {
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
var db = JSON.parse(localStorage.getItem('db_diabeticos'));
if (!db) {
    db = db_diabeticos_inicial
};

function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertDiabetico(diabetico) {
    let novoId = db.data[db.data.length - 1].id + 1;
    let novoDiabetico = {
        "id": novoId,
        "nome": diabetico.nome,
        "Tipo_Diabetes": diabetico.Tipo_Diabetes,
        "email": diabetico.email,
        "data_nasciment": diabetico.data_nasciment,
        "senha": diabetico.senha,
    };

    db.data.push(novoDiabetico);
    displayMessage("Cadastro inserido com sucesso");
    localStorage.setItem('db_contato', JSON.stringify(db));
}

function updateDiabetico(id, diabetico) {
    let index = db.data.map(obj => obj.id).indexOf(id);
    db.data[index].nome = diabetico.nome,
        db.data[index].email = diabetico.email,
        db.data[index].Tipo_Diabetes = diabetico.Tipo_Diabetes,
        db.data[index].data_nasciment = diabetico.data_nasciment,
        db.data[index].senha = diabetico.senha,

        displayMessage("Cadastro alterado com sucesso");
    localStorage.setItem('db_contato', JSON.stringify(db));
}

function deleteDiabetico(id) {
    db.data = db.data.filter(function(element) { return element.id != id });

    displayMessage("Cadastro removido com sucesso");
    localStorage.setItem('db_diabetico', JSON.stringify(db));
}