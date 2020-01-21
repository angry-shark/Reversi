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
            Data._height = Main.Stage.stageHeight;
        }
        return Data._height;
    };
    //声明总行数
    Data._row = function () {
        var result = Math.ceil(Data.get_height() / (Data.get_width() / Data.rowNumber));
        return result;
    };
    Object.defineProperty(Data, "Score", {
        get: function () {
            return this.score;
        },
        set: function (e) {
            this.score = e;
            gameScore.Shared().setScore(e);
        },
        enumerable: true,
        configurable: true
    });
    Data.getNowTime = function () {
        var a = new Date();
        var nowTime = a.getFullYear() + "-" + (a.getMonth() + 1) + "-" + a.getDate() + " " + a.getHours() + ":" + a.getMinutes();
        return nowTime;
    };
    //声明一个点击成功的函数
    //声明盒子的宽
    Data._width = 0;
    //声明盒子的高
    Data._height = 0;
    //声明每一行的个数
    Data.rowNumber = 4;
    //声明分数
    Data.score = 0;
    //获取当前的时间2020-1-21 17:33
    Data.nowTime = "";
    return Data;
}());
__reflect(Data.prototype, "Data");
