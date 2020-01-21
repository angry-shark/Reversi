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
var gameScore = (function (_super) {
    __extends(gameScore, _super);
    function gameScore() {
        return _super.call(this) || this;
    }
    gameScore.Shared = function () {
        if (gameScore.shared == null) {
            gameScore.shared = new gameScore();
        }
        return gameScore.shared;
    };
    gameScore.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    gameScore.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.init();
    };
    gameScore.prototype.init = function () {
        this.y -= Data.get_height() - this.parent.height;
    };
    gameScore.prototype.setScore = function (val) {
        var n = String(val);
        this.lb_Score.text = n;
    };
    return gameScore;
}(eui.Component));
__reflect(gameScore.prototype, "gameScore", ["eui.UIComponent", "egret.DisplayObject"]);
