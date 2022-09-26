// /src/ubike-map/MapMarkerLayer.ts

import L from "leaflet";
import { CustomMap } from "./map";



export class MapMarkerLayer implements CustomMap.MarkerLayer {
    public readonly layer = L.layerGroup();
    constructor(public readonly map: L.Map) {
        this.layer.addTo(map);
    }
    addMarker(m: CustomMap.Marker) {
        m.marker.addTo(this.layer);
    }
    addMarkers(mArray: CustomMap.Marker[]) {
        mArray.forEach(m => {
            this.addMarker(m);
        });
    }
    clear(): void {
        this.layer.clearLayers();
    }
}
//export default MapMarkerLayer;