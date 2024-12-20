ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:31982").setExtent([694961.735357, 7520382.109421, 699009.438094, 7522561.852044]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Estados_1 = new ol.format.GeoJSON();
var features_Estados_1 = format_Estados_1.readFeatures(json_Estados_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_Estados_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Estados_1.addFeatures(features_Estados_1);
var lyr_Estados_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Estados_1, 
                style: style_Estados_1,
                popuplayertitle: 'Estados',
                interactive: true,
                title: '<img src="styles/legend/Estados_1.png" /> Estados'
            });
var format_MunicpiosnaAII_2 = new ol.format.GeoJSON();
var features_MunicpiosnaAII_2 = format_MunicpiosnaAII_2.readFeatures(json_MunicpiosnaAII_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_MunicpiosnaAII_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MunicpiosnaAII_2.addFeatures(features_MunicpiosnaAII_2);
var lyr_MunicpiosnaAII_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MunicpiosnaAII_2, 
                style: style_MunicpiosnaAII_2,
                popuplayertitle: 'Municípios na AII',
                interactive: true,
                title: '<img src="styles/legend/MunicpiosnaAII_2.png" /> Municípios na AII'
            });
var format_MunicpiosnaADA_3 = new ol.format.GeoJSON();
var features_MunicpiosnaADA_3 = format_MunicpiosnaADA_3.readFeatures(json_MunicpiosnaADA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_MunicpiosnaADA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MunicpiosnaADA_3.addFeatures(features_MunicpiosnaADA_3);
var lyr_MunicpiosnaADA_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MunicpiosnaADA_3, 
                style: style_MunicpiosnaADA_3,
                popuplayertitle: 'Municípios na ADA',
                interactive: true,
                title: '<img src="styles/legend/MunicpiosnaADA_3.png" /> Municípios na ADA'
            });
var format_readeInflunciaIndiretaAII_4 = new ol.format.GeoJSON();
var features_readeInflunciaIndiretaAII_4 = format_readeInflunciaIndiretaAII_4.readFeatures(json_readeInflunciaIndiretaAII_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_readeInflunciaIndiretaAII_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_readeInflunciaIndiretaAII_4.addFeatures(features_readeInflunciaIndiretaAII_4);
var lyr_readeInflunciaIndiretaAII_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_readeInflunciaIndiretaAII_4, 
                style: style_readeInflunciaIndiretaAII_4,
                popuplayertitle: 'Área de Influência Indireta - AII',
                interactive: true,
                title: '<img src="styles/legend/readeInflunciaIndiretaAII_4.png" /> Área de Influência Indireta - AII'
            });
var format_readeInflunciaDiretaAID_5 = new ol.format.GeoJSON();
var features_readeInflunciaDiretaAID_5 = format_readeInflunciaDiretaAID_5.readFeatures(json_readeInflunciaDiretaAID_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_readeInflunciaDiretaAID_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_readeInflunciaDiretaAID_5.addFeatures(features_readeInflunciaDiretaAID_5);
var lyr_readeInflunciaDiretaAID_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_readeInflunciaDiretaAID_5, 
                style: style_readeInflunciaDiretaAID_5,
                popuplayertitle: 'Área de Influência Direta - AID',
                interactive: true,
                title: '<img src="styles/legend/readeInflunciaDiretaAID_5.png" /> Área de Influência Direta - AID'
            });
var format_UsoeOcupaodoSoloADA_6 = new ol.format.GeoJSON();
var features_UsoeOcupaodoSoloADA_6 = format_UsoeOcupaodoSoloADA_6.readFeatures(json_UsoeOcupaodoSoloADA_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_UsoeOcupaodoSoloADA_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UsoeOcupaodoSoloADA_6.addFeatures(features_UsoeOcupaodoSoloADA_6);
var lyr_UsoeOcupaodoSoloADA_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UsoeOcupaodoSoloADA_6, 
                style: style_UsoeOcupaodoSoloADA_6,
                popuplayertitle: 'Uso e Ocupação do Solo - ADA',
                interactive: true,
    title: 'Uso e Ocupação do Solo - ADA<br />\
    <img src="styles/legend/UsoeOcupaodoSoloADA_6_0.png" /> Agricultura<br />\
    <img src="styles/legend/UsoeOcupaodoSoloADA_6_1.png" /> Aquicultura<br />\
    <img src="styles/legend/UsoeOcupaodoSoloADA_6_2.png" /> Área Urbanizada<br />\
    <img src="styles/legend/UsoeOcupaodoSoloADA_6_3.png" /> Campo Alagado e Área Pantanosa<br />\
    <img src="styles/legend/UsoeOcupaodoSoloADA_6_4.png" /> Formação Florestal<br />\
    <img src="styles/legend/UsoeOcupaodoSoloADA_6_5.png" /> Mineração<br />\
    <img src="styles/legend/UsoeOcupaodoSoloADA_6_6.png" /> Mosaico de Usos<br />\
    <img src="styles/legend/UsoeOcupaodoSoloADA_6_7.png" /> Outras Áreas Não Vegetadas<br />\
    <img src="styles/legend/UsoeOcupaodoSoloADA_6_8.png" /> Pastagem<br />\
    <img src="styles/legend/UsoeOcupaodoSoloADA_6_9.png" /> Praia, Duna e Areal<br />\
    <img src="styles/legend/UsoeOcupaodoSoloADA_6_10.png" /> Rios, Lagos e Oceanos<br />\
    <img src="styles/legend/UsoeOcupaodoSoloADA_6_11.png" /> Silvicultura<br />'
        });
var format_UsoeOcupaodoSoloAID_7 = new ol.format.GeoJSON();
var features_UsoeOcupaodoSoloAID_7 = format_UsoeOcupaodoSoloAID_7.readFeatures(json_UsoeOcupaodoSoloAID_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_UsoeOcupaodoSoloAID_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UsoeOcupaodoSoloAID_7.addFeatures(features_UsoeOcupaodoSoloAID_7);
var lyr_UsoeOcupaodoSoloAID_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UsoeOcupaodoSoloAID_7, 
                style: style_UsoeOcupaodoSoloAID_7,
                popuplayertitle: 'Uso e Ocupação do Solo - AID',
                interactive: true,
    title: 'Uso e Ocupação do Solo - AID<br />\
    <img src="styles/legend/UsoeOcupaodoSoloAID_7_0.png" /> Agricultura<br />\
    <img src="styles/legend/UsoeOcupaodoSoloAID_7_1.png" /> Aquicultura<br />\
    <img src="styles/legend/UsoeOcupaodoSoloAID_7_2.png" /> Área Urbanizada<br />\
    <img src="styles/legend/UsoeOcupaodoSoloAID_7_3.png" /> Campo Alagado e Área Pantanosa<br />\
    <img src="styles/legend/UsoeOcupaodoSoloAID_7_4.png" /> Formação Florestal<br />\
    <img src="styles/legend/UsoeOcupaodoSoloAID_7_5.png" /> Mineração<br />\
    <img src="styles/legend/UsoeOcupaodoSoloAID_7_6.png" /> Mosaico de Usos<br />\
    <img src="styles/legend/UsoeOcupaodoSoloAID_7_7.png" /> Outras Áreas Não Vegetadas<br />\
    <img src="styles/legend/UsoeOcupaodoSoloAID_7_8.png" /> Pastagem<br />\
    <img src="styles/legend/UsoeOcupaodoSoloAID_7_9.png" /> Praia, Duna e Areal<br />\
    <img src="styles/legend/UsoeOcupaodoSoloAID_7_10.png" /> Rios, Lagos e Oceanos<br />\
    <img src="styles/legend/UsoeOcupaodoSoloAID_7_11.png" /> Silvicultura<br />'
        });
var format_reasUrbanizadasMapbiomas_8 = new ol.format.GeoJSON();
var features_reasUrbanizadasMapbiomas_8 = format_reasUrbanizadasMapbiomas_8.readFeatures(json_reasUrbanizadasMapbiomas_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_reasUrbanizadasMapbiomas_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasUrbanizadasMapbiomas_8.addFeatures(features_reasUrbanizadasMapbiomas_8);
var lyr_reasUrbanizadasMapbiomas_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasUrbanizadasMapbiomas_8, 
                style: style_reasUrbanizadasMapbiomas_8,
                popuplayertitle: 'Áreas Urbanizadas - Mapbiomas',
                interactive: true,
                title: '<img src="styles/legend/reasUrbanizadasMapbiomas_8.png" /> Áreas Urbanizadas - Mapbiomas'
            });
var format_ClassesdeSuscetibilidadeAmbiental_9 = new ol.format.GeoJSON();
var features_ClassesdeSuscetibilidadeAmbiental_9 = format_ClassesdeSuscetibilidadeAmbiental_9.readFeatures(json_ClassesdeSuscetibilidadeAmbiental_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_ClassesdeSuscetibilidadeAmbiental_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClassesdeSuscetibilidadeAmbiental_9.addFeatures(features_ClassesdeSuscetibilidadeAmbiental_9);
var lyr_ClassesdeSuscetibilidadeAmbiental_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClassesdeSuscetibilidadeAmbiental_9, 
                style: style_ClassesdeSuscetibilidadeAmbiental_9,
                popuplayertitle: 'Classes de Suscetibilidade Ambiental',
                interactive: true,
    title: 'Classes de Suscetibilidade Ambiental<br />\
    <img src="styles/legend/ClassesdeSuscetibilidadeAmbiental_9_0.png" /> Massa d\'água<br />\
    <img src="styles/legend/ClassesdeSuscetibilidadeAmbiental_9_1.png" /> Área Urbana<br />\
    <img src="styles/legend/ClassesdeSuscetibilidadeAmbiental_9_2.png" /> Muito Baixa<br />\
    <img src="styles/legend/ClassesdeSuscetibilidadeAmbiental_9_3.png" /> Baixa<br />\
    <img src="styles/legend/ClassesdeSuscetibilidadeAmbiental_9_4.png" /> Média<br />\
    <img src="styles/legend/ClassesdeSuscetibilidadeAmbiental_9_5.png" /> Alta<br />\
    <img src="styles/legend/ClassesdeSuscetibilidadeAmbiental_9_6.png" /> Muito Alta<br />'
        });
