//src/index.ts

import L, { LatLngExpression } from 'leaflet';

import mapConfig from './map.config';

const {
    coordinate,
    zoomLevel,
    tileLayerURL,
    containerID,
} = mapConfig;

// 建立Leaflet 地圖個體,'map' 代表選擇ID為'map'的HTML元素
const map = L.map(containerID);

//設定地圖要聚焦的座標與縮放等級
map.setView(coordinate, zoomLevel);

//設定地圖的底圖為加到地圖的個體中
L.tileLayer(tileLayerURL).addTo(map);
