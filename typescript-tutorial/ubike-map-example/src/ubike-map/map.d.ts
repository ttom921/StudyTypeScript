// src/ubike-map/map.d.ts
import { MapConfig } from "../map.config";
declare namespace CustomMap {
    //宣告 Initializer介面
    export interface Initializer {
        readonly map: L.Map;
        readonly config: MapConfig;
        initialize(): void;
    }
    //宣告MarkerLayer介面
    export interface MarkerLayer {
        readonly map: L.Map;
        readonly layer: L.LayerGroup;
        addMarker(marker: Marker): void;
        addMarkers(markers: Marker[]): void;
        clear(): void;
    }
    //宣告Marker介面
    export interface Marker {
        marker: L.Marker;
        bindToolTip(content: string): void;
    }
}
