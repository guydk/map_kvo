var wms_layers = [];


        var lyr_Googlesatelite_0 = new ol.layer.Tile({
            'title': 'Google satelite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_GROENbpSportparkDenDonk_2 = new ol.format.GeoJSON();
var features_GROENbpSportparkDenDonk_2 = format_GROENbpSportparkDenDonk_2.readFeatures(json_GROENbpSportparkDenDonk_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GROENbpSportparkDenDonk_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GROENbpSportparkDenDonk_2.addFeatures(features_GROENbpSportparkDenDonk_2);
var lyr_GROENbpSportparkDenDonk_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GROENbpSportparkDenDonk_2, 
                style: style_GROENbpSportparkDenDonk_2,
                popuplayertitle: 'GROEN bp Sportpark Den Donk',
                interactive: false,
                title: '<img src="styles/legend/GROENbpSportparkDenDonk_2.png" /> GROEN bp Sportpark Den Donk'
            });
var format_SPORTbpSportparkDenDonk5maxbebouwd_3 = new ol.format.GeoJSON();
var features_SPORTbpSportparkDenDonk5maxbebouwd_3 = format_SPORTbpSportparkDenDonk5maxbebouwd_3.readFeatures(json_SPORTbpSportparkDenDonk5maxbebouwd_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SPORTbpSportparkDenDonk5maxbebouwd_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPORTbpSportparkDenDonk5maxbebouwd_3.addFeatures(features_SPORTbpSportparkDenDonk5maxbebouwd_3);
var lyr_SPORTbpSportparkDenDonk5maxbebouwd_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SPORTbpSportparkDenDonk5maxbebouwd_3, 
                style: style_SPORTbpSportparkDenDonk5maxbebouwd_3,
                popuplayertitle: 'SPORT bp Sportpark Den Donk(5% max bebouwd)',
                interactive: false,
                title: '<img src="styles/legend/SPORTbpSportparkDenDonk5maxbebouwd_3.png" /> SPORT bp Sportpark Den Donk(5% max bebouwd)'
            });
var format_ZonekwaliteitsverbeteringlandschapbpSportparkDenDonk_4 = new ol.format.GeoJSON();
var features_ZonekwaliteitsverbeteringlandschapbpSportparkDenDonk_4 = format_ZonekwaliteitsverbeteringlandschapbpSportparkDenDonk_4.readFeatures(json_ZonekwaliteitsverbeteringlandschapbpSportparkDenDonk_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZonekwaliteitsverbeteringlandschapbpSportparkDenDonk_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonekwaliteitsverbeteringlandschapbpSportparkDenDonk_4.addFeatures(features_ZonekwaliteitsverbeteringlandschapbpSportparkDenDonk_4);
var lyr_ZonekwaliteitsverbeteringlandschapbpSportparkDenDonk_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZonekwaliteitsverbeteringlandschapbpSportparkDenDonk_4, 
                style: style_ZonekwaliteitsverbeteringlandschapbpSportparkDenDonk_4,
                popuplayertitle: 'Zone kwaliteitsverbetering landschap bp Sportpark Den Donk',
                interactive: false,
                title: '<img src="styles/legend/ZonekwaliteitsverbeteringlandschapbpSportparkDenDonk_4.png" /> Zone kwaliteitsverbetering landschap bp Sportpark Den Donk'
            });
var format_EcologischeverbindingszonedbDenDonk_5 = new ol.format.GeoJSON();
var features_EcologischeverbindingszonedbDenDonk_5 = format_EcologischeverbindingszonedbDenDonk_5.readFeatures(json_EcologischeverbindingszonedbDenDonk_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EcologischeverbindingszonedbDenDonk_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EcologischeverbindingszonedbDenDonk_5.addFeatures(features_EcologischeverbindingszonedbDenDonk_5);
var lyr_EcologischeverbindingszonedbDenDonk_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EcologischeverbindingszonedbDenDonk_5, 
                style: style_EcologischeverbindingszonedbDenDonk_5,
                popuplayertitle: 'Ecologische verbindingszone db Den Donk',
                interactive: false,
                title: '<img src="styles/legend/EcologischeverbindingszonedbDenDonk_5.png" /> Ecologische verbindingszone db Den Donk'
            });
