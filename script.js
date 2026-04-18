//Adds default option to selects.
document.getElementById("day").innerHTML = '<option value="" disabled selected>Dia</option>';
document.getElementById("month").innerHTML = '<option value="" disabled selected>Mês</option>';
document.getElementById("year").innerHTML = '<option value="" disabled selected>Ano</option>';

//Populate the dropdowns
for (let i = 1; i <= 31; i++) {
    document.getElementById("day").innerHTML += `<option value="${i}">${i}</option>`;
};

const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

document.getElementById("month").innerHTML = "";

months.forEach((m, i) => {
    let num_month = (i + 1).toString().padStart(2, '0');
    document.getElementById("month").innerHTML += `<option value="${num_month}">${m}</option>`;
});

let currentYear = new Date().getFullYear();
for (let i = 1940; i <= currentYear; i++) {
    document.getElementById("year").innerHTML += `<option value="${i}">${i}</option>`;
}

//Form validation
document.getElementById("signup-form").addEventListener("submit", function(event) {

    //Retrieves the selected values.
    let day = parseInt(document.getElementById("day").value);
    let month = parseInt(document.getElementById("month").value);
    let year = parseInt(document.getElementById("year").value);

    //Checks if the date is valid.
    let date = new Date(year, month - 1, day);
    if(date.getDate() !== day || date.getMonth() !==  month - 1 || date.getFullYear() !== year) {
        event.preventDefault();
        alert("Data inválida! Verifique o dia, mês e ano.");
        return;
    }

    //Calculate age
    let today = new Date();
    let age = today.getFullYear() - year;
    let monthDiff = today.getMonth() - (month - 1);

    if(monthDiff < 0 || monthDiff === 0 && today.getDate() < day) {
        age--;
    }
    
    //Valid minimum age
    if (age < 13) {
        event.preventDefault();
        alert("Você precisa ter pelo menos 13 anos para se cadastrar.");
        return;
    }

    //Checks if any genre has been selected
    let genderSelected = document.querySelector("input[name='gender']:checked");

    if (!genderSelected) {
        event.preventDefault();
        alert("É necessário selecionar uma opção.");
        return;
    }

    //Validate password (minimum 6 characters)
    let password = document.getElementById("pwd").value;
    if(password.length < 9) {
        event.preventDefault();
        alert("A senha deve ter 9 caracteres no mínimo.");
        return;
    }
} )