var format_UnidadesdeConservao_10 = new ol.format.GeoJSON();
var features_UnidadesdeConservao_10 = format_UnidadesdeConservao_10.readFeatures(json_UnidadesdeConservao_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_UnidadesdeConservao_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UnidadesdeConservao_10.addFeatures(features_UnidadesdeConservao_10);
var lyr_UnidadesdeConservao_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UnidadesdeConservao_10, 
                style: style_UnidadesdeConservao_10,
                popuplayertitle: 'Unidades de Conservação',
                interactive: true,
    title: 'Unidades de Conservação<br />\
    <img src="styles/legend/UnidadesdeConservao_10_0.png" /> APA Água Parada<br />\
    <img src="styles/legend/UnidadesdeConservao_10_1.png" /> APA do Timburi<br />\
    <img src="styles/legend/UnidadesdeConservao_10_2.png" /> APA Municipal do Rio Batalha<br />\
    <img src="styles/legend/UnidadesdeConservao_10_3.png" /> APA Vargem Limpa – Campo Novo<br />\
    <img src="styles/legend/UnidadesdeConservao_10_4.png" /> Área de Proteção Ambiental Rio Batalha<br />\
    <img src="styles/legend/UnidadesdeConservao_10_5.png" /> Área de Relevante Interesse Ecológico Leopoldo Magno Coutinho<br />\
    <img src="styles/legend/UnidadesdeConservao_10_6.png" /> Estação Ecológica Assis<br />\
    <img src="styles/legend/UnidadesdeConservao_10_7.png" /> Floresta Estadual de Assis<br />\
    <img src="styles/legend/UnidadesdeConservao_10_8.png" /> Refúgio de Vida Silvestre Aimorés<br />'
        });
var format_APRMdoRioBatalha_11 = new ol.format.GeoJSON();
var features_APRMdoRioBatalha_11 = format_APRMdoRioBatalha_11.readFeatures(json_APRMdoRioBatalha_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_APRMdoRioBatalha_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APRMdoRioBatalha_11.addFeatures(features_APRMdoRioBatalha_11);
var lyr_APRMdoRioBatalha_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APRMdoRioBatalha_11, 
                style: style_APRMdoRioBatalha_11,
                popuplayertitle: 'APRM do Rio Batalha',
                interactive: true,
                title: '<img src="styles/legend/APRMdoRioBatalha_11.png" /> APRM do Rio Batalha'
            });
var format_VegetaoNativaASVFD_12 = new ol.format.GeoJSON();
var features_VegetaoNativaASVFD_12 = format_VegetaoNativaASVFD_12.readFeatures(json_VegetaoNativaASVFD_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_VegetaoNativaASVFD_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VegetaoNativaASVFD_12.addFeatures(features_VegetaoNativaASVFD_12);
var lyr_VegetaoNativaASVFD_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VegetaoNativaASVFD_12, 
                style: style_VegetaoNativaASVFD_12,
                popuplayertitle: 'Vegetação Nativa ASV - FD',
                interactive: true,
    title: 'Vegetação Nativa ASV - FD<br />\
    <img src="styles/legend/VegetaoNativaASVFD_12_0.png" /> Leucenal<br />\
    <img src="styles/legend/VegetaoNativaASVFD_12_1.png" /> Pioneiro<br />\
    <img src="styles/legend/VegetaoNativaASVFD_12_2.png" /> Inicial<br />\
    <img src="styles/legend/VegetaoNativaASVFD_12_3.png" /> Médio<br />\
    <img src="styles/legend/VegetaoNativaASVFD_12_4.png" /> Avançado<br />'
        });
var format_rvoresIsoladasASVAID_13 = new ol.format.GeoJSON();
var features_rvoresIsoladasASVAID_13 = format_rvoresIsoladasASVAID_13.readFeatures(json_rvoresIsoladasASVAID_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_rvoresIsoladasASVAID_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rvoresIsoladasASVAID_13.addFeatures(features_rvoresIsoladasASVAID_13);
var lyr_rvoresIsoladasASVAID_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rvoresIsoladasASVAID_13, 
                style: style_rvoresIsoladasASVAID_13,
                popuplayertitle: 'Árvores Isoladas ASV - AID',
                interactive: true,
                title: '<img src="styles/legend/rvoresIsoladasASVAID_13.png" /> Árvores Isoladas ASV - AID'
            });
var format_VegetaoNativaAID_14 = new ol.format.GeoJSON();
var features_VegetaoNativaAID_14 = format_VegetaoNativaAID_14.readFeatures(json_VegetaoNativaAID_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_VegetaoNativaAID_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VegetaoNativaAID_14.addFeatures(features_VegetaoNativaAID_14);
var lyr_VegetaoNativaAID_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VegetaoNativaAID_14, 
                style: style_VegetaoNativaAID_14,
                popuplayertitle: 'Vegetação Nativa - AID',
                interactive: true,
    title: 'Vegetação Nativa - AID<br />\
    <img src="styles/legend/VegetaoNativaAID_14_0.png" /> Floresta Estacional Semidecidual<br />\
    <img src="styles/legend/VegetaoNativaAID_14_1.png" /> Formação Pioneira com Influência Fluência<br />\
    <img src="styles/legend/VegetaoNativaAID_14_2.png" /> Savana Arborizada<br />\
    <img src="styles/legend/VegetaoNativaAID_14_3.png" /> Savana Florestada<br />'
        });
var format_Vicinais_15 = new ol.format.GeoJSON();
var features_Vicinais_15 = format_Vicinais_15.readFeatures(json_Vicinais_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_Vicinais_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vicinais_15.addFeatures(features_Vicinais_15);
var lyr_Vicinais_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vicinais_15, 
                style: style_Vicinais_15,
                popuplayertitle: 'Vicinais',
                interactive: true,
                title: '<img src="styles/legend/Vicinais_15.png" /> Vicinais'
            });
var format_MalhaPrincipalSP225SP327eSP270eSPAs_16 = new ol.format.GeoJSON();
var features_MalhaPrincipalSP225SP327eSP270eSPAs_16 = format_MalhaPrincipalSP225SP327eSP270eSPAs_16.readFeatures(json_MalhaPrincipalSP225SP327eSP270eSPAs_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_MalhaPrincipalSP225SP327eSP270eSPAs_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MalhaPrincipalSP225SP327eSP270eSPAs_16.addFeatures(features_MalhaPrincipalSP225SP327eSP270eSPAs_16);
var lyr_MalhaPrincipalSP225SP327eSP270eSPAs_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MalhaPrincipalSP225SP327eSP270eSPAs_16, 
                style: style_MalhaPrincipalSP225SP327eSP270eSPAs_16,
                popuplayertitle: 'Malha Principal (SP-225, SP-327 e SP-270 e SPAs)',
                interactive: true,
    title: 'Malha Principal (SP-225, SP-327 e SP-270 e SPAs)<br />\
    <img src="styles/legend/MalhaPrincipalSP225SP327eSP270eSPAs_16_0.png" /> SP<br />\
    <img src="styles/legend/MalhaPrincipalSP225SP327eSP270eSPAs_16_1.png" /> SPA<br />'
        });
var format_FaixadeDomnio_17 = new ol.format.GeoJSON();
var features_FaixadeDomnio_17 = format_FaixadeDomnio_17.readFeatures(json_FaixadeDomnio_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_FaixadeDomnio_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FaixadeDomnio_17.addFeatures(features_FaixadeDomnio_17);
var lyr_FaixadeDomnio_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FaixadeDomnio_17, 
                style: style_FaixadeDomnio_17,
                popuplayertitle: 'Faixa de Domínio',
                interactive: true,
                title: '<img src="styles/legend/FaixadeDomnio_17.png" /> Faixa de Domínio'
            });
var format_MarcosQuilomtricos_18 = new ol.format.GeoJSON();
var features_MarcosQuilomtricos_18 = format_MarcosQuilomtricos_18.readFeatures(json_MarcosQuilomtricos_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_MarcosQuilomtricos_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MarcosQuilomtricos_18.addFeatures(features_MarcosQuilomtricos_18);
cluster_MarcosQuilomtricos_18 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_MarcosQuilomtricos_18
});
var lyr_MarcosQuilomtricos_18 = new ol.layer.Vector({
                declutter: false,
                source:cluster_MarcosQuilomtricos_18, 
                style: style_MarcosQuilomtricos_18,
                popuplayertitle: 'Marcos Quilométricos',
                interactive: true,
                title: '<img src="styles/legend/MarcosQuilomtricos_18.png" /> Marcos Quilométricos'
            });
var format_RecursosHdricos_19 = new ol.format.GeoJSON();
var features_RecursosHdricos_19 = format_RecursosHdricos_19.readFeatures(json_RecursosHdricos_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_RecursosHdricos_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RecursosHdricos_19.addFeatures(features_RecursosHdricos_19);
var lyr_RecursosHdricos_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RecursosHdricos_19, 
                style: style_RecursosHdricos_19,
                popuplayertitle: 'Recursos Hídricos',
                interactive: true,
                title: '<img src="styles/legend/RecursosHdricos_19.png" /> Recursos Hídricos'
            });
var format_APPs_20 = new ol.format.GeoJSON();
var features_APPs_20 = format_APPs_20.readFeatures(json_APPs_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_APPs_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APPs_20.addFeatures(features_APPs_20);
var lyr_APPs_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APPs_20, 
                style: style_APPs_20,
                popuplayertitle: 'APPs',
                interactive: true,
                title: '<img src="styles/legend/APPs_20.png" /> APPs'
            });
var format_IntersecodeCursosDgua_21 = new ol.format.GeoJSON();
var features_IntersecodeCursosDgua_21 = format_IntersecodeCursosDgua_21.readFeatures(json_IntersecodeCursosDgua_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_IntersecodeCursosDgua_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IntersecodeCursosDgua_21.addFeatures(features_IntersecodeCursosDgua_21);
var lyr_IntersecodeCursosDgua_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IntersecodeCursosDgua_21, 
                style: style_IntersecodeCursosDgua_21,
                popuplayertitle: 'Intersecção de Cursos D\'água',
                interactive: true,
                title: '<img src="styles/legend/IntersecodeCursosDgua_21.png" /> Intersecção de Cursos D\'água'
            });