var format_Recreatiefunctievolkstuinenbpwoongebieden_6 = new ol.format.GeoJSON();
var features_Recreatiefunctievolkstuinenbpwoongebieden_6 = format_Recreatiefunctievolkstuinenbpwoongebieden_6.readFeatures(json_Recreatiefunctievolkstuinenbpwoongebieden_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Recreatiefunctievolkstuinenbpwoongebieden_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Recreatiefunctievolkstuinenbpwoongebieden_6.addFeatures(features_Recreatiefunctievolkstuinenbpwoongebieden_6);
var lyr_Recreatiefunctievolkstuinenbpwoongebieden_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Recreatiefunctievolkstuinenbpwoongebieden_6, 
                style: style_Recreatiefunctievolkstuinenbpwoongebieden_6,
                popuplayertitle: 'Recreatie functie volkstuinen bp woongebieden ',
                interactive: false,
                title: '<img src="styles/legend/Recreatiefunctievolkstuinenbpwoongebieden_6.png" /> Recreatie functie volkstuinen bp woongebieden '
            });
var format_Tuinbpbuitengebied_7 = new ol.format.GeoJSON();
var features_Tuinbpbuitengebied_7 = format_Tuinbpbuitengebied_7.readFeatures(json_Tuinbpbuitengebied_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tuinbpbuitengebied_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tuinbpbuitengebied_7.addFeatures(features_Tuinbpbuitengebied_7);
var lyr_Tuinbpbuitengebied_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tuinbpbuitengebied_7, 
                style: style_Tuinbpbuitengebied_7,
                popuplayertitle: 'Tuin bp buitengebied',
                interactive: false,
                title: '<img src="styles/legend/Tuinbpbuitengebied_7.png" /> Tuin bp buitengebied'
            });
var lyr_KadastraleKaart_8 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://service.pdok.nl/kadaster/kadastralekaart/wms/v5_0?request=GetCapabilities",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Kadastralekaart",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'KadastraleKaart',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_KadastraleKaart_8, 0]);
var format_Mogelijkebouwvlakkenkanoverenigngcirca260m2_9 = new ol.format.GeoJSON();
var features_Mogelijkebouwvlakkenkanoverenigngcirca260m2_9 = format_Mogelijkebouwvlakkenkanoverenigngcirca260m2_9.readFeatures(json_Mogelijkebouwvlakkenkanoverenigngcirca260m2_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mogelijkebouwvlakkenkanoverenigngcirca260m2_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mogelijkebouwvlakkenkanoverenigngcirca260m2_9.addFeatures(features_Mogelijkebouwvlakkenkanoverenigngcirca260m2_9);
var lyr_Mogelijkebouwvlakkenkanoverenigngcirca260m2_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mogelijkebouwvlakkenkanoverenigngcirca260m2_9, 
                style: style_Mogelijkebouwvlakkenkanoverenigngcirca260m2_9,
                popuplayertitle: 'Mogelijke bouwvlakken kanoverenigng,  circa 260m2',
                interactive: false,
                title: '<img src="styles/legend/Mogelijkebouwvlakkenkanoverenigngcirca260m2_9.png" /> Mogelijke bouwvlakken kanoverenigng,  circa 260m2'
            });
var format_hulplijnen_10 = new ol.format.GeoJSON();
var features_hulplijnen_10 = format_hulplijnen_10.readFeatures(json_hulplijnen_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hulplijnen_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hulplijnen_10.addFeatures(features_hulplijnen_10);
var lyr_hulplijnen_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hulplijnen_10, 
                style: style_hulplijnen_10,
                popuplayertitle: 'hulplijnen',
                interactive: false,
                title: '<img src="styles/legend/hulplijnen_10.png" /> hulplijnen'
            });

