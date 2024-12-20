var size = 0;
var placement = 'point';
function categories_InfraestruturaLineardeTerceirosnaFaixadeDomnio_27(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Adutora de Água':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(214,88,157,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Adutora de Água e Emissário de Esgoto':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(204,178,74,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Emissário de Esgoto':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(134,209,48,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Ferrovia':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(133,183,226,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Gás Natural':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(25,206,49,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Linha de Transmissão':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(175,35,210,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Rede de Energia Elétrica':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(60,200,172,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Rede de Telecomunicações':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(222,132,120,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_InfraestruturaLineardeTerceirosnaFaixadeDomnio_27 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; var value = feature.get("Infra");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_InfraestruturaLineardeTerceirosnaFaixadeDomnio_27(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
