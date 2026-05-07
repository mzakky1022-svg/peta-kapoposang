var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_geomorphic_1 = new ol.format.GeoJSON();
var features_geomorphic_1 = format_geomorphic_1.readFeatures(json_geomorphic_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_geomorphic_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_geomorphic_1.addFeatures(features_geomorphic_1);
var lyr_geomorphic_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_geomorphic_1, 
                style: style_geomorphic_1,
                popuplayertitle: 'geomorphic',
                interactive: true,
    title: 'geomorphic<br />\
    <img src="styles/legend/geomorphic_1_0.png" /> <br />' });

lyr_OSMStandard_0.setVisible(true);lyr_geomorphic_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_geomorphic_1];
lyr_geomorphic_1.set('fieldAliases', {'class': 'class', });
lyr_geomorphic_1.set('fieldImages', {'class': 'TextEdit', });
lyr_geomorphic_1.set('fieldLabels', {'class': 'no label', });
lyr_geomorphic_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});