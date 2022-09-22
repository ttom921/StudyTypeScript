import { LatLngExpression } from 'leaflet';
import { SourceUBikeInfo, UBikeInfo, } from './data';
// ./src/fetchData.ts

let URL = 'https://tcgbusfs.blob.core.windows.net/blobyoubike/YouBikeTP.json';

export default function fetchUBikeData(url = URL) {
    return fetch(url)
        .then(result => result.json())
        //一次轉換成SourceUBikeInfo[]型別
        .then(({ retVal }) => Object.keys(retVal).map((key) => retVal[key] as SourceUBikeInfo))
        //二次轉換成UBikeInfo[]型別
        .then(sourceInfo => sourceInfo.map(sourceInfo => ({
            availableBikes: parseInt(sourceInfo.sbi, 10),
            totalBikes: parseInt(sourceInfo.tot, 10),
            latLng: <LatLngExpression>[
                parseFloat(sourceInfo.lat),
                parseFloat(sourceInfo.lng)
            ],
            regionName: sourceInfo.sarea,
            stopName: sourceInfo.sna,
        } as UBikeInfo)))
        ;
}