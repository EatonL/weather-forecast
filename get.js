var _fetchJsonp = require('fetch-jsonp');

var _fetchJsonp2 = _interopRequireDefault(_fetchJsonp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var url = 'http://v.juhe.cn/weather/index?format=2&cityname=%E5%8D%97%E4%BA%AC&dtype=&format=&key=7b8e105ce3c75fab84efec4ba5ea5baa';
(0, _fetchJsonp2.default)(url, { mode: "no-cors" }).then(function (response) {
    return response.json();
}).then(function (data) {
    allDate();
}).catch(function (e) {
    console.log("Oops, error");
});

function allDate() {
    writeData("position",data.result.today.city);
    writeData("time",data.result.today.data_y);
    writeData("week",data.result.today.week);
    writeData("temperature",data.result.today.temperature);
    writeData("weather",data.result.today.weather);
    writeData("uv",data.result.today.uv_index);
    writeData("dressing",data.result.today.dressing_index);
}

function writeData(a,b) {
    var out=document.getElementById(a);
    out.innerHTML=out.innerHTML+b;
}

