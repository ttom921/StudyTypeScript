//src/index.ts

import L, { LatLngExpression } from 'leaflet';

//台北市的座標
const taipeiCoord: LatLngExpression = [25.0330, 121.5654];

//地圖預設的縮放等級
const zoom = 13;

// 建立Leaflet 地圖個體,'map' 代表選擇ID為'map'的HTML元素
const map = L.map('map');

//設定地圖要聚焦的座標與縮放等級
map.setView(taipeiCoord, zoom);

//設定地圖的底圖為加到地圖的個體中
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
