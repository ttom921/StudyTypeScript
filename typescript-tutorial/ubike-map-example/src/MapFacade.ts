import { MapConfig } from './map.config';
import { MapMarkerLayer } from './ubike-map/MapMarkerLayer';
// /src/MapFacade.ts

import { MapInitializer } from "./ubike-map/MapInitializer";
import MapSingleton from "./ubike-map/MapSingleton";
import { Districts, UBikeInfo } from './data';
import { MapMarker } from './ubike-map/MapMarker';
import { marker, LatLngExpression } from 'leaflet';
import { districtLatLngMap } from './districtData';

export default class UBikeMapFacade {
    private map: L.Map | null = MapSingleton.getInstance();
    private mapInitializer: MapInitializer;
    private mapMarkerLayer: MapMarkerLayer;
    constructor(
        config: MapConfig,
        public tooltipTemplate: (data: UBikeInfo) => string
    ) {
        //確保地圖個體為正確的狀態
        if (this.map === null) {
            throw new Error("Map isn't corretly initialized");
        }
        this.mapInitializer = new MapInitializer(this.map, config);
        this.mapMarkerLayer = new MapMarkerLayer(this.map);

        //初始化地圖
        this.mapInitializer.initialize();
    }
    pinStops(data: UBikeInfo[]) {
        //console.log("pinStops data=", data);
        // 將UBikeInfo的資料轉換成MapMarker
        const markers = data.map(info => {
            const marker = MapMarker.create(info.latLng);
            marker.bindToolTip(
                this.tooltipTemplate(info)
            );
            return marker;
        });
        // 將MapMarker[]新增到Layer裡面，我們不需要關心渲染問題，
        // 因為Layer早已把渲染過程放在MapMarkerLayer裡
        this.mapMarkerLayer.addMarkers(markers);
    }
    clearStops() {
        this.mapMarkerLayer.clear();
    }
    flyto(district: Districts) {
        //console.log("flyto =", district);
        let forcepoint = districtLatLngMap.get(district) as LatLngExpression;
        //console.log("flyto forcepoint=", forcepoint);
        this.map?.flyTo(forcepoint);
    }

}