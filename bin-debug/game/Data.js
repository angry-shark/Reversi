var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Data = (function () {
    function Data() {
    }
    Data.get_width = function () {
        if (Data._width == 0) {
            Data._width = 640;
        }
        return Data._width;
    };
    Data.get_height = function () {
        if (Data._height == 0) {
            Data._height = 1336;
        }
        return Data._height;
    };
    //声明一个点击成功的函数
    //声明盒子的宽和高
    Data._width = 0;
    Data._height = 0;
    return Data;
}());
__reflect(Data.prototype, "Data");