var format_PotencialPaleontolgico_22 = new ol.format.GeoJSON();
var features_PotencialPaleontolgico_22 = format_PotencialPaleontolgico_22.readFeatures(json_PotencialPaleontolgico_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_PotencialPaleontolgico_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PotencialPaleontolgico_22.addFeatures(features_PotencialPaleontolgico_22);
var lyr_PotencialPaleontolgico_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PotencialPaleontolgico_22, 
                style: style_PotencialPaleontolgico_22,
                popuplayertitle: 'Potencial Paleontológico',
                interactive: true,
                title: '<img src="styles/legend/PotencialPaleontolgico_22.png" /> Potencial Paleontológico'
            });
var format_StiosArqueolgicos_23 = new ol.format.GeoJSON();
var features_StiosArqueolgicos_23 = format_StiosArqueolgicos_23.readFeatures(json_StiosArqueolgicos_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_StiosArqueolgicos_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StiosArqueolgicos_23.addFeatures(features_StiosArqueolgicos_23);
var lyr_StiosArqueolgicos_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StiosArqueolgicos_23, 
                style: style_StiosArqueolgicos_23,
                popuplayertitle: 'Sítios Arqueológicos',
                interactive: true,
                title: '<img src="styles/legend/StiosArqueolgicos_23.png" /> Sítios Arqueológicos'
            });
var format_ObrasPrevistas_24 = new ol.format.GeoJSON();
var features_ObrasPrevistas_24 = format_ObrasPrevistas_24.readFeatures(json_ObrasPrevistas_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_ObrasPrevistas_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ObrasPrevistas_24.addFeatures(features_ObrasPrevistas_24);
var lyr_ObrasPrevistas_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ObrasPrevistas_24, 
                style: style_ObrasPrevistas_24,
                popuplayertitle: 'Obras Previstas',
                interactive: true,
                title: '<img src="styles/legend/ObrasPrevistas_24.png" /> Obras Previstas'
            });
var format_ObrasRealizadas_25 = new ol.format.GeoJSON();
var features_ObrasRealizadas_25 = format_ObrasRealizadas_25.readFeatures(json_ObrasRealizadas_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_ObrasRealizadas_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ObrasRealizadas_25.addFeatures(features_ObrasRealizadas_25);
var lyr_ObrasRealizadas_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ObrasRealizadas_25, 
                style: style_ObrasRealizadas_25,
                popuplayertitle: 'Obras Realizadas',
                interactive: true,
                title: '<img src="styles/legend/ObrasRealizadas_25.png" /> Obras Realizadas'
            });
var format_OcupaesnaFaixadeDomnio_26 = new ol.format.GeoJSON();
var features_OcupaesnaFaixadeDomnio_26 = format_OcupaesnaFaixadeDomnio_26.readFeatures(json_OcupaesnaFaixadeDomnio_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_OcupaesnaFaixadeDomnio_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OcupaesnaFaixadeDomnio_26.addFeatures(features_OcupaesnaFaixadeDomnio_26);
var lyr_OcupaesnaFaixadeDomnio_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OcupaesnaFaixadeDomnio_26, 
                style: style_OcupaesnaFaixadeDomnio_26,
                popuplayertitle: 'Ocupações na Faixa de Domínio',
                interactive: true,
                title: '<img src="styles/legend/OcupaesnaFaixadeDomnio_26.png" /> Ocupações na Faixa de Domínio'
            });
var format_InfraestruturaLineardeTerceirosnaFaixadeDomnio_27 = new ol.format.GeoJSON();
var features_InfraestruturaLineardeTerceirosnaFaixadeDomnio_27 = format_InfraestruturaLineardeTerceirosnaFaixadeDomnio_27.readFeatures(json_InfraestruturaLineardeTerceirosnaFaixadeDomnio_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_InfraestruturaLineardeTerceirosnaFaixadeDomnio_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InfraestruturaLineardeTerceirosnaFaixadeDomnio_27.addFeatures(features_InfraestruturaLineardeTerceirosnaFaixadeDomnio_27);
var lyr_InfraestruturaLineardeTerceirosnaFaixadeDomnio_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InfraestruturaLineardeTerceirosnaFaixadeDomnio_27, 
                style: style_InfraestruturaLineardeTerceirosnaFaixadeDomnio_27,
                popuplayertitle: 'Infraestrutura Linear de Terceiros na Faixa de Domínio',
                interactive: true,
    title: 'Infraestrutura Linear de Terceiros na Faixa de Domínio<br />\
    <img src="styles/legend/InfraestruturaLineardeTerceirosnaFaixadeDomnio_27_0.png" /> Adutora de Água<br />\
    <img src="styles/legend/InfraestruturaLineardeTerceirosnaFaixadeDomnio_27_1.png" /> Adutora de Água e Emissário de Esgoto<br />\
    <img src="styles/legend/InfraestruturaLineardeTerceirosnaFaixadeDomnio_27_2.png" /> Emissário de Esgoto<br />\
    <img src="styles/legend/InfraestruturaLineardeTerceirosnaFaixadeDomnio_27_3.png" /> Ferrovia<br />\
    <img src="styles/legend/InfraestruturaLineardeTerceirosnaFaixadeDomnio_27_4.png" /> Gás Natural<br />\
    <img src="styles/legend/InfraestruturaLineardeTerceirosnaFaixadeDomnio_27_5.png" /> Linha de Transmissão<br />\
    <img src="styles/legend/InfraestruturaLineardeTerceirosnaFaixadeDomnio_27_6.png" /> Rede de Energia Elétrica<br />\
    <img src="styles/legend/InfraestruturaLineardeTerceirosnaFaixadeDomnio_27_7.png" /> Rede de Telecomunicações<br />'
        });
var format_BarreirasNewJersey_28 = new ol.format.GeoJSON();
var features_BarreirasNewJersey_28 = format_BarreirasNewJersey_28.readFeatures(json_BarreirasNewJersey_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_BarreirasNewJersey_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BarreirasNewJersey_28.addFeatures(features_BarreirasNewJersey_28);
var lyr_BarreirasNewJersey_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BarreirasNewJersey_28, 
                style: style_BarreirasNewJersey_28,
                popuplayertitle: 'Barreiras New Jersey',
                interactive: true,
                title: '<img src="styles/legend/BarreirasNewJersey_28.png" /> Barreiras New Jersey'
            });
var format_InstalaesdeApoioCART_29 = new ol.format.GeoJSON();
var features_InstalaesdeApoioCART_29 = format_InstalaesdeApoioCART_29.readFeatures(json_InstalaesdeApoioCART_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_InstalaesdeApoioCART_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InstalaesdeApoioCART_29.addFeatures(features_InstalaesdeApoioCART_29);
var lyr_InstalaesdeApoioCART_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InstalaesdeApoioCART_29, 
                style: style_InstalaesdeApoioCART_29,
                popuplayertitle: 'Instalações de Apoio CART',
                interactive: true,
    title: 'Instalações de Apoio CART<br />\
    <img src="styles/legend/InstalaesdeApoioCART_29_0.png" /> Companhia da Polícia Rodoviária<br />\
    <img src="styles/legend/InstalaesdeApoioCART_29_1.png" /> Passarela<br />\
    <img src="styles/legend/InstalaesdeApoioCART_29_2.png" /> Ponto de Ônibus<br />\
    <img src="styles/legend/InstalaesdeApoioCART_29_3.png" /> Posto da Polícia Rodoviária<br />\
    <img src="styles/legend/InstalaesdeApoioCART_29_4.png" /> Posto de Pesagem Misto – PPM<br />\
    <img src="styles/legend/InstalaesdeApoioCART_29_5.png" /> Posto Geral de Fiscalização – PGF<br />\
    <img src="styles/legend/InstalaesdeApoioCART_29_6.png" /> Praça de Pedágio<br />\
    <img src="styles/legend/InstalaesdeApoioCART_29_7.png" /> Centro de Controle Operacional – CCO<br />\
    <img src="styles/legend/InstalaesdeApoioCART_29_8.png" /> Serviço de Atendimento ao Usuário – SAU<br />'
        });
var format_LicenasdeInstalaoLIs_30 = new ol.format.GeoJSON();
var features_LicenasdeInstalaoLIs_30 = format_LicenasdeInstalaoLIs_30.readFeatures(json_LicenasdeInstalaoLIs_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_LicenasdeInstalaoLIs_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LicenasdeInstalaoLIs_30.addFeatures(features_LicenasdeInstalaoLIs_30);
var lyr_LicenasdeInstalaoLIs_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LicenasdeInstalaoLIs_30, 
                style: style_LicenasdeInstalaoLIs_30,
                popuplayertitle: 'Licenças de Instalação - LIs',
                interactive: true,
                title: '<img src="styles/legend/LicenasdeInstalaoLIs_30.png" /> Licenças de Instalação - LIs'
            });
var format_AutorizaodeSupressodeVegetaoASVs_31 = new ol.format.GeoJSON();
var features_AutorizaodeSupressodeVegetaoASVs_31 = format_AutorizaodeSupressodeVegetaoASVs_31.readFeatures(json_AutorizaodeSupressodeVegetaoASVs_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_AutorizaodeSupressodeVegetaoASVs_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AutorizaodeSupressodeVegetaoASVs_31.addFeatures(features_AutorizaodeSupressodeVegetaoASVs_31);
var lyr_AutorizaodeSupressodeVegetaoASVs_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AutorizaodeSupressodeVegetaoASVs_31, 
                style: style_AutorizaodeSupressodeVegetaoASVs_31,
                popuplayertitle: 'Autorização de Supressão de Vegetação - ASVs',
                interactive: true,
                title: '<img src="styles/legend/AutorizaodeSupressodeVegetaoASVs_31.png" /> Autorização de Supressão de Vegetação - ASVs'
            });
