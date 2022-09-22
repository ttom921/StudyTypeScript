import { LatLngExpression } from 'leaflet';


//所有行政區
declare type Districts =
    '中正區' |
    '大同區' |
    '中山區' |
    '松山區' |
    '大安區' |
    '萬華區' |
    '信義區' |
    '士林區' |
    '北投區' |
    '內湖區' |
    '南港區' |
    '文山區'
    ;

// 參考台北市政府開放資料-台北市公共自行車即時資訊

declare type SourceUBikeInfo = {
    sno: string;    //站點代號)、
    sna: string;    //場站中文名稱)、
    tot: string;    //場站總停車格)、
    sbi: string;    //場站目前車輛數量)、
    sarea: string;  // 場站區域(中文)，如信義區
    mday: string;   //資料更新時間)、
    lat: string;    //緯度)、
    lng: string;    //經度)、
    ar: string;     //地點)中文
    sareaen: string;    //場站區域英文)、
    snaen: string;  //場站名稱英文)、
    aren: string;   //地址英文)、
    bemp: string;   //空位數量)、
    act: string;    //全站禁用狀態)、
    // srcUpdateTime(YouBike2.0系統發布資料更新的時間)、
    // updateTime(大數據平台經過處理後將資料存入DB的時間)、
    // infoTime(各場站來源資料更新時間)、
    // infoDate(各場站來源資料更新時間)
};

//希望轉換的格式
declare type UBikeInfo = {
    availableBikes: number;  //目前自行車數量 -- 對應sbi欄位
    totalBikes: number;      //所有自行車格數 -- 對應tot欄位
    latLng: LatLngExpression;//經緯度 -- 對應lat,lng欄位
    regionName: string;      //站場區域，如信義區--對應sarea
    stopName: string;        //站點名稱，如捷運市府站3號出口處--對應sna欄位
};
