var size = 0;
var placement = 'point';
function categories_UsoeOcupaodoSoloADA_6(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Agricultura':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(233,116,237,0.493)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Aquicultura':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(9,16,119,0.493)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Área Urbanizada':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(212,39,30,0.493)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Campo Alagado e Área Pantanosa':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(81,151,153,0.493)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Formação Florestal':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(31,141,73,0.493)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Mineração':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(156,0,39,0.493)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Mosaico de Usos':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,239,195,0.493)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Outras Áreas Não Vegetadas':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(219,77,79,0.493)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Pastagem':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(237,222,142,0.493)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Praia, Duna e Areal':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,160,122,0.493)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Rios, Lagos e Oceanos':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(37,50,228,0.493)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Silvicultura':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(122,89,0,0.493)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_UsoeOcupaodoSoloADA_6 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; var value = feature.get("Uso_classe");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_UsoeOcupaodoSoloADA_6(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