var format_CercasdeDirecionamentodeFauna_32 = new ol.format.GeoJSON();
var features_CercasdeDirecionamentodeFauna_32 = format_CercasdeDirecionamentodeFauna_32.readFeatures(json_CercasdeDirecionamentodeFauna_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_CercasdeDirecionamentodeFauna_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CercasdeDirecionamentodeFauna_32.addFeatures(features_CercasdeDirecionamentodeFauna_32);
var lyr_CercasdeDirecionamentodeFauna_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CercasdeDirecionamentodeFauna_32, 
                style: style_CercasdeDirecionamentodeFauna_32,
                popuplayertitle: 'Cercas de Direcionamento de Fauna',
                interactive: true,
                title: '<img src="styles/legend/CercasdeDirecionamentodeFauna_32.png" /> Cercas de Direcionamento de Fauna'
            });
var format_PassagensdeFauna_33 = new ol.format.GeoJSON();
var features_PassagensdeFauna_33 = format_PassagensdeFauna_33.readFeatures(json_PassagensdeFauna_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_PassagensdeFauna_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PassagensdeFauna_33.addFeatures(features_PassagensdeFauna_33);
var lyr_PassagensdeFauna_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PassagensdeFauna_33, 
                style: style_PassagensdeFauna_33,
                popuplayertitle: 'Passagens de Fauna',
                interactive: true,
                title: '<img src="styles/legend/PassagensdeFauna_33.png" /> Passagens de Fauna'
            });
var format_AtropelamentodeFaunaDomstica_34 = new ol.format.GeoJSON();
var features_AtropelamentodeFaunaDomstica_34 = format_AtropelamentodeFaunaDomstica_34.readFeatures(json_AtropelamentodeFaunaDomstica_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_AtropelamentodeFaunaDomstica_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AtropelamentodeFaunaDomstica_34.addFeatures(features_AtropelamentodeFaunaDomstica_34);
var lyr_AtropelamentodeFaunaDomstica_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AtropelamentodeFaunaDomstica_34, 
                style: style_AtropelamentodeFaunaDomstica_34,
                popuplayertitle: 'Atropelamento de Fauna Doméstica',
                interactive: true,
                title: '<img src="styles/legend/AtropelamentodeFaunaDomstica_34.png" /> Atropelamento de Fauna Doméstica'
            });
var format_AtropelamentodeFaunaSilvestre_35 = new ol.format.GeoJSON();
var features_AtropelamentodeFaunaSilvestre_35 = format_AtropelamentodeFaunaSilvestre_35.readFeatures(json_AtropelamentodeFaunaSilvestre_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_AtropelamentodeFaunaSilvestre_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AtropelamentodeFaunaSilvestre_35.addFeatures(features_AtropelamentodeFaunaSilvestre_35);
var lyr_AtropelamentodeFaunaSilvestre_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AtropelamentodeFaunaSilvestre_35, 
                style: style_AtropelamentodeFaunaSilvestre_35,
                popuplayertitle: 'Atropelamento de Fauna Silvestre',
                interactive: true,
                title: '<img src="styles/legend/AtropelamentodeFaunaSilvestre_35.png" /> Atropelamento de Fauna Silvestre'
            });
var format_AtropelamentodeFaunaAmeaada_36 = new ol.format.GeoJSON();
var features_AtropelamentodeFaunaAmeaada_36 = format_AtropelamentodeFaunaAmeaada_36.readFeatures(json_AtropelamentodeFaunaAmeaada_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_AtropelamentodeFaunaAmeaada_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AtropelamentodeFaunaAmeaada_36.addFeatures(features_AtropelamentodeFaunaAmeaada_36);
var lyr_AtropelamentodeFaunaAmeaada_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AtropelamentodeFaunaAmeaada_36, 
                style: style_AtropelamentodeFaunaAmeaada_36,
                popuplayertitle: 'Atropelamento de Fauna Ameaçada',
                interactive: true,
                title: '<img src="styles/legend/AtropelamentodeFaunaAmeaada_36.png" /> Atropelamento de Fauna Ameaçada'
            });
var format_TrechosCrticos_37 = new ol.format.GeoJSON();
var features_TrechosCrticos_37 = format_TrechosCrticos_37.readFeatures(json_TrechosCrticos_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_TrechosCrticos_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TrechosCrticos_37.addFeatures(features_TrechosCrticos_37);
var lyr_TrechosCrticos_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TrechosCrticos_37, 
                style: style_TrechosCrticos_37,
                popuplayertitle: 'Trechos Críticos',
                interactive: true,
                title: '<img src="styles/legend/TrechosCrticos_37.png" /> Trechos Críticos'
            });
var format_ContenesdePP_38 = new ol.format.GeoJSON();
var features_ContenesdePP_38 = format_ContenesdePP_38.readFeatures(json_ContenesdePP_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_ContenesdePP_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ContenesdePP_38.addFeatures(features_ContenesdePP_38);
var lyr_ContenesdePP_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ContenesdePP_38, 
                style: style_ContenesdePP_38,
                popuplayertitle: 'Contenções de PP',
                interactive: true,
                title: '<img src="styles/legend/ContenesdePP_38.png" /> Contenções de PP'
            });
var format_AutosdeInfraoCETESB_39 = new ol.format.GeoJSON();
var features_AutosdeInfraoCETESB_39 = format_AutosdeInfraoCETESB_39.readFeatures(json_AutosdeInfraoCETESB_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_AutosdeInfraoCETESB_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AutosdeInfraoCETESB_39.addFeatures(features_AutosdeInfraoCETESB_39);
var lyr_AutosdeInfraoCETESB_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AutosdeInfraoCETESB_39, 
                style: style_AutosdeInfraoCETESB_39,
                popuplayertitle: 'Autos de Infração - CETESB',
                interactive: true,
                title: '<img src="styles/legend/AutosdeInfraoCETESB_39.png" /> Autos de Infração - CETESB'
            });
var format_RudosReclamaes_40 = new ol.format.GeoJSON();
var features_RudosReclamaes_40 = format_RudosReclamaes_40.readFeatures(json_RudosReclamaes_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_RudosReclamaes_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RudosReclamaes_40.addFeatures(features_RudosReclamaes_40);
var lyr_RudosReclamaes_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RudosReclamaes_40, 
                style: style_RudosReclamaes_40,
                popuplayertitle: 'Ruídos - Reclamações',
                interactive: true,
                title: '<img src="styles/legend/RudosReclamaes_40.png" /> Ruídos - Reclamações'
            });
var format_reasContaminadasCETESB_41 = new ol.format.GeoJSON();
var features_reasContaminadasCETESB_41 = format_reasContaminadasCETESB_41.readFeatures(json_reasContaminadasCETESB_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_reasContaminadasCETESB_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasContaminadasCETESB_41.addFeatures(features_reasContaminadasCETESB_41);
var lyr_reasContaminadasCETESB_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasContaminadasCETESB_41, 
                style: style_reasContaminadasCETESB_41,
                popuplayertitle: 'Áreas Contaminadas - CETESB',
                interactive: true,
                title: '<img src="styles/legend/reasContaminadasCETESB_41.png" /> Áreas Contaminadas - CETESB'
            });
var format_reasDegradadas_42 = new ol.format.GeoJSON();
var features_reasDegradadas_42 = format_reasDegradadas_42.readFeatures(json_reasDegradadas_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_reasDegradadas_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasDegradadas_42.addFeatures(features_reasDegradadas_42);
var lyr_reasDegradadas_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasDegradadas_42, 
                style: style_reasDegradadas_42,
                popuplayertitle: 'Áreas Degradadas',
                interactive: true,
                title: '<img src="styles/legend/reasDegradadas_42.png" /> Áreas Degradadas'
            });
var format_ProcessosErosivos_43 = new ol.format.GeoJSON();
var features_ProcessosErosivos_43 = format_ProcessosErosivos_43.readFeatures(json_ProcessosErosivos_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_ProcessosErosivos_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProcessosErosivos_43.addFeatures(features_ProcessosErosivos_43);
var lyr_ProcessosErosivos_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProcessosErosivos_43, 
                style: style_ProcessosErosivos_43,
                popuplayertitle: 'Processos Erosivos',
                interactive: true,
                title: '<img src="styles/legend/ProcessosErosivos_43.png" /> Processos Erosivos'
            });
var group_NoconformidadesARTESP = new ol.layer.Group({
                                layers: [lyr_reasDegradadas_42,lyr_ProcessosErosivos_43,],
                                fold: "open",
                                title: 'Não-conformidades ARTESP'});
var group_Passivos = new ol.layer.Group({
                                layers: [lyr_AutosdeInfraoCETESB_39,lyr_RudosReclamaes_40,lyr_reasContaminadasCETESB_41,],
                                fold: "open",
                                title: 'Passivos'});
var group_ProdutosPerigosos = new ol.layer.Group({
                                layers: [lyr_TrechosCrticos_37,lyr_ContenesdePP_38,],
                                fold: "open",
                                title: 'Produtos Perigosos'});
var group_Fauna = new ol.layer.Group({
                                layers: [lyr_CercasdeDirecionamentodeFauna_32,lyr_PassagensdeFauna_33,lyr_AtropelamentodeFaunaDomstica_34,lyr_AtropelamentodeFaunaSilvestre_35,lyr_AtropelamentodeFaunaAmeaada_36,],
                                fold: "open",
                                title: 'Fauna'});
var group_AtendimentoaoLicenciamento = new ol.layer.Group({
                                layers: [lyr_LicenasdeInstalaoLIs_30,lyr_AutorizaodeSupressodeVegetaoASVs_31,],
                                fold: "open",
                                title: 'Atendimento ao Licenciamento'});
var group_Infraestrutura = new ol.layer.Group({
                                layers: [lyr_InfraestruturaLineardeTerceirosnaFaixadeDomnio_27,lyr_BarreirasNewJersey_28,lyr_InstalaesdeApoioCART_29,],
                                fold: "open",
                                title: 'Infraestrutura'});
