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
var block = (function (_super) {
    __extends(block, _super);
    function block() {
        var _this = _super.call(this) || this;
        //颜色的数组0黑1白2红3蓝
        _this._color = [0x000000, 0xffffff, 0xff0000, 0x0000ff];
        //第几种颜色
        _this.currennumber = 1;
        //设置小方块的颜色为黑色
        _this._type = 1;
        _this.touchEnabled = true;
        _this.draw();
        return _this;
    }
    //绘制一个方块
    block.prototype.draw = function () {
        this.width = Data.get_width() / Data.rowNumber;
        this.height = Data.get_width() / Data.rowNumber;
        this.graphics.lineStyle(1, 0x000000);
        this.graphics.beginFill(this._color[this.currennumber]);
        this.graphics.drawRect(0, 0, Data.get_width() / Data.rowNumber, Data.get_width() / Data.rowNumber);
        this.graphics.endFill();
    };
    Object.defineProperty(block.prototype, "blockColor", {
        get: function () {
            return this._type;
        },
        set: function (e) {
            this._type = e;
            this.currennumber = e;
            this.draw();
        },
        enumerable: true,
        configurable: true
    });
    //点击正确和错误颜色
    block.prototype.onBlockClick = function () {
        if (this._type == 0) {
            this.currennumber = 3;
        }
        else {
            this.currennumber = 2;
        }
        this.draw();
    };
    return block;
}(egret.Sprite));
__reflect(block.prototype, "block");
