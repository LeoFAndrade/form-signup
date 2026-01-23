for (let i = 1; i <= 31; i++) {
    document.getElementById("day").innerHTML += `<option value="${i}">${i}</option>`;
};

const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

months.forEach((m, i) => {
    document.getElementById("month").innerHTML += `<option value="${m}">${m}</option>`;
});

for (let i = 1905; i <= 2026; i++) {
    document.getElementById("year").innerHTML += `<option value="${i}">${i}</option>`;
}