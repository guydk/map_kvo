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
var lyr_KadastraleKaart_2 = new ol.layer.Tile({
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
              wms_layers.push([lyr_KadastraleKaart_2, 0]);
var format_Bouwvlakkencirca260m2_3 = new ol.format.GeoJSON();
var features_Bouwvlakkencirca260m2_3 = format_Bouwvlakkencirca260m2_3.readFeatures(json_Bouwvlakkencirca260m2_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bouwvlakkencirca260m2_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bouwvlakkencirca260m2_3.addFeatures(features_Bouwvlakkencirca260m2_3);
var lyr_Bouwvlakkencirca260m2_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bouwvlakkencirca260m2_3, 
                style: style_Bouwvlakkencirca260m2_3,
                popuplayertitle: 'Bouwvlakken circa 260m2',
                interactive: false,
                title: '<img src="styles/legend/Bouwvlakkencirca260m2_3.png" /> Bouwvlakken circa 260m2'
            });
var format_VOORBEELDVerharding_4 = new ol.format.GeoJSON();
var features_VOORBEELDVerharding_4 = format_VOORBEELDVerharding_4.readFeatures(json_VOORBEELDVerharding_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VOORBEELDVerharding_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VOORBEELDVerharding_4.addFeatures(features_VOORBEELDVerharding_4);
var lyr_VOORBEELDVerharding_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VOORBEELDVerharding_4, 
                style: style_VOORBEELDVerharding_4,
                popuplayertitle: 'VOORBEELD: Verharding',
                interactive: true,
                title: '<img src="styles/legend/VOORBEELDVerharding_4.png" /> VOORBEELD: Verharding'
            });
var format_VOORBEELDGebouwvlak_5 = new ol.format.GeoJSON();
var features_VOORBEELDGebouwvlak_5 = format_VOORBEELDGebouwvlak_5.readFeatures(json_VOORBEELDGebouwvlak_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VOORBEELDGebouwvlak_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VOORBEELDGebouwvlak_5.addFeatures(features_VOORBEELDGebouwvlak_5);
var lyr_VOORBEELDGebouwvlak_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VOORBEELDGebouwvlak_5, 
                style: style_VOORBEELDGebouwvlak_5,
                popuplayertitle: 'VOORBEELD: Gebouwvlak',
                interactive: true,
                title: '<img src="styles/legend/VOORBEELDGebouwvlak_5.png" /> VOORBEELD: Gebouwvlak'
            });
var format_VOORBEELDgebouwIndeling_6 = new ol.format.GeoJSON();
var features_VOORBEELDgebouwIndeling_6 = format_VOORBEELDgebouwIndeling_6.readFeatures(json_VOORBEELDgebouwIndeling_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VOORBEELDgebouwIndeling_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VOORBEELDgebouwIndeling_6.addFeatures(features_VOORBEELDgebouwIndeling_6);
var lyr_VOORBEELDgebouwIndeling_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VOORBEELDgebouwIndeling_6, 
                style: style_VOORBEELDgebouwIndeling_6,
                popuplayertitle: 'VOORBEELD: gebouw Indeling',
                interactive: true,
                title: '<img src="styles/legend/VOORBEELDgebouwIndeling_6.png" /> VOORBEELD: gebouw Indeling'
            });

lyr_Googlesatelite_0.setVisible(false);lyr_OpenStreetMap_1.setVisible(true);lyr_KadastraleKaart_2.setVisible(true);lyr_Bouwvlakkencirca260m2_3.setVisible(true);lyr_VOORBEELDVerharding_4.setVisible(false);lyr_VOORBEELDGebouwvlak_5.setVisible(false);lyr_VOORBEELDgebouwIndeling_6.setVisible(false);
var layersList = [lyr_Googlesatelite_0,lyr_OpenStreetMap_1,lyr_KadastraleKaart_2,lyr_Bouwvlakkencirca260m2_3,lyr_VOORBEELDVerharding_4,lyr_VOORBEELDGebouwvlak_5,lyr_VOORBEELDgebouwIndeling_6];
lyr_Bouwvlakkencirca260m2_3.set('fieldAliases', {'fid': 'fid', 'text': 'text', });
lyr_VOORBEELDVerharding_4.set('fieldAliases', {'fid': 'fid', });
lyr_VOORBEELDGebouwvlak_5.set('fieldAliases', {'fid': 'fid', });
lyr_VOORBEELDgebouwIndeling_6.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'RawCodeValues': 'RawCodeValues', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', 'ogr_style': 'ogr_style', 'font': 'font', 'angle': 'angle', 'size': 'size', 'size_u': 'size_u', 'anchor': 'anchor', 'color': 'color', 'underline': 'underline', 'plaintext': 'plaintext', 'fcolor': 'fcolor', 'flnum': 'flnum', 'bold': 'bold', 'italic': 'italic', 'dx': 'dx', 'dx_u': 'dx_u', 'dy': 'dy', 'dy_u': 'dy_u', 'path': 'path', });
lyr_Bouwvlakkencirca260m2_3.set('fieldImages', {'fid': 'TextEdit', 'text': '', });
lyr_VOORBEELDVerharding_4.set('fieldImages', {'fid': 'TextEdit', });
lyr_VOORBEELDGebouwvlak_5.set('fieldImages', {'fid': 'TextEdit', });
lyr_VOORBEELDgebouwIndeling_6.set('fieldImages', {'fid': 'TextEdit', 'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'RawCodeValues': 'JsonEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', 'ogr_style': 'TextEdit', 'font': 'TextEdit', 'angle': 'TextEdit', 'size': 'TextEdit', 'size_u': 'TextEdit', 'anchor': 'TextEdit', 'color': 'TextEdit', 'underline': 'Range', 'plaintext': 'TextEdit', 'fcolor': 'TextEdit', 'flnum': 'Range', 'bold': 'Range', 'italic': 'Range', 'dx': 'TextEdit', 'dx_u': 'TextEdit', 'dy': 'TextEdit', 'dy_u': 'TextEdit', 'path': 'TextEdit', });
lyr_Bouwvlakkencirca260m2_3.set('fieldLabels', {'fid': 'no label', 'text': 'no label', });
lyr_VOORBEELDVerharding_4.set('fieldLabels', {'fid': 'no label', });
lyr_VOORBEELDGebouwvlak_5.set('fieldLabels', {'fid': 'no label', });
lyr_VOORBEELDgebouwIndeling_6.set('fieldLabels', {'fid': 'no label', 'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'RawCodeValues': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', 'ogr_style': 'no label', 'font': 'no label', 'angle': 'no label', 'size': 'no label', 'size_u': 'no label', 'anchor': 'no label', 'color': 'no label', 'underline': 'no label', 'plaintext': 'no label', 'fcolor': 'no label', 'flnum': 'no label', 'bold': 'no label', 'italic': 'no label', 'dx': 'no label', 'dx_u': 'no label', 'dy': 'no label', 'dy_u': 'no label', 'path': 'no label', });
lyr_VOORBEELDgebouwIndeling_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});