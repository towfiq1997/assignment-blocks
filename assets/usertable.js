
document.addEventListener("DOMContentLoaded", () => {
    const search = document.getElementById("search");
    const table = document.getElementById("usertable");
    const rows = table.getElementsByTagName("tr");

    search.addEventListener('input', () => {
        const searctText = search.value.toLocaleLowerCase();
        [...rows].forEach((row, index) => {
            const name = rows[index].getElementsByTagName('th')[0];
            const nameText = name.textContent || name.innerText;
            if (nameText.toLowerCase().indexOf(searctText) > -1) {
                rows[index].style.display = '';
            } else {
                rows[index].style.display = 'none';
            }

        })
    })
})

