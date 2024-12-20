var size = 0;
var placement = 'point';
function categories_ClassesdeSuscetibilidadeAmbiental_9(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Massa d\'água':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(37,50,228,0.507)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Área Urbana':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(248,0,178,0.507)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Muito Baixa':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(56,168,0,0.507)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Baixa':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(152,230,0,0.507)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Média':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,170,0,0.507)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Alta':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,0,0,0.507)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Muito Alta':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(115,0,0,0.507)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_ClassesdeSuscetibilidadeAmbiental_9 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; var value = feature.get("Sus_Amb");
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
    
    var style = categories_ClassesdeSuscetibilidadeAmbiental_9(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
