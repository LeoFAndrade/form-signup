for (let i = 1; i <= 31; i++) {
    document.getElementById("day").innerHTML += `<option value="${i}">${i}</option>`;
};

const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

document.getElementById("month").innerHTML = "";

months.forEach((m, i) => {
    let num_month = (i + 1).toString().padStart(2, '0');
    document.getElementById("month").innerHTML += `<option value="${num_month}">${m}</option>`;
});

for (let i = 1905; i <= 2026; i++) {
    document.getElementById("year").innerHTML += `<option value="${i}">${i}</option>`;
}