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
    //声明总行数
    Data._row = function () {
        var result = Math.ceil(1336 / (Data.get_width() / Data.rowNumber));
        return result;
    };
    //声明一个点击成功的函数
    //声明盒子的宽
    Data._width = 0;
    //声明盒子的高
    Data._height = 1336;
    //声明每一行的个数
    Data.rowNumber = 4;
    return Data;
}());
__reflect(Data.prototype, "Data");
