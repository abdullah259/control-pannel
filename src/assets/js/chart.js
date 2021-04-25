import "../../../node_modules/chart.js/dist/chart.min.js";

(function () {
    var ctx = document.getElementById('example-chart').getContext('2d');
    var chart = new Chart(ctx, {    
        type: 'line',

        datasets: {
            labels: ['January','February','March','April','May','June',],
            datasets: [{
                label: 'My First dataset',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: [0, 10, 5, 2, 20, 30, 45],
            }]
        },

        options: {}
    });
})();
