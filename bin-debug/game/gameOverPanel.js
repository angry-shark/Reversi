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
var gameOverPanel = (function (_super) {
    __extends(gameOverPanel, _super);
    function gameOverPanel() {
        return _super.call(this) || this;
    }
    gameOverPanel.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    gameOverPanel.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.init();
    };
    gameOverPanel.prototype.init = function () {
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.back_home, this);
    };
    gameOverPanel.prototype.back_home = function () {
        this.parent.addChild(StartGame.Shared());
        this.parent.removeChildAt(0);
        this.parent.removeChild(this);
    };
    return gameOverPanel;
}(eui.Button));
__reflect(gameOverPanel.prototype, "gameOverPanel", ["eui.UIComponent", "egret.DisplayObject"]);
