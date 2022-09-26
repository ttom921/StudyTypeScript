import { distircts } from './districtData';
//src/index.ts

import L, { LatLngExpression, LayerGroup } from 'leaflet';

import fetchData from './fetchData';


import mapConfig from './map.config';
import { Districts, UBikeInfo } from './data';
import UBikeMapFacade from './MapFacade';


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


/**建立UBike地圖外觀 */
const mapFacade = new UBikeMapFacade(
    mapConfig,
    function (info: UBikeInfo) {
        return `
        <p>${info.regionName} - ${info.stopName}</p>
        <p>總自行車數：${info.totalBikes}</p>
        <p>可用自行車數：${info.availableBikes}</p>
        `;
    }
);

//取出目前的行政區
let currentDistrict = $selectDistrict?.value as Districts;

function updateUBikeMap(district: Districts) {
    /**繪製點位 */
    fetchData().then(data => {
        // UBike 資料轉換成點位的邏輯
        //1. 生將資料根據選到的行政區進行過濾的動作
        const selectData = data.filter(info => info.regionName === district);
        // 2. 只要把要渲染的UBike點位輸入進去
        mapFacade.pinStops(selectData);
    });
}
updateUBikeMap(currentDistrict);
/**不同的行政區應該要渲染出不同的狀況 */
$selectDistrict?.addEventListener('change', (event) => {
    //當行政區更變時，需要更新UBike地圖資訊
    // 1.取得行政區的值
    let { value } = event.target as HTMLSelectElement;
    currentDistrict = value as Districts;

    // //2.將原本的Marker除掉
    // markerLayer.remove();
    //改成使用UBikeMapFacade處理掉
    mapFacade.clearStops();

    //3.更新地圖
    updateUBikeMap(currentDistrict);

    //4.移動焦點
    mapFacade.flyto(currentDistrict);
});

