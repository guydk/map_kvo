var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_KadastraleKaart_1 = new ol.layer.Tile({
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
              wms_layers.push([lyr_KadastraleKaart_1, 0]);
var lyr_BeschermdNatuurNetwerk_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://service.pdok.nl/provincies/natuurnetwerk-nederland/wms/v1_0?request=GetCapabilities",
                              attributions: ' ',
                              params: {
                                "LAYERS": "PS.ProtectedSite",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Beschermd NatuurNetwerk',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_BeschermdNatuurNetwerk_2, 0]);
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

lyr_OpenStreetMap_0.setVisible(true);lyr_KadastraleKaart_1.setVisible(true);lyr_BeschermdNatuurNetwerk_2.setVisible(true);lyr_Bouwvlakkencirca260m2_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_KadastraleKaart_1,lyr_BeschermdNatuurNetwerk_2,lyr_Bouwvlakkencirca260m2_3];
lyr_Bouwvlakkencirca260m2_3.set('fieldAliases', {'fid': 'fid', 'text': 'text', });
lyr_Bouwvlakkencirca260m2_3.set('fieldImages', {'fid': 'TextEdit', 'text': '', });
lyr_Bouwvlakkencirca260m2_3.set('fieldLabels', {'fid': 'no label', 'text': 'no label', });
lyr_Bouwvlakkencirca260m2_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});