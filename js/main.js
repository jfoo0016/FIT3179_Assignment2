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


var spec5 = "js/test.vl.json";
vegaEmbed('#test', spec5, {"actions": false}).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);