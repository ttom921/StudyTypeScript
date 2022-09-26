import { LatLngExpression } from 'leaflet';
// ./src/map.config.ts

//使用型別化名
export type MapConfig = {
    coordinate: LatLngExpression,
    zoomLevel: number,
    tileLayerURL: string,
    containerID: string,
};

//積極註記為MapConfig
export default {
    coordinate: [25.0330, 121.5654],
    zoomLevel: 13,
    tileLayerURL: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    containerID: 'map',
} as MapConfig;