var group_Ocupaes = new ol.layer.Group({
                                layers: [lyr_OcupaesnaFaixadeDomnio_26,],
                                fold: "open",
                                title: 'Ocupações'});
var group_Obras = new ol.layer.Group({
                                layers: [lyr_ObrasPrevistas_24,lyr_ObrasRealizadas_25,],
                                fold: "open",
                                title: 'Obras'});
var group_PotencialPaleontolgicoeStiosArqueolgicos = new ol.layer.Group({
                                layers: [lyr_PotencialPaleontolgico_22,lyr_StiosArqueolgicos_23,],
                                fold: "open",
                                title: 'Potencial Paleontológico e Sítios Arqueológicos'});
var group_RecursosHdricos = new ol.layer.Group({
                                layers: [lyr_RecursosHdricos_19,lyr_APPs_20,lyr_IntersecodeCursosDgua_21,],
                                fold: "open",
                                title: 'Recursos Hídricos'});
var group_MalhaRodoviria = new ol.layer.Group({
                                layers: [lyr_Vicinais_15,lyr_MalhaPrincipalSP225SP327eSP270eSPAs_16,lyr_FaixadeDomnio_17,lyr_MarcosQuilomtricos_18,],
                                fold: "open",
                                title: 'Malha Rodoviária'});
var group_VegetaoNativa = new ol.layer.Group({
                                layers: [lyr_VegetaoNativaASVFD_12,lyr_rvoresIsoladasASVAID_13,lyr_VegetaoNativaAID_14,],
                                fold: "open",
                                title: 'Vegetação Nativa'});
var group_reasProtegidas = new ol.layer.Group({
                                layers: [lyr_UnidadesdeConservao_10,lyr_APRMdoRioBatalha_11,],
                                fold: "open",
                                title: 'Áreas Protegidas'});
var group_SuscetibilidadedeProcessosdeDinmicaSuperficial = new ol.layer.Group({
                                layers: [lyr_ClassesdeSuscetibilidadeAmbiental_9,],
                                fold: "open",
                                title: 'Suscetibilidade de Processos de Dinâmica Superficial'});
var group_UsoeOcupaodoSolo = new ol.layer.Group({
                                layers: [lyr_UsoeOcupaodoSoloADA_6,lyr_UsoeOcupaodoSoloAID_7,lyr_reasUrbanizadasMapbiomas_8,],
                                fold: "open",
                                title: 'Uso e Ocupação do Solo'});
var group_reasdeInfluncia = new ol.layer.Group({
                                layers: [lyr_readeInflunciaIndiretaAII_4,lyr_readeInflunciaDiretaAID_5,],
                                fold: "open",
                                title: 'Áreas de Influência'});
var group_Geografia = new ol.layer.Group({
                                layers: [lyr_Estados_1,lyr_MunicpiosnaAII_2,lyr_MunicpiosnaADA_3,],
                                fold: "open",
                                title: 'Geografia'});
var group_BaseMaps = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_0,],
                                fold: "open",
                                title: 'BaseMaps'});

