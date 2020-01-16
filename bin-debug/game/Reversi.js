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
    Reversi.prototype.init = function () {
        this.touchEnabled = true;
        for (var i = 0; i < 4; i++) {
            this.currencolor = i;
            this.draw(i * 160, 0);
        }
    };
    Reversi.prototype.draw = function (x, y) {
        this.width = 160;
        this.height = 160;
        this.graphics.lineStyle(1, 0x000000);
        this.graphics.beginFill(this._color[this.currencolor]);
        this.graphics.drawRect(x, y, 160, 160);
        this.graphics.endFill();
    };
    return Reversi;
}(egret.Sprite));
__reflect(Reversi.prototype, "Reversi");
