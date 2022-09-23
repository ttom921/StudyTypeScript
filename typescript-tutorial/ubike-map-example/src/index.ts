import { distircts } from './districtData';
//src/index.ts

import L, { LatLngExpression, LayerGroup } from 'leaflet';

import fetchData from './fetchData';


import mapConfig from './map.config';
import { Districts } from './data';


/**將所有的行政區 Options的HTML DOM建立起來 */
//選取<select> 標籤
const $selectDistrict = <HTMLSelectElement | null>document.getElementById("select-district");
//遍歷所有的行政區
distircts.forEach((d) => {
    //建立<option> 標籤
    const $optionTag = document.createElement('option');
    //將option標籤上value與內容
    $optionTag.setAttribute('value', d);
    $optionTag.innerText = d;
    //使用Type Guard 排除掉$selectDistrict為null的情形 
    if ($selectDistrict == null) {
        return new Error("No selet-district field provided.");
    }
    $selectDistrict.appendChild($optionTag);
});

//以下是建立地圖
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


//新增 map layer 負責渲染所有的marker
let markerLayer: LayerGroup;

//取出目前的行政區
let currentDistrict = $selectDistrict?.value as Districts;

function updateUBikeMap(district: Districts) {
    /**繪製點位 */
    fetchData().then(data => {
        // UBike 資料轉換成點位的邏輯
        //1. 生將資料根據選到的行政區進行過濾的動作
        const selectData = data.filter(info => info.regionName === district);
        // 2. 將selectData裡面的UBikeInfo轉換成Leaflet Marker
        const markers = selectData.map(data => {
            //使用L.Marker 裡面填入 LatLngExpression
            const marker = new L.Marker(data.latLng);
            //顯示UBike的資料
            marker.bindTooltip(`
        <p>${data.regionName} - ${data.stopName}</p>
        <p>總自行車數:${data.totalBikes}</p>
        <p>可用自行車數:${data.availableBikes}</p>
        `);
            marker.on('mouseover', () => {
                marker.openTooltip();
            });
            marker.on('mouserleave', () => {
                marker.closeTooltip();
            });

            return marker;
        });
        //3. 將所有的Marker丟進LayerGroup並新增到地圖裡
        markerLayer = L.layerGroup(markers);
        markerLayer.addTo(map);
    });
}
updateUBikeMap(currentDistrict);
/**不同的行政區應該要渲染出不同的狀況 */
$selectDistrict?.addEventListener('change', (event) => {
    //當行政區更變時，需要更新UBike地圖資訊
    // 1.取得行政區的值
    let { value } = event.target as HTMLSelectElement;
    currentDistrict = value as Districts;

    //2.將原本的Marker除掉
    markerLayer.remove();
    //3.更新地圖
    updateUBikeMap(currentDistrict);
});

