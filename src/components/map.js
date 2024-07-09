(() => ({
  name: 'Map',
  type: 'CONTENT_COMPONENT',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
        const { env, useText, Link: BLink, useAllQuery, useFilter, getProperty } = B;
        const isDev = env === 'dev';
        const { L } = window

        const makeId = (length = 16) => {
          let result = '';
          const characters =
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
          const charactersLength = characters.length;
          for (let i = 0; i < length; i += 1) {
            result += characters.charAt(
              Math.floor(Math.random() * charactersLength),
            );
          }
          return result;
        };
        const componentId = 'map-' + makeId()
        
        const [mapSettingState, setMapSettingState] = useState({});

        const mapSetting = {
          mapId: componentId,
          map: {},
          controls: {},
          baseMaps: {},
          layers: {}
        }
        console.log('mapSettingState', mapSettingState);

        const { model, filter, order, orderBy, displayError } = options;
        const where = useFilter(filter);

        let orderByPath = null;
        if (orderBy && Array.isArray(orderBy.id)) {
          orderByPath = orderBy.id;
        } else if (orderBy && orderBy.id) {
          orderByPath = [orderBy.id];
        }
        const sort =
          !isDev && orderByPath
            ? orderByPath.reduceRight((acc, property, index) => {
                const prop = getProperty(property);
                return index === orderByPath.length - 1
                  ? { [prop.name]: order.toUpperCase() }
                  : { [prop.name]: acc };
              }, {})
            : {};

        const { loading, error, data: modelData, refetch } =
          model &&
          !isDev &&
          useAllQuery(model, {
            rawFilter: where,
            skip: 0,
            take: 200,
            variables: {
              ...(orderByPath ? { sort: { relation: sort } } : {}),
            },
            onCompleted(res) {
              const hasResult = res && res.results && res.results.length > 0;
              if (hasResult) {
                B.triggerEvent('onSuccess', res.results);
                processData(modelData.results)
              } else {
                B.triggerEvent('onNoResults');
              }
            },
            onError(resp) {
              if (!displayError) {
                B.triggerEvent('onError', resp);
              }
            },
          });

        function clickInteraction(e) {
          console.log('e', e)
          if (e.target.feature.properties.id) {
            B.triggerEvent('clickOnFeature', e.target.feature.properties.id)
          }
        }

        function onEachFeature(feature, layer) {
          // popupContent
          if (feature.properties && feature.properties.popupContent) {
              layer.bindPopup(feature.properties.popupContent);
          }
          // interaction
          layer.on({
            click: clickInteraction
          });
          
        }


         //Add layer to legendControl
         function addOverlayMapToLegendControl(map, layer, layerName, layerLegendcolor ) {
          if (options.legend) {
            const listElement = mapSettingState.controls.legendControl.getContainer().querySelector('ul')
            const listItem = `<a href="#" style="width: auto; line-height: 1; height: auto; border: none; text-align: start; padding: 3px 2px; --marker-color: ${layerLegendcolor};"><li>${layerName}</li></a>`
            listElement.insertAdjacentHTML('beforeend', listItem)
            const listItemElement = listElement.lastChild
            listItemElement.addEventListener('click', () => {
              if (mapSettingState.map.hasLayer(layer)) { 
                mapSettingState.map.removeLayer(layer) 
                listItemElement.style.textDecoration = "line-through"
              }
              else { 
                mapSettingState.map.addLayer(layer) 
                listItemElement.style.textDecoration = "none"
              }
            })
          }
        }

        const processData = (results) => {
          function addFeatureToMap(map, layerName, layerLegendColor, feature) {
            // add overlayMap to map
            if (!mapSettingState.controls.layerControl._layers.some(_layer => _layer.name == layerName)) {
              mapSettingState.layers[layerName] = L.geoJSON(false, { onEachFeature: onEachFeature }).addTo(mapSettingState.map)
              mapSettingState.controls.layerControl.addOverlay(mapSettingState.layers[layerName], layerName)

              addOverlayMapToLegendControl(mapSettingState.map, mapSettingState.layers[layerName], layerName, layerLegendColor )

            }
            // Add data to overlayMap
            mapSettingState.layers[layerName].addData(feature)
          }

      
          // if data is a collection of layers that can have multiple features
          if (options.dataFormat == "layers") {
            const geojsonLayerPropertyName = B.getProperty(options.geojsonLayer)?.name;
            const layerGroupPropertyName = B.getProperty(options.layerGroup)?.name;
            const layerLegendColorPropertyName = B.getProperty(options.layerLegendColor)?.name;

            results.forEach(record => {
              const geojsonLayer = JSON.parse(record[geojsonLayerPropertyName])
              const layerName = record[layerGroupPropertyName] || "data";
              const layerLegendColor = record[layerLegendColorPropertyName] || "var(--color-primary)";
              
              geojsonLayer.features.forEach(feature => {
                const data = {
                  "type": "Feature",
                  "properties": feature.properties,
                  "geometry": feature.geometry
                }
                addFeatureToMap(mapSettingState.map, layerName, layerLegendColor, data)
              })

            })


          }

          // if data is a collection of single features
          if (options.dataFormat == "features") {

            const geometryPropertyName = B.getProperty(options.geometry)?.name;
            const popupcontentPropertyName = B.getProperty(options.popupcontent)?.name;
            const layerGroupPropertyName = B.getProperty(options.layerGroup)?.name;
            const layerLegendColorPropertyName = B.getProperty(options.layerLegendColor)?.name;

            // add data to map
            results.forEach(record => {
              const data = {
                "type": "Feature",
                "properties": {
                  "id":  record["id"],
                  "uuid": record["uuid"],
                  "popupContent": record[popupcontentPropertyName]
                },
                "geometry": JSON.parse(record[geometryPropertyName])
              }

              const layerName = record[layerGroupPropertyName] || "data";
              const layerLegendColor = record[layerLegendColorPropertyName] || "var(--color-primary)";
              addFeatureToMap(mapSettingState.map, layerName, layerLegendColor, data)
      
            })
          }
          console.log('mapSettingState', mapSettingState)


          

          
          //Zoom to bounds on load (if zoom to user location is false)
          const zoomToUserLocation = options.userLocation && options.ZoomToUserLocation
          if (options.fitBoundsOnLoad && !zoomToUserLocation) {
            const layersWithBounds = Object.values(mapSettingState.map._layers).filter((_layer) => _layer._bounds && _layer._bounds._northEast && _layer._bounds._southWest)
            const layersWithLatLngs = Object.values(mapSettingState.map._layers).filter((_layer) => _layer._latlng && _layer._latlng.lat && _layer._latlng.lng)
            const bounds = L.latLngBounds()

            layersWithBounds.forEach((_layer) => {
              bounds.extend(_layer._bounds)
            })
            layersWithLatLngs.forEach((_layer) => {
              bounds.extend(_layer._latlng)
            })

            mapSettingState.map.flyToBounds(bounds, {padding: [10,10], maxZoom: 14} )
          }

        }

        // Interactions
        B.defineFunction('ZoomToFeature', (e) => zoomToFeature(e));
        function zoomToFeature(e) {
          const dataElement = e.target.closest("tr[data-id]")
          const id = dataElement.dataset.id
          const layers = Object.values(mapSettingState.map._layers)
          const layerToZoomTo = layers.find((layer) => layer.feature?.properties?.id == id )

          if (layerToZoomTo.feature.geometry.type == "Point") {
            mapSettingState.map.flyTo(layerToZoomTo._latlng, 15 )
          }
          else {
            mapSettingState.map.flyToBounds(layerToZoomTo._latlngs, {padding: [10,10], maxZoom: 14} )
          }
        }



        // initialize map
        useEffect(() => {
          if (isDev) return

          const mapSetting = {
            mapId: componentId,
            map: {},
            controls: {},
            baseMaps: {},
            layers: {}
          }
          console.log('mapSettingState', mapSettingState);

          ///// Layer EPSG:28992 Projection //////     
          var RD = new L.Proj.CRS(
            'EPSG:28992', 
            '+proj=sterea +lat_0=52.15616055555555 +lon_0=5.38763888888889 +k=0.9999079 +x_0=155000 +y_0=463000 +ellps=bessel +units=m +towgs84=565.2369,50.0087,465.658,-0.406857330322398,0.350732676542563,-1.8703473836068,4.0812 +no_defs', {
              transformation: L.Transformation(-1, -1, 0, 0),
              resolutions: [3440.640, 1720.320, 860.160, 430.080, 215.040, 107.520, 53.760, 26.880, 13.440, 6.720, 3.360, 1.680, 0.840, 0.420, 0.210, 0.105, 0.050],
              origin: [-285401.920, 903401.920],
              bounds: L.bounds([-285401.920, 903401.920], [595401.920, 22598.080])
            });

          ///// Layer EPSG:28992 luchtfoto //////           
          var layerLuchtfoto	= new L.tileLayer('https://service.pdok.nl/hwh/luchtfotorgb/wmts/v1_0/Actueel_ortho25/EPSG:28992/{z}/{x}/{y}.png', {
            minZoom: 0,
            maxZoom: 18,
            maxNativeZoom: 15,
            tms: false,
            attribution: 'Luchtfoto (PDOK-achtergrond): © <a title="Publieke Dienstverlening Op de Kaart" href="https://www.pdok.nl/">PDOK</a> - <a href="http://creativecommons.org/licenses/by/4.0/">CC-BY</a>',
          });
          ///// Layer EPSG:28992 brt standaard //////           
          var layerBrtStandaard	= new L.tileLayer('https://service.pdok.nl/brt/achtergrondkaart/wmts/v2_0/standaard/EPSG:28992/{z}/{x}/{y}.png', {
            minZoom: 0,
            maxZoom: 18,
            maxNativeZoom: 14,
            tms: false,
            attribution: 'BRT achtergrondkaart: © <a href="http://www.kadaster.nl">Kadaster</a>, Basisregistratie Topografie (BRT) - <a href="http://creativecommons.org/licenses/by/4.0/">CC-BY</a>',
          });

          ///// Layer EPSG:28992 brt grijs //////           
          var layerBrtGrijs	= new L.tileLayer('https://service.pdok.nl/brt/achtergrondkaart/wmts/v2_0/grijs/EPSG:28992/{z}/{x}/{y}.png', {
            minZoom: 0,
            maxZoom: 18,
            maxNativeZoom: 14,
            tms: false,
            attribution: 'BRT achtergrondkaart: © <a href="http://www.kadaster.nl">Kadaster</a>, Basisregistratie Topografie (BRT) - <a href="http://creativecommons.org/licenses/by/4.0/">CC-BY</a>',
          });
          ///// Layer EPSG:28992 brt pastel //////           
          var layerBrtPastel	= new L.tileLayer('https://service.pdok.nl/brt/achtergrondkaart/wmts/v2_0/pastel/EPSG:28992/{z}/{x}/{y}.png', {
            minZoom: 0,
            maxZoom: 18,
            maxNativeZoom: 14,
            tms: false,
            attribution: 'BRT achtergrondkaart: © <a href="http://www.kadaster.nl">Kadaster</a>, Basisregistratie Topografie (BRT) - <a href="http://creativecommons.org/licenses/by/4.0/">CC-BY</a>',
          });
          ///// Layer EPSG:28992 brt water //////           
          var layerBrtWater	= new L.tileLayer('https://service.pdok.nl/brt/achtergrondkaart/wmts/v2_0/water/EPSG:28992/{z}/{x}/{y}.png', {
            minZoom: 0,
            maxZoom: 18,
            maxNativeZoom: 14,
            tms: false,
            attribution: 'BRT achtergrondkaart: © <a href="http://www.kadaster.nl">Kadaster</a>, Basisregistratie Topografie (BRT) - <a href="http://creativecommons.org/licenses/by/4.0/">CC-BY</a>',
          });

          ///// Layer EPSG:28992 bgt //////           
          var layerBgt	= new L.tileLayer('https://service.pdok.nl/lv/bgt/wmts/v1_0/standaardvisualisatie/EPSG:28992/{z}/{x}/{y}.png', {
            minZoom: 12,
            maxZoom: 18,
            maxNativeZoom: 14,
            tms: false,
            attribution: 'Bgt achtergrondkaart: © <a href="http://www.kadaster.nl">Kadaster</a>, Basisregistratie Grootschalige Topografie (BGT) - <a href="http://creativecommons.org/licenses/by/4.0/">CC-BY</a>',
          });

          // baselayers to use
          const baseLayers = {};
          if (options.baselayerLuchtfoto) { baseLayers["Luchtfoto"] = layerLuchtfoto }
          if (options.baselayerBrtStandaard) { baseLayers["Brt standaard"] = layerBrtStandaard }
          if (options.baselayerBrtGrijs) { baseLayers["Brt grijs"] = layerBrtGrijs }
          if (options.baselayerBrtPastel) { baseLayers["Brt pastel"] = layerBrtPastel }
          if (options.baselayerBrtWater) { baseLayers["Brt water"] = layerBrtWater }
          if (options.baselayerBgt) { baseLayers["Bgt"] = layerBgt }
          
          // default if no baseLayers selected
          if (Object.keys(baseLayers).length === 0) { baseLayers["Luchtfoto"] = layerLuchtfoto }
          mapSetting.baseMaps = baseLayers


          // check if default location variables are numbers
          const decimalPattern = /^-?\d*\.?\d+$/;
          let mapCenterLat = useText(options.centerLat)
          let mapCenterLng = useText(options.centerLng)
          let mapCenterZoom = useText(options.defaultZoom)
          if (!decimalPattern.test(mapCenterLat)) { mapCenterLat = 52.3867431 }
          if (!decimalPattern.test(mapCenterLng)) { mapCenterLng = 4.6347241 }
          if (!decimalPattern.test(mapCenterZoom)) { mapCenterZoom = 10 }

          mapSetting.map = L.map(mapSetting.mapId, {
            center: [mapCenterLat, mapCenterLng],
            zoom: mapCenterZoom,
            crs: RD,
            layers: [mapSetting.baseMaps[Object.keys(mapSetting.baseMaps)[0]]]
          });

          // add layercontrol for baselayers and overlayMaps
          mapSetting.controls.layerControl = L.control.layers(mapSetting.baseMaps, mapSetting.layers).addTo(mapSetting.map);


          // add fullscreen control
          if (options.fullscreen) {
            const fullScreenControl = L.control({ position: 'topleft' })
            fullScreenControl.onAdd = () => {
              const element = L.DomUtil.create('div', 'leaflet-bar leaflet-control');
              element.innerHTML = `<a class="leaflet-control-button" style="cursor: pointer;"><svg viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"></path></svg></a>`;
              element.addEventListener('click', () => {
                if (document.fullscreenElement) { document.exitFullscreen(); } 
                else { 
                  element.closest('[id^=map').requestFullscreen(); }
              });
              return element;
            }
            mapSetting.controls.fullScreenControl = fullScreenControl
            fullScreenControl.addTo(mapSetting.map);
          }

          // add legend control
          if (options.legend) {
            mapSetting.controls.legendControl = L.control({ position: 'bottomleft' })
            mapSetting.controls.legendControl.onAdd = () => {
              const element = L.DomUtil.create('div', 'leaflet-bar leaflet-control');
              element.style = `background-color: #fff;`
              element.innerHTML = `<style>.leaflet-control-legend > ul li::marker { content: '■'; color: var(--marker-color, red); font-size: 1.6em; }</style><div class="leaflet-control-legend" style="padding: 6px 8px"><h4 style="margin: 0; padding: 0;">Legenda</h4><ul style="margin: 0; padding: 6px;"></ul</div>`
              return element;
            }
            
            mapSetting.controls.legendControl.addTo(mapSetting.map)

          }

          // get user location
          if (options.userLocation) {
            if (options.ZoomToUserLocation) { mapSetting.map.locate({setView: true, maxZoom: 16}) } 
            else { mapSetting.map.locate() }
            function onLocationFound(e) {
              var radius = e.accuracy;
              const marker = L.marker(e.latlng).bindPopup("You are within " + Math.round(radius, 0) + " meters from this point").openPopup();
              const area = L.circle(e.latlng, radius)
              mapSetting.layers.yourLocationLayer = L.layerGroup([marker, area]).addTo(mapSetting.map)
              mapSetting.controls.layerControl.addOverlay(mapSetting.layers.yourLocationLayer, "Your location")
              addOverlayMapToLegendControl(mapSetting.map, mapSetting.layers.yourLocationLayer, mapSetting.controls.legendControl, "Your location", "var(--color-primary)" )
            }
            mapSetting.map.on('locationfound', onLocationFound);
          } 
          
          setMapSettingState(mapSetting)
          console.log('mapSettingState', mapSettingState);
        },[])
     
        if (isDev) {
          return (
            <div class={classes['map-wrapper']}>
              <div class={classes['map-placeholder']}></div>
            </div>
          );
        }
        if (!isDev) {
          return (
            <div class={classes['map-wrapper']}>
              <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin="" />
              <div id={mapSettingState.mapId} class={classes['map']}></div>
            </div>
          );
        }
      })(),
  styles: (B) => (t) => {
    const { mediaMinWidth, Styling } = B;
    const style = new Styling(t);
    const getSpacing = (idx, device = 'Mobile') =>
      idx === '0' ? '0rem' : style.getSpacing(idx, device);

    return {
      'map-wrapper': {
        margin: 0,
        padding: 0,
        width: ({ options: { width } }) => (width || '100%'),
        height: ({ options: { height } }) => (height || '100%'),
        minWidth: '100px',
        minHeight: '100px',
      },
      map: {
        width: '100%',
        height: '100%',
      },
      'map-placeholder': {
        backgroundColor: 'hsl(220, 23%, 97%)',
        width: '100%',
        height: '100%',
      },
      'leaflet-control-legend': {
        backgroundColor: '#fff',
        color: 'black',
      }
    };
  },
}))();
