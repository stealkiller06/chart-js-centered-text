import { Chart, registerables } from 'chart.js';

// Registra los componentes de Chart.js
Chart.register(...registerables);

// Obtén el contexto del canvas
const ctx = document.getElementById('myChart').getContext('2d');

// Define los datos del gráfico
const data = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
        {
            data: [50, 25, 25],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        },
    ],
};

// Define las opciones del gráfico
const options = {
    plugins: {
        legend: {
            display: true,
            position: 'top',
        },
        tooltip: {
            enabled: true,
        },
        customText: {
            text: '75%', // Texto que aparecerá en el centro
        },
    },
};

// Plugin personalizado para agregar texto en el centro
const centerTextPlugin = {
    id: 'customText',
    beforeDraw(chart, args, options) {
        const { width } = chart;
        const { height } = chart;
        const { ctx } = chart;
        ctx.save();
        ctx.font = 'bold 20px Arial';
        ctx.fillStyle = 'black';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(options.text, width / 2, height / 2);
    },
};

// Crea el gráfico de dona
new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: options,
    plugins: [centerTextPlugin],
});