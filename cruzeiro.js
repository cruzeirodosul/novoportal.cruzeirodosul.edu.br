var url_string = window.location.href; //window.location.href
var url = new URL(url_string);
var cID = url.searchParams.get("cID");

if(cID == "90B2164A0BS1"){
    document.getElementById("codValidacao").value = cID;
    document.getElementById("nome").value = "SILVANA MARQUES DA SILVA";
    let curso = "MBA em Relações Internacionais";
    document.getElementById("curso").value = curso.toUpperCase();
    document.getElementById("rgm").value = "02631490-1";
    document.getElementById("cpf").value = "163.291.358-51";
}

if(cID == "23PF560R12U6"){
    document.getElementById("codValidacao").value = cID;
    document.getElementById("nome").value = "ANA";
    let curso = "Superior Bacharelado em Administração";
    document.getElementById("curso").value = curso.toUpperCase();
    document.getElementById("rgm").value = "03919463-1";
    document.getElementById("cpf").value = "163.291.358-51";
}

if(cID == "60DN33A6P2O7"){
    document.getElementById("codValidacao").value = cID;
    document.getElementById("nome").value = "ALEX";
    let curso = "Superior de tecnologia em gestão comercial";
    document.getElementById("curso").value = curso.toUpperCase();
    document.getElementById("rgm").value = "02631490-1";
    document.getElementById("cpf").value = "163.291.358-51";
}


if(cID == "42U1015I4A3O"){
    document.getElementById("codValidacao").value = cID;
    document.getElementById("nome").value = "MATHEUS FELIPE RIBEIRO";
    let curso = "SUPERIOR DE TECNOLOGIA EM ANÁLISE E DESENVOLVIMENTO DE SISTEMAS";
    document.getElementById("curso").value = curso.toUpperCase();
    document.getElementById("rgm").value = "02129042-3";
    document.getElementById("cpf").value = "469.970.798-06";
}



if(cID == ""){
    document.getElementById("codValidacao").value = "ALUNO NÃO ENCONTRADO NO SISTEMA";
    document.getElementById("nome").value = "NÃO ENCONTRADO";
    document.getElementById("curso").value = "NÃO ENCONTRADO";
    document.getElementById("rgm").value = "NÃO ENCONTRADO";
    document.getElementById("cpf").value = "NÃO ENCONTRADO";
    document.getElementById("dataValid").value = "NÃO ENCONTRADO";

}
console.log(cID);