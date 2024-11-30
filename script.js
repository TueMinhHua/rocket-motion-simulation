document.addEventListener("DOMContentLoaded", () => {
    const simulateBtn = document.getElementById("simulateBtn");
    const finalVelocity = document.getElementById("finalVelocity");
    const finalPosition = document.getElementById("finalPosition");
    const fuelDepletionTime = document.getElementById("fuelDepletionTime");
    const resultsGraph = document.getElementById("resultsGraph");

    const populateTable = (time, mass, velocity, position) => {
        const tableBody = document.querySelector("#resultsTable tbody");
        tableBody.innerHTML = "";

        time.forEach((t, index) => {
            const row = `
                <tr>
                    <td>${t.toFixed(1)}</td>
                    <td>${mass[index].toFixed(2)}</td>
                    <td>${velocity[index].toFixed(2)}</td>
                    <td>${position[index].toFixed(2)}</td>
                </tr>
            `;
            tableBody.innerHTML += row;
        });
    };

    const simulateRocketMotion = () => {
        const dm_dt = parseFloat(document.getElementById("dm_dt").value);
        const m0 = parseFloat(document.getElementById("m0").value);
        const x0 = parseFloat(document.getElementById("x0").value);
        const v_gas = parseFloat(document.getElementById("v_gas").value);
        const t_end = parseFloat(document.getElementById("t_end").value);
        const g =
