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
var levelNormal = (function (_super) {
    __extends(levelNormal, _super);
    function levelNormal() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    levelNormal.Shared = function () {
        if (levelNormal.shared == null) {
            levelNormal.shared = new levelNormal();
        }
        return levelNormal.shared;
    };
    levelNormal.prototype.creatBlockGroup = function () {
    };
    //初始化界面
    levelNormal.prototype.init = function () {
        var group = new blockGroup();
        this.addChild(group);
        group.drawRow();
        group.addEventListener("gameOver", this.gameOver, this);
        group.addEventListener("clickRight", this.clickRight, this);
    };
    levelNormal.prototype.gameOver = function () {
        console.log('游戏结束');
    };
    levelNormal.prototype.clickRight = function () {
        console.log(Data._row());
        console.log('点击正确下一条');
    };
    return levelNormal;
}(egret.Sprite));
__reflect(levelNormal.prototype, "levelNormal");
