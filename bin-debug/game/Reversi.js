var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Reversi = (function (_super) {
    __extends(Reversi, _super);
    function Reversi() {
        var _this = _super.call(this) || this;
        //颜色的数组0黑1白2红3蓝
        _this._color = [0x000000, 0xffffff, 0xff0000, 0x0000ff];
        //选择第几个颜色
        _this.currencolor = 2;
        _this.init();
        return _this;
    }
    Reversi.Shared = function () {
        if (Reversi.shared == null) {
            Reversi.shared = new Reversi();
        }
        return Reversi.shared;
    };
    Reversi.prototype.init = function () {
        // this.addChild(Back_Home.Shared())
        this.touchEnabled = true;
        this.draw();
    };
    //格子总绘画列数
    Reversi.prototype.draw = function () {
        var heighty = Data.get_height() / 160;
        for (var i = 0; i < Math.ceil(heighty); i++) {
            this.hang(i);
            console.log(Reversi.array);
        }
        // this.drawWhite(heighty,1)
    };
    //对某行某列涂白取消点击
    Reversi.prototype.drawWhite = function (e, i) {
        this.graphics.lineStyle(1, 0x000000);
        this.graphics.beginFill(this._color[1]);
        this.graphics.drawRect(i * 160, e * 160, 160, 160);
        this.graphics.endFill();
    };
    //绘制行
    Reversi.prototype.hang = function (e) {
        this.width = 160;
        this.height = 160;
        for (var i = 0; i < 4; i++) {
            // var random =Math.ceil(Math.random()*2)-1;
            this.graphics.lineStyle(1, 0x000000);
            this.graphics.beginFill(this._color[Reversi.random(i)]);
            this.graphics.drawRect(i * 160, e * 160, 160, 160);
            this.graphics.endFill();
        }
    };
    //每行的随机数
    Reversi.random = function (e) {
        var num = Math.ceil(Math.random() * 4) - 1;
        if (e == 0) {
            Reversi.array = [1, 1, 1, 1];
            Reversi.array[num] = 0;
        }
        return Reversi.array[e];
    };
    //声明一个纯白的行
    Reversi.array = [];
    return Reversi;
}(egret.Sprite));
__reflect(Reversi.prototype, "Reversi");
