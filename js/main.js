var spec = "js/choropleth_map.vl.json";
vegaEmbed('#choropleth_map', spec, {"actions": false}).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var spec2 = "js/line_chart.vl.json";
vegaEmbed('#line_chart', spec2, {"actions": false}).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var spec3 = "js/bar_chart.vl.json";
vegaEmbed('#bar_chart', spec3, {"actions": false}).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var spec4 = "js/donut_chart.vl.json";
vegaEmbed('#donut_chart', spec4, {"actions": false}).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);


var spec5 = "js/scatter_plot.vl.json";
vegaEmbed('#scatter_plot', spec5, {"actions": false}).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

// const div = document.querySelector('.treemap')
// fetch("C:/Users/FooJacky/Documents/2022 Sem 2/FIT3179/FIT3179_Assignment2/html/treemap.html")
// .then(res => res.text())
// .then(data => {
//     div.innerHTML = data
//     const parser = new DOMParser()
//     const doc = parser.parseFromString(data, 'text/html')
//     eval(doc.querySelector('script').textContent)
// })