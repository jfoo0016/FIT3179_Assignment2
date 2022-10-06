// var spec = "js/choropleth_map.vl.json";
// vegaEmbed('#choropleth_map', spec).then(function(result) {
// // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
// }).catch(console.error);

// var spec2 = "js/line_chart.vl.json";
// vegaEmbed('#line_chart', spec2).then(function(result) {
// // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
// }).catch(console.error);

var spec3 = "js/bar_chart.vl.json";
vegaEmbed('#bar_chart', spec3).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var spec4 = "js/combined.vl.json";
vegaEmbed('#combine', spec4).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);