lyr_GoogleSatellite_0.setVisible(true);lyr_Estados_1.setVisible(true);lyr_MunicpiosnaAII_2.setVisible(true);lyr_MunicpiosnaADA_3.setVisible(false);lyr_readeInflunciaIndiretaAII_4.setVisible(false);lyr_readeInflunciaDiretaAID_5.setVisible(false);lyr_UsoeOcupaodoSoloADA_6.setVisible(false);lyr_UsoeOcupaodoSoloAID_7.setVisible(false);lyr_reasUrbanizadasMapbiomas_8.setVisible(false);lyr_ClassesdeSuscetibilidadeAmbiental_9.setVisible(false);lyr_UnidadesdeConservao_10.setVisible(false);lyr_APRMdoRioBatalha_11.setVisible(false);lyr_VegetaoNativaASVFD_12.setVisible(false);lyr_rvoresIsoladasASVAID_13.setVisible(false);lyr_VegetaoNativaAID_14.setVisible(false);lyr_Vicinais_15.setVisible(true);lyr_MalhaPrincipalSP225SP327eSP270eSPAs_16.setVisible(true);lyr_FaixadeDomnio_17.setVisible(true);lyr_MarcosQuilomtricos_18.setVisible(true);lyr_RecursosHdricos_19.setVisible(false);lyr_APPs_20.setVisible(false);lyr_IntersecodeCursosDgua_21.setVisible(false);lyr_PotencialPaleontolgico_22.setVisible(false);lyr_StiosArqueolgicos_23.setVisible(false);lyr_ObrasPrevistas_24.setVisible(false);lyr_ObrasRealizadas_25.setVisible(false);lyr_OcupaesnaFaixadeDomnio_26.setVisible(false);lyr_InfraestruturaLineardeTerceirosnaFaixadeDomnio_27.setVisible(false);lyr_BarreirasNewJersey_28.setVisible(false);lyr_InstalaesdeApoioCART_29.setVisible(false);lyr_LicenasdeInstalaoLIs_30.setVisible(false);lyr_AutorizaodeSupressodeVegetaoASVs_31.setVisible(false);lyr_CercasdeDirecionamentodeFauna_32.setVisible(false);lyr_PassagensdeFauna_33.setVisible(false);lyr_AtropelamentodeFaunaDomstica_34.setVisible(false);lyr_AtropelamentodeFaunaSilvestre_35.setVisible(false);lyr_AtropelamentodeFaunaAmeaada_36.setVisible(false);lyr_TrechosCrticos_37.setVisible(false);lyr_ContenesdePP_38.setVisible(false);lyr_AutosdeInfraoCETESB_39.setVisible(false);lyr_RudosReclamaes_40.setVisible(false);lyr_reasContaminadasCETESB_41.setVisible(false);lyr_reasDegradadas_42.setVisible(false);lyr_ProcessosErosivos_43.setVisible(false);
var layersList = [group_BaseMaps,group_Geografia,group_reasdeInfluncia,group_UsoeOcupaodoSolo,group_SuscetibilidadedeProcessosdeDinmicaSuperficial,group_reasProtegidas,group_VegetaoNativa,group_MalhaRodoviria,group_RecursosHdricos,group_PotencialPaleontolgicoeStiosArqueolgicos,group_Obras,group_Ocupaes,group_Infraestrutura,group_AtendimentoaoLicenciamento,group_Fauna,group_ProdutosPerigosos,group_Passivos,group_NoconformidadesARTESP];
lyr_Estados_1.set('fieldAliases', {'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'NM_REGIAO': 'NM_REGIAO', 'AREA_KM2': 'AREA_KM2', });
lyr_MunicpiosnaAII_2.set('fieldAliases', {'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'SIGLA_UF': 'SIGLA_UF', 'AREA_KM2': 'AREA_KM2', });
lyr_MunicpiosnaADA_3.set('fieldAliases', {'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'SIGLA_UF': 'SIGLA_UF', 'AREA_KM2': 'AREA_KM2', });
lyr_readeInflunciaIndiretaAII_4.set('fieldAliases', {'Rodovia': 'Rodovia', });
lyr_readeInflunciaDiretaAID_5.set('fieldAliases', {'Rodovia': 'Rodovia', });
lyr_UsoeOcupaodoSoloADA_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Uso_classe': 'Uso_classe', 'area': 'area', 'Rodovia': 'Rodovia', });
lyr_UsoeOcupaodoSoloAID_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Uso_classe': 'Uso_classe', 'area': 'area', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_reasUrbanizadasMapbiomas_8.set('fieldAliases', {'Rodovia': 'Rodovia', 'Área': 'Área', 'Uso Solo': 'Uso Solo', });
lyr_ClassesdeSuscetibilidadeAmbiental_9.set('fieldAliases', {'Sus_Amb': 'Sus_Amb', 'Rodovia': 'Rodovia', });
lyr_UnidadesdeConservao_10.set('fieldAliases', {'Categoria': 'Categoria', 'Esfera': 'Esfera', 'Órgão': 'Órgão', 'Denominaç': 'Denominaç', 'Proteção': 'Proteção', 'Legislacao': 'Legislacao', });
lyr_APRMdoRioBatalha_11.set('fieldAliases', {'Nome': 'Nome', 'Legislaç�': 'Legislaç�', 'Zoneamento': 'Zoneamento', });
lyr_VegetaoNativaASVFD_12.set('fieldAliases', {'Trecho__Km': 'Trecho__Km', 'Trecho___K': 'Trecho___K', 'Pista': 'Pista', 'Área_Urba': 'Área_Urba', 'Estágio_d': 'Estágio_d', 'Bioma': 'Bioma', 'Fitofision': 'Fitofision', 'Rodovia': 'Rodovia', 'RM': 'RM', 'Area_total': 'Area_total', 'Area_APP': 'Area_APP', 'Tipo_APP': 'Tipo_APP', 'Area_UC': 'Area_UC', 'Categoria': 'Categoria', });
lyr_rvoresIsoladasASVAID_13.set('fieldAliases', {'Name': 'Name', 'km': 'km', 'Sentido': 'Sentido', });
lyr_VegetaoNativaAID_14.set('fieldAliases', {'FID_3_7_Ve': 'FID_3_7_Ve', 'Rodovia': 'Rodovia', 'Bioma': 'Bioma', 'Fisionom': 'Fisionom', 'Estágio': 'Estágio', 'Área': 'Área', 'APP': 'APP', 'Município': 'Município', });
lyr_Vicinais_15.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_MalhaPrincipalSP225SP327eSP270eSPAs_16.set('fieldAliases', {'Rodovia': 'Rodovia', 'Classifica': 'Classifica', });
lyr_FaixadeDomnio_17.set('fieldAliases', {'Rodovia': 'Rodovia', 'Area': 'Area', });
lyr_MarcosQuilomtricos_18.set('fieldAliases', {'Rodovia': 'Rodovia', 'km': 'km', 'km2': 'km2', });
lyr_RecursosHdricos_19.set('fieldAliases', {'Sensibilid': 'Sensibilid', 'Captação': 'Captação', 'Km_inicio': 'Km_inicio', 'Km_fim': 'Km_fim', 'Sentido': 'Sentido', 'x': 'x', 'y': 'y', 'Rodovia': 'Rodovia', 'Num': 'Num', 'Nome': 'Nome', 'Municipio': 'Municipio', 'Classe_uso': 'Classe_uso', 'Sensível': 'Sensível', 'Distancia': 'Distancia', });
lyr_APPs_20.set('fieldAliases', {'Sensibilid': 'Sensibilid', 'Captação': 'Captação', 'Km_inicio': 'Km_inicio', 'Km_fim': 'Km_fim', 'Sentido': 'Sentido', 'x': 'x', 'y': 'y', 'Rodovia': 'Rodovia', 'Num': 'Num', 'Nome': 'Nome', 'Municipio': 'Municipio', 'Classe_uso': 'Classe_uso', 'Sensível': 'Sensível', 'Distancia': 'Distancia', 'layer': 'layer', 'path': 'path', });
lyr_IntersecodeCursosDgua_21.set('fieldAliases', {'Rodovia': 'Rodovia', 'km inicial': 'km inicial', 'nome': 'nome', 'Sensível': 'Sensível', 'dist sensi': 'dist sensi', });
lyr_PotencialPaleontolgico_22.set('fieldAliases', {'Rodovia': 'Rodovia', 'Km': 'Km', 'Nome': 'Nome', });
lyr_StiosArqueolgicos_23.set('fieldAliases', {'Rodovia': 'Rodovia', 'Km': 'Km', 'categoria': 'categoria', 'Tipo': 'Tipo', 'Exposiçã': 'Exposiçã', 'Artefato': 'Artefato', 'CNSA': 'CNSA', 'Nome': 'Nome', 'x': 'x', 'y': 'y', });
lyr_ObrasPrevistas_24.set('fieldAliases', {'Rodovia': 'Rodovia', 'Km': 'Km', 'Tipo': 'Tipo', 'Início': 'Início', });
lyr_ObrasRealizadas_25.set('fieldAliases', {'Rodovia': 'Rodovia', 'Obra': 'Obra', 'Km': 'Km', });
lyr_OcupaesnaFaixadeDomnio_26.set('fieldAliases', {'Rodovia': 'Rodovia', 'Km': 'Km', 'Coordenada': 'Coordenada', 'Coordena_1': 'Coordena_1', 'Ocupaçõe': 'Ocupaçõe', 'Município': 'Município', 'Ações_de': 'Ações_de', 'Prazo_para': 'Prazo_para', });
lyr_InfraestruturaLineardeTerceirosnaFaixadeDomnio_27.set('fieldAliases', {'Situacao': 'Situacao', 'Infra': 'Infra', 'Descricao': 'Descricao', 'km': 'km', 'Rodovia': 'Rodovia', });
lyr_BarreirasNewJersey_28.set('fieldAliases', {'KM': 'KM', 'Sentido': 'Sentido', 'Rodovia': 'Rodovia', 'Separador': 'Separador', });
lyr_InstalaesdeApoioCART_29.set('fieldAliases', {'Rodovia': 'Rodovia', 'Estrutura': 'Estrutura', 'km': 'km', });
lyr_LicenasdeInstalaoLIs_30.set('fieldAliases', {'Rodovia': 'Rodovia', 'Ano': 'Ano', 'Licença': 'Licença', 'SIGAM': 'SIGAM', 'Emissão': 'Emissão', 'Validade': 'Validade', 'Estágio': 'Estágio', });
lyr_AutorizaodeSupressodeVegetaoASVs_31.set('fieldAliases', {'Rodovia': 'Rodovia', 'Id__Vegeta': 'Id__Vegeta', 'Obra': 'Obra', 'ASV': 'ASV', 'TCRA': 'TCRA', });
lyr_CercasdeDirecionamentodeFauna_32.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'id': 'id', 'obs': 'obs', 'length': 'length', 'Name': 'Name', 'descriptio': 'descriptio', 'idd': 'idd', 'Shape_Leng': 'Shape_Leng', });
lyr_PassagensdeFauna_33.set('fieldAliases', {'id': 'id', 'Km_Atual': 'Km_Atual', 'Km_CART': 'Km_CART', 'Km_Ficha': 'Km_Ficha', 'OBS': 'OBS', 'Nova': 'Nova', 'N_seccao': 'N_seccao', 'km_Thais': 'km_Thais', 'BD_CamTrap': 'BD_CamTrap', });
lyr_AtropelamentodeFaunaDomstica_34.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'grupo': 'grupo', 'nome_popul': 'nome_popul', 'nome_cient': 'nome_cient', 'x': 'x', 'y': 'y', 'fuso': 'fuso', 'data': 'data', 'rodovia': 'rodovia', 'km': 'km', });
lyr_AtropelamentodeFaunaSilvestre_35.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'grupo': 'grupo', 'nome_popul': 'nome_popul', 'nome_cient': 'nome_cient', 'x': 'x', 'y': 'y', 'fuso': 'fuso', 'data': 'data', 'rodovia': 'rodovia', 'km': 'km', });
lyr_AtropelamentodeFaunaAmeaada_36.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Fuso': 'Fuso', 'Data': 'Data', 'Rodovia': 'Rodovia', 'KM': 'KM', 'Grupo': 'Grupo', 'Nome_Popul': 'Nome_Popul', 'Nome_Cient': 'Nome_Cient', 'Peso': 'Peso', });
lyr_TrechosCrticos_37.set('fieldAliases', {'Rodovia': 'Rodovia', 'Km': 'Km', 'Vulnerabil': 'Vulnerabil', 'Nº_de_aci': 'Nº_de_aci', 'Medidas_de': 'Medidas_de', });
lyr_ContenesdePP_38.set('fieldAliases', {'Estrutura': 'Estrutura', 'Km': 'Km', 'Rodovia': 'Rodovia', });
lyr_AutosdeInfraoCETESB_39.set('fieldAliases', {'Rodovia': 'Rodovia', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Tipo': 'Tipo', 'Nº': 'Nº', 'Emissao': 'Emissao', 'Enquad': 'Enquad', 'Valor': 'Valor', 'Status': 'Status', 'Processo': 'Processo', });
lyr_RudosReclamaes_40.set('fieldAliases', {'Rodovia': 'Rodovia', 'Com_Sem Al': 'Com_Sem Al', 'Ocupacao': 'Ocupacao', 'RPC': 'RPC', 'Mitigacao': 'Mitigacao', 'km': 'km', });
lyr_reasContaminadasCETESB_41.set('fieldAliases', {'Classifica': 'Classifica', 'Grupo de C': 'Grupo de C', 'Medidas de': 'Medidas de', 'Rodovia': 'Rodovia', 'Km': 'Km', 'Distância': 'Distância', 'RazaoSocia': 'RazaoSocia', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_reasDegradadas_42.set('fieldAliases', {'Rodovia': 'Rodovia', 'Km': 'Km', 'Tipo': 'Tipo', 'Caracteriz': 'Caracteriz', 'Medidas__p': 'Medidas__p', 'Responsáv': 'Responsáv', 'Prazo_para': 'Prazo_para', });
lyr_ProcessosErosivos_43.set('fieldAliases', {'Rodovia': 'Rodovia', 'Km': 'Km', 'Responsáv': 'Responsáv', 'Prazo_para': 'Prazo_para', 'Descriçã': 'Descriçã', 'Data': 'Data', 'Risco': 'Risco', });
lyr_Estados_1.set('fieldImages', {'CD_UF': '', 'NM_UF': '', 'SIGLA_UF': '', 'NM_REGIAO': '', 'AREA_KM2': '', });
lyr_MunicpiosnaAII_2.set('fieldImages', {'CD_MUN': '', 'NM_MUN': '', 'SIGLA_UF': '', 'AREA_KM2': '', });
lyr_MunicpiosnaADA_3.set('fieldImages', {'CD_MUN': '', 'NM_MUN': '', 'SIGLA_UF': '', 'AREA_KM2': '', });
lyr_readeInflunciaIndiretaAII_4.set('fieldImages', {'Rodovia': '', });
lyr_readeInflunciaDiretaAID_5.set('fieldImages', {'Rodovia': '', });
lyr_UsoeOcupaodoSoloADA_6.set('fieldImages', {'OBJECTID': '', 'Uso_classe': '', 'area': '', 'Rodovia': '', });
lyr_UsoeOcupaodoSoloAID_7.set('fieldImages', {'OBJECTID': '', 'Uso_classe': '', 'area': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_reasUrbanizadasMapbiomas_8.set('fieldImages', {'Rodovia': '', 'Área': '', 'Uso Solo': '', });
lyr_ClassesdeSuscetibilidadeAmbiental_9.set('fieldImages', {'Sus_Amb': '', 'Rodovia': '', });
lyr_UnidadesdeConservao_10.set('fieldImages', {'Categoria': '', 'Esfera': '', 'Órgão': '', 'Denominaç': '', 'Proteção': '', 'Legislacao': '', });
lyr_APRMdoRioBatalha_11.set('fieldImages', {'Nome': '', 'Legislaç�': '', 'Zoneamento': '', });
lyr_VegetaoNativaASVFD_12.set('fieldImages', {'Trecho__Km': '', 'Trecho___K': '', 'Pista': '', 'Área_Urba': '', 'Estágio_d': '', 'Bioma': '', 'Fitofision': '', 'Rodovia': '', 'RM': '', 'Area_total': '', 'Area_APP': '', 'Tipo_APP': '', 'Area_UC': '', 'Categoria': '', });
lyr_rvoresIsoladasASVAID_13.set('fieldImages', {'Name': '', 'km': '', 'Sentido': '', });
lyr_VegetaoNativaAID_14.set('fieldImages', {'FID_3_7_Ve': '', 'Rodovia': '', 'Bioma': '', 'Fisionom': '', 'Estágio': '', 'Área': '', 'APP': '', 'Município': '', });
lyr_Vicinais_15.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_MalhaPrincipalSP225SP327eSP270eSPAs_16.set('fieldImages', {'Rodovia': '', 'Classifica': '', });
lyr_FaixadeDomnio_17.set('fieldImages', {'Rodovia': '', 'Area': '', });
lyr_MarcosQuilomtricos_18.set('fieldImages', {'Rodovia': '', 'km': '', 'km2': '', });
lyr_RecursosHdricos_19.set('fieldImages', {'Sensibilid': '', 'Captação': '', 'Km_inicio': '', 'Km_fim': '', 'Sentido': '', 'x': '', 'y': '', 'Rodovia': '', 'Num': '', 'Nome': '', 'Municipio': '', 'Classe_uso': '', 'Sensível': '', 'Distancia': '', });
lyr_APPs_20.set('fieldImages', {'Sensibilid': '', 'Captação': '', 'Km_inicio': '', 'Km_fim': '', 'Sentido': '', 'x': '', 'y': '', 'Rodovia': '', 'Num': '', 'Nome': '', 'Municipio': '', 'Classe_uso': '', 'Sensível': '', 'Distancia': '', 'layer': '', 'path': '', });
lyr_IntersecodeCursosDgua_21.set('fieldImages', {'Rodovia': '', 'km inicial': '', 'nome': '', 'Sensível': '', 'dist sensi': '', });
lyr_PotencialPaleontolgico_22.set('fieldImages', {'Rodovia': '', 'Km': '', 'Nome': '', });
lyr_StiosArqueolgicos_23.set('fieldImages', {'Rodovia': '', 'Km': '', 'categoria': '', 'Tipo': '', 'Exposiçã': '', 'Artefato': '', 'CNSA': '', 'Nome': '', 'x': '', 'y': '', });
lyr_ObrasPrevistas_24.set('fieldImages', {'Rodovia': '', 'Km': '', 'Tipo': '', 'Início': '', });
lyr_ObrasRealizadas_25.set('fieldImages', {'Rodovia': '', 'Obra': '', 'Km': '', });
lyr_OcupaesnaFaixadeDomnio_26.set('fieldImages', {'Rodovia': '', 'Km': '', 'Coordenada': '', 'Coordena_1': '', 'Ocupaçõe': '', 'Município': '', 'Ações_de': '', 'Prazo_para': '', });
lyr_InfraestruturaLineardeTerceirosnaFaixadeDomnio_27.set('fieldImages', {'Situacao': '', 'Infra': '', 'Descricao': '', 'km': '', 'Rodovia': '', });
lyr_BarreirasNewJersey_28.set('fieldImages', {'KM': '', 'Sentido': '', 'Rodovia': '', 'Separador': '', });
lyr_InstalaesdeApoioCART_29.set('fieldImages', {'Rodovia': '', 'Estrutura': '', 'km': '', });
lyr_LicenasdeInstalaoLIs_30.set('fieldImages', {'Rodovia': '', 'Ano': '', 'Licença': '', 'SIGAM': '', 'Emissão': '', 'Validade': '', 'Estágio': '', });
lyr_AutorizaodeSupressodeVegetaoASVs_31.set('fieldImages', {'Rodovia': '', 'Id__Vegeta': '', 'Obra': '', 'ASV': '', 'TCRA': '', });
lyr_CercasdeDirecionamentodeFauna_32.set('fieldImages', {'OBJECTID': '', 'id': '', 'obs': '', 'length': '', 'Name': '', 'descriptio': '', 'idd': '', 'Shape_Leng': '', });
lyr_PassagensdeFauna_33.set('fieldImages', {'id': '', 'Km_Atual': '', 'Km_CART': '', 'Km_Ficha': '', 'OBS': '', 'Nova': '', 'N_seccao': '', 'km_Thais': '', 'BD_CamTrap': '', });
lyr_AtropelamentodeFaunaDomstica_34.set('fieldImages', {'OBJECTID': '', 'grupo': '', 'nome_popul': '', 'nome_cient': '', 'x': '', 'y': '', 'fuso': '', 'data': '', 'rodovia': '', 'km': '', });
lyr_AtropelamentodeFaunaSilvestre_35.set('fieldImages', {'OBJECTID': '', 'grupo': '', 'nome_popul': '', 'nome_cient': '', 'x': '', 'y': '', 'fuso': '', 'data': '', 'rodovia': '', 'km': '', });
lyr_AtropelamentodeFaunaAmeaada_36.set('fieldImages', {'OBJECTID': '', 'Longitude': '', 'Latitude': '', 'Fuso': '', 'Data': '', 'Rodovia': '', 'KM': '', 'Grupo': '', 'Nome_Popul': '', 'Nome_Cient': '', 'Peso': '', });
lyr_TrechosCrticos_37.set('fieldImages', {'Rodovia': '', 'Km': '', 'Vulnerabil': '', 'Nº_de_aci': '', 'Medidas_de': '', });
lyr_ContenesdePP_38.set('fieldImages', {'Estrutura': '', 'Km': '', 'Rodovia': '', });
lyr_AutosdeInfraoCETESB_39.set('fieldImages', {'Rodovia': '', 'Longitude': '', 'Latitude': '', 'Tipo': '', 'Nº': '', 'Emissao': '', 'Enquad': '', 'Valor': '', 'Status': '', 'Processo': '', });
lyr_RudosReclamaes_40.set('fieldImages', {'Rodovia': '', 'Com_Sem Al': '', 'Ocupacao': '', 'RPC': '', 'Mitigacao': '', 'km': '', });
lyr_reasContaminadasCETESB_41.set('fieldImages', {'Classifica': '', 'Grupo de C': '', 'Medidas de': '', 'Rodovia': '', 'Km': '', 'Distância': '', 'RazaoSocia': '', 'Latitude': '', 'Longitude': '', });
lyr_reasDegradadas_42.set('fieldImages', {'Rodovia': '', 'Km': '', 'Tipo': '', 'Caracteriz': '', 'Medidas__p': '', 'Responsáv': '', 'Prazo_para': '', });
lyr_ProcessosErosivos_43.set('fieldImages', {'Rodovia': '', 'Km': '', 'Responsáv': '', 'Prazo_para': '', 'Descriçã': '', 'Data': '', 'Risco': '', });
lyr_Estados_1.set('fieldLabels', {'CD_UF': 'inline label - visible with data', 'NM_UF': 'inline label - visible with data', 'SIGLA_UF': 'inline label - visible with data', 'NM_REGIAO': 'inline label - visible with data', 'AREA_KM2': 'inline label - visible with data', });
lyr_MunicpiosnaAII_2.set('fieldLabels', {'CD_MUN': 'inline label - visible with data', 'NM_MUN': 'inline label - visible with data', 'SIGLA_UF': 'inline label - visible with data', 'AREA_KM2': 'inline label - visible with data', });
lyr_MunicpiosnaADA_3.set('fieldLabels', {'CD_MUN': 'inline label - visible with data', 'NM_MUN': 'inline label - visible with data', 'SIGLA_UF': 'inline label - visible with data', 'AREA_KM2': 'inline label - visible with data', });
lyr_readeInflunciaIndiretaAII_4.set('fieldLabels', {'Rodovia': 'inline label - visible with data', });
lyr_readeInflunciaDiretaAID_5.set('fieldLabels', {'Rodovia': 'inline label - visible with data', });
lyr_UsoeOcupaodoSoloADA_6.set('fieldLabels', {'OBJECTID': 'inline label - visible with data', 'Uso_classe': 'inline label - visible with data', 'area': 'inline label - visible with data', 'Rodovia': 'inline label - visible with data', });
lyr_UsoeOcupaodoSoloAID_7.set('fieldLabels', {'OBJECTID': 'inline label - visible with data', 'Uso_classe': 'inline label - visible with data', 'area': 'inline label - visible with data', 'Shape_Leng': 'inline label - visible with data', 'Shape_Area': 'inline label - visible with data', });
lyr_reasUrbanizadasMapbiomas_8.set('fieldLabels', {'Rodovia': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Uso Solo': 'inline label - visible with data', });
lyr_ClassesdeSuscetibilidadeAmbiental_9.set('fieldLabels', {'Sus_Amb': 'inline label - visible with data', 'Rodovia': 'inline label - visible with data', });
lyr_UnidadesdeConservao_10.set('fieldLabels', {'Categoria': 'inline label - visible with data', 'Esfera': 'inline label - visible with data', 'Órgão': 'inline label - visible with data', 'Denominaç': 'inline label - visible with data', 'Proteção': 'inline label - visible with data', 'Legislacao': 'inline label - visible with data', });
lyr_APRMdoRioBatalha_11.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Legislaç�': 'inline label - visible with data', 'Zoneamento': 'inline label - visible with data', });
lyr_VegetaoNativaASVFD_12.set('fieldLabels', {'Trecho__Km': 'inline label - visible with data', 'Trecho___K': 'inline label - visible with data', 'Pista': 'inline label - visible with data', 'Área_Urba': 'inline label - visible with data', 'Estágio_d': 'inline label - visible with data', 'Bioma': 'inline label - visible with data', 'Fitofision': 'inline label - visible with data', 'Rodovia': 'inline label - visible with data', 'RM': 'inline label - visible with data', 'Area_total': 'inline label - visible with data', 'Area_APP': 'inline label - visible with data', 'Tipo_APP': 'inline label - visible with data', 'Area_UC': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', });
lyr_rvoresIsoladasASVAID_13.set('fieldLabels', {'Name': 'inline label - visible with data', 'km': 'inline label - visible with data', 'Sentido': 'inline label - visible with data', });
lyr_VegetaoNativaAID_14.set('fieldLabels', {'FID_3_7_Ve': 'inline label - visible with data', 'Rodovia': 'inline label - visible with data', 'Bioma': 'inline label - visible with data', 'Fisionom': 'inline label - visible with data', 'Estágio': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'APP': 'inline label - visible with data', 'Município': 'inline label - visible with data', });
lyr_Vicinais_15.set('fieldLabels', {'Name': 'inline label - visible with data', 'descriptio': 'inline label - visible with data', 'timestamp': 'inline label - visible with data', 'begin': 'inline label - visible with data', 'end': 'inline label - visible with data', 'altitudeMo': 'inline label - visible with data', 'tessellate': 'inline label - visible with data', 'extrude': 'inline label - visible with data', 'visibility': 'inline label - visible with data', 'drawOrder': 'inline label - visible with data', 'icon': 'inline label - visible with data', });
lyr_MalhaPrincipalSP225SP327eSP270eSPAs_16.set('fieldLabels', {'Rodovia': 'inline label - visible with data', 'Classifica': 'inline label - visible with data', });
lyr_FaixadeDomnio_17.set('fieldLabels', {'Rodovia': 'inline label - visible with data', 'Area': 'inline label - visible with data', });
lyr_MarcosQuilomtricos_18.set('fieldLabels', {'Rodovia': 'inline label - visible with data', 'km': 'inline label - visible with data', 'km2': 'inline label - visible with data', });
lyr_RecursosHdricos_19.set('fieldLabels', {'Sensibilid': 'inline label - visible with data', 'Captação': 'inline label - visible with data', 'Km_inicio': 'inline label - visible with data', 'Km_fim': 'inline label - visible with data', 'Sentido': 'inline label - visible with data', 'x': 'inline label - visible with data', 'y': 'inline label - visible with data', 'Rodovia': 'inline label - visible with data', 'Num': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Municipio': 'inline label - visible with data', 'Classe_uso': 'inline label - visible with data', 'Sensível': 'inline label - visible with data', 'Distancia': 'inline label - visible with data', });
lyr_APPs_20.set('fieldLabels', {'Sensibilid': 'inline label - visible with data', 'Captação': 'inline label - visible with data', 'Km_inicio': 'inline label - visible with data', 'Km_fim': 'inline label - visible with data', 'Sentido': 'inline label - visible with data', 'x': 'inline label - visible with data', 'y': 'inline label - visible with data', 'Rodovia': 'inline label - visible with data', 'Num': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Municipio': 'inline label - visible with data', 'Classe_uso': 'inline label - visible with data', 'Sensível': 'inline label - visible with data', 'Distancia': 'inline label - visible with data', 'layer': 'inline label - visible with data', 'path': 'inline label - visible with data', });
lyr_IntersecodeCursosDgua_21.set('fieldLabels', {'Rodovia': 'inline label - visible with data', 'km inicial': 'inline label - visible with data', 'nome': 'inline label - visible with data', 'Sensível': 'inline label - visible with data', 'dist sensi': 'inline label - visible with data', });
lyr_PotencialPaleontolgico_22.set('fieldLabels', {'Rodovia': 'inline label - visible with data', 'Km': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_StiosArqueolgicos_23.set('fieldLabels', {'Rodovia': 'inline label - visible with data', 'Km': 'inline label - visible with data', 'categoria': 'inline label - visible with data', 'Tipo': 'inline label - visible with data', 'Exposiçã': 'inline label - visible with data', 'Artefato': 'inline label - visible with data', 'CNSA': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'x': 'inline label - visible with data', 'y': 'inline label - visible with data', });
lyr_ObrasPrevistas_24.set('fieldLabels', {'Rodovia': 'inline label - visible with data', 'Km': 'inline label - visible with data', 'Tipo': 'inline label - visible with data', 'Início': 'inline label - visible with data', });
lyr_ObrasRealizadas_25.set('fieldLabels', {'Rodovia': 'inline label - visible with data', 'Obra': 'inline label - visible with data', 'Km': 'inline label - visible with data', });
lyr_OcupaesnaFaixadeDomnio_26.set('fieldLabels', {'Rodovia': 'inline label - visible with data', 'Km': 'inline label - visible with data', 'Coordenada': 'inline label - visible with data', 'Coordena_1': 'inline label - visible with data', 'Ocupaçõe': 'inline label - visible with data', 'Município': 'inline label - visible with data', 'Ações_de': 'inline label - visible with data', 'Prazo_para': 'inline label - visible with data', });
lyr_InfraestruturaLineardeTerceirosnaFaixadeDomnio_27.set('fieldLabels', {'Situacao': 'inline label - visible with data', 'Infra': 'inline label - visible with data', 'Descricao': 'inline label - visible with data', 'km': 'inline label - visible with data', 'Rodovia': 'inline label - visible with data', });
lyr_BarreirasNewJersey_28.set('fieldLabels', {'KM': 'inline label - visible with data', 'Sentido': 'inline label - visible with data', 'Rodovia': 'inline label - visible with data', 'Separador': 'inline label - visible with data', });
lyr_InstalaesdeApoioCART_29.set('fieldLabels', {'Rodovia': 'inline label - visible with data', 'Estrutura': 'inline label - visible with data', 'km': 'inline label - visible with data', });
lyr_LicenasdeInstalaoLIs_30.set('fieldLabels', {'Rodovia': 'inline label - visible with data', 'Ano': 'inline label - visible with data', 'Licença': 'inline label - visible with data', 'SIGAM': 'inline label - visible with data', 'Emissão': 'inline label - visible with data', 'Validade': 'inline label - visible with data', 'Estágio': 'inline label - visible with data', });
lyr_AutorizaodeSupressodeVegetaoASVs_31.set('fieldLabels', {'Rodovia': 'inline label - visible with data', 'Id__Vegeta': 'inline label - visible with data', 'Obra': 'inline label - visible with data', 'ASV': 'inline label - visible with data', 'TCRA': 'inline label - visible with data', });
lyr_CercasdeDirecionamentodeFauna_32.set('fieldLabels', {'OBJECTID': 'inline label - visible with data', 'id': 'inline label - visible with data', 'obs': 'inline label - visible with data', 'length': 'inline label - visible with data', 'Name': 'inline label - visible with data', 'descriptio': 'inline label - visible with data', 'idd': 'inline label - visible with data', 'Shape_Leng': 'inline label - visible with data', });
lyr_PassagensdeFauna_33.set('fieldLabels', {'id': 'inline label - visible with data', 'Km_Atual': 'inline label - visible with data', 'Km_CART': 'inline label - visible with data', 'Km_Ficha': 'inline label - visible with data', 'OBS': 'inline label - visible with data', 'Nova': 'inline label - visible with data', 'N_seccao': 'inline label - visible with data', 'km_Thais': 'inline label - visible with data', 'BD_CamTrap': 'inline label - visible with data', });
lyr_AtropelamentodeFaunaDomstica_34.set('fieldLabels', {'OBJECTID': 'inline label - visible with data', 'grupo': 'inline label - visible with data', 'nome_popul': 'inline label - visible with data', 'nome_cient': 'inline label - visible with data', 'x': 'inline label - visible with data', 'y': 'inline label - visible with data', 'fuso': 'inline label - visible with data', 'data': 'inline label - visible with data', 'rodovia': 'inline label - visible with data', 'km': 'inline label - visible with data', });
lyr_AtropelamentodeFaunaSilvestre_35.set('fieldLabels', {'OBJECTID': 'inline label - visible with data', 'grupo': 'inline label - visible with data', 'nome_popul': 'inline label - visible with data', 'nome_cient': 'inline label - visible with data', 'x': 'inline label - visible with data', 'y': 'inline label - visible with data', 'fuso': 'inline label - visible with data', 'data': 'inline label - visible with data', 'rodovia': 'inline label - visible with data', 'km': 'inline label - visible with data', });
lyr_AtropelamentodeFaunaAmeaada_36.set('fieldLabels', {'OBJECTID': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Fuso': 'inline label - visible with data', 'Data': 'inline label - visible with data', 'Rodovia': 'inline label - visible with data', 'KM': 'inline label - visible with data', 'Grupo': 'inline label - visible with data', 'Nome_Popul': 'inline label - visible with data', 'Nome_Cient': 'inline label - visible with data', 'Peso': 'inline label - visible with data', });
lyr_TrechosCrticos_37.set('fieldLabels', {'Rodovia': 'inline label - visible with data', 'Km': 'inline label - visible with data', 'Vulnerabil': 'inline label - visible with data', 'Nº_de_aci': 'inline label - visible with data', 'Medidas_de': 'inline label - visible with data', });
lyr_ContenesdePP_38.set('fieldLabels', {'Estrutura': 'inline label - visible with data', 'Km': 'inline label - visible with data', 'Rodovia': 'inline label - visible with data', });
lyr_AutosdeInfraoCETESB_39.set('fieldLabels', {'Rodovia': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Tipo': 'inline label - visible with data', 'Nº': 'inline label - visible with data', 'Emissao': 'inline label - visible with data', 'Enquad': 'inline label - visible with data', 'Valor': 'inline label - visible with data', 'Status': 'inline label - visible with data', 'Processo': 'inline label - visible with data', });
lyr_RudosReclamaes_40.set('fieldLabels', {'Rodovia': 'inline label - visible with data', 'Com_Sem Al': 'inline label - visible with data', 'Ocupacao': 'inline label - visible with data', 'RPC': 'inline label - visible with data', 'Mitigacao': 'inline label - visible with data', 'km': 'inline label - visible with data', });
lyr_reasContaminadasCETESB_41.set('fieldLabels', {'Classifica': 'inline label - visible with data', 'Grupo de C': 'inline label - visible with data', 'Medidas de': 'inline label - visible with data', 'Rodovia': 'inline label - visible with data', 'Km': 'inline label - visible with data', 'Distância': 'inline label - visible with data', 'RazaoSocia': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', });
lyr_reasDegradadas_42.set('fieldLabels', {'Rodovia': 'inline label - visible with data', 'Km': 'inline label - visible with data', 'Tipo': 'inline label - visible with data', 'Caracteriz': 'inline label - visible with data', 'Medidas__p': 'inline label - visible with data', 'Responsáv': 'inline label - visible with data', 'Prazo_para': 'inline label - visible with data', });
lyr_ProcessosErosivos_43.set('fieldLabels', {'Rodovia': 'inline label - visible with data', 'Km': 'inline label - visible with data', 'Responsáv': 'inline label - visible with data', 'Prazo_para': 'inline label - visible with data', 'Descriçã': 'inline label - visible with data', 'Data': 'inline label - visible with data', 'Risco': 'inline label - visible with data', });
lyr_ProcessosErosivos_43.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});