lyr_Googlesatelite_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_GROENbpSportparkDenDonk_2.setVisible(false);lyr_SPORTbpSportparkDenDonk5maxbebouwd_3.setVisible(false);lyr_ZonekwaliteitsverbeteringlandschapbpSportparkDenDonk_4.setVisible(false);lyr_EcologischeverbindingszonedbDenDonk_5.setVisible(false);lyr_Recreatiefunctievolkstuinenbpwoongebieden_6.setVisible(false);lyr_Tuinbpbuitengebied_7.setVisible(false);lyr_KadastraleKaart_8.setVisible(true);lyr_Mogelijkebouwvlakkenkanoverenigngcirca260m2_9.setVisible(true);lyr_hulplijnen_10.setVisible(false);
var layersList = [lyr_Googlesatelite_0,lyr_OpenStreetMap_1,lyr_GROENbpSportparkDenDonk_2,lyr_SPORTbpSportparkDenDonk5maxbebouwd_3,lyr_ZonekwaliteitsverbeteringlandschapbpSportparkDenDonk_4,lyr_EcologischeverbindingszonedbDenDonk_5,lyr_Recreatiefunctievolkstuinenbpwoongebieden_6,lyr_Tuinbpbuitengebied_7,lyr_KadastraleKaart_8,lyr_Mogelijkebouwvlakkenkanoverenigngcirca260m2_9,lyr_hulplijnen_10];
lyr_GROENbpSportparkDenDonk_2.set('fieldAliases', {'fid': 'fid', });
lyr_SPORTbpSportparkDenDonk5maxbebouwd_3.set('fieldAliases', {'gml_id': 'gml_id', 'namespace': 'namespace', 'lokaalID': 'lokaalID', 'typePlanobject': 'typePlanobject', 'naam': 'naam', 'symboolCode': 'symboolCode', 'waarde': 'waarde', 'waardeType': 'waardeType', 'maatvoeringInfo|WaardeEnType|symboolCode': 'maatvoeringInfo|WaardeEnType|symboolCode', });
lyr_ZonekwaliteitsverbeteringlandschapbpSportparkDenDonk_4.set('fieldAliases', {'gml_id': 'gml_id', 'namespace': 'namespace', 'lokaalID': 'lokaalID', 'typePlanobject': 'typePlanobject', 'naam': 'naam', 'gebiedsaanduidinggroep': 'gebiedsaanduidinggroep', 'artikelnummer': 'artikelnummer', 'verwijzingNaarTekst': 'verwijzingNaarTekst', 'typeTekst': 'typeTekst', });
lyr_EcologischeverbindingszonedbDenDonk_5.set('fieldAliases', {'fid': 'fid', 'gml_id': 'gml_id', 'namespace': 'namespace', 'lokaalID': 'lokaalID', 'typePlanobject': 'typePlanobject', 'naam': 'naam', 'tekst': 'tekst', });
lyr_Recreatiefunctievolkstuinenbpwoongebieden_6.set('fieldAliases', {'fid': 'fid', 'gml_id': 'gml_id', 'identificatie': 'identificatie', 'typePlanobject': 'typePlanobject', 'naam': 'naam', 'tekst': 'tekst', });
lyr_Tuinbpbuitengebied_7.set('fieldAliases', {'fid': 'fid', 'gml_id': 'gml_id', 'namespace': 'namespace', 'lokaalID': 'lokaalID', 'typePlanobject': 'typePlanobject', 'naam': 'naam', 'bestemmingshoofdgroep': 'bestemmingshoofdgroep', 'artikelnummer': 'artikelnummer', 'verwijzingNaarTekst': 'verwijzingNaarTekst', 'typeTekst': 'typeTekst', 'tekst': 'tekst', });
lyr_Mogelijkebouwvlakkenkanoverenigngcirca260m2_9.set('fieldAliases', {'fid': 'fid', 'text': 'text', });
lyr_hulplijnen_10.set('fieldAliases', {'fid': 'fid', });
lyr_GROENbpSportparkDenDonk_2.set('fieldImages', {'fid': 'TextEdit', });
lyr_SPORTbpSportparkDenDonk5maxbebouwd_3.set('fieldImages', {'gml_id': 'TextEdit', 'namespace': 'TextEdit', 'lokaalID': 'TextEdit', 'typePlanobject': 'TextEdit', 'naam': 'TextEdit', 'symboolCode': 'TextEdit', 'waarde': 'List', 'waardeType': 'List', 'maatvoeringInfo|WaardeEnType|symboolCode': 'List', });
lyr_ZonekwaliteitsverbeteringlandschapbpSportparkDenDonk_4.set('fieldImages', {'gml_id': 'TextEdit', 'namespace': 'TextEdit', 'lokaalID': 'TextEdit', 'typePlanobject': 'TextEdit', 'naam': 'TextEdit', 'gebiedsaanduidinggroep': 'TextEdit', 'artikelnummer': 'TextEdit', 'verwijzingNaarTekst': 'TextEdit', 'typeTekst': 'TextEdit', });
lyr_EcologischeverbindingszonedbDenDonk_5.set('fieldImages', {'fid': 'TextEdit', 'gml_id': 'TextEdit', 'namespace': 'TextEdit', 'lokaalID': 'TextEdit', 'typePlanobject': 'TextEdit', 'naam': 'TextEdit', 'tekst': 'TextEdit', });
lyr_Recreatiefunctievolkstuinenbpwoongebieden_6.set('fieldImages', {'fid': 'TextEdit', 'gml_id': 'TextEdit', 'identificatie': 'TextEdit', 'typePlanobject': 'TextEdit', 'naam': 'TextEdit', 'tekst': 'TextEdit', });
lyr_Tuinbpbuitengebied_7.set('fieldImages', {'fid': 'TextEdit', 'gml_id': 'TextEdit', 'namespace': 'TextEdit', 'lokaalID': 'TextEdit', 'typePlanobject': 'TextEdit', 'naam': 'TextEdit', 'bestemmingshoofdgroep': 'TextEdit', 'artikelnummer': 'TextEdit', 'verwijzingNaarTekst': 'TextEdit', 'typeTekst': 'TextEdit', 'tekst': 'TextEdit', });
lyr_Mogelijkebouwvlakkenkanoverenigngcirca260m2_9.set('fieldImages', {'fid': 'TextEdit', 'text': 'TextEdit', });
lyr_hulplijnen_10.set('fieldImages', {'fid': '', });
lyr_GROENbpSportparkDenDonk_2.set('fieldLabels', {'fid': 'no label', });
lyr_SPORTbpSportparkDenDonk5maxbebouwd_3.set('fieldLabels', {'gml_id': 'no label', 'namespace': 'no label', 'lokaalID': 'no label', 'typePlanobject': 'no label', 'naam': 'no label', 'symboolCode': 'no label', 'waarde': 'no label', 'waardeType': 'no label', 'maatvoeringInfo|WaardeEnType|symboolCode': 'no label', });
lyr_ZonekwaliteitsverbeteringlandschapbpSportparkDenDonk_4.set('fieldLabels', {'gml_id': 'no label', 'namespace': 'no label', 'lokaalID': 'no label', 'typePlanobject': 'no label', 'naam': 'no label', 'gebiedsaanduidinggroep': 'no label', 'artikelnummer': 'no label', 'verwijzingNaarTekst': 'no label', 'typeTekst': 'no label', });
lyr_EcologischeverbindingszonedbDenDonk_5.set('fieldLabels', {'fid': 'no label', 'gml_id': 'no label', 'namespace': 'no label', 'lokaalID': 'no label', 'typePlanobject': 'no label', 'naam': 'no label', 'tekst': 'no label', });
lyr_Recreatiefunctievolkstuinenbpwoongebieden_6.set('fieldLabels', {'fid': 'no label', 'gml_id': 'no label', 'identificatie': 'no label', 'typePlanobject': 'no label', 'naam': 'no label', 'tekst': 'no label', });
lyr_Tuinbpbuitengebied_7.set('fieldLabels', {'fid': 'no label', 'gml_id': 'no label', 'namespace': 'no label', 'lokaalID': 'no label', 'typePlanobject': 'no label', 'naam': 'no label', 'bestemmingshoofdgroep': 'no label', 'artikelnummer': 'no label', 'verwijzingNaarTekst': 'no label', 'typeTekst': 'no label', 'tekst': 'no label', });
lyr_Mogelijkebouwvlakkenkanoverenigngcirca260m2_9.set('fieldLabels', {'fid': 'no label', 'text': 'no label', });
lyr_hulplijnen_10.set('fieldLabels', {'fid': 'no label', });
lyr_hulplijnen_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});