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
var Back_Home = (function (_super) {
    __extends(Back_Home, _super);
    function Back_Home() {
        return _super.call(this) || this;
    }
    Back_Home.Shared = function () {
        if (Back_Home.shared == null) {
            Back_Home.shared = new Back_Home();
        }
        return Back_Home.shared;
    };
    Back_Home.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Back_Home.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.init();
    };
    Back_Home.prototype.init = function () {
        this.x = this.parent.parent.width - 100;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.backhome, this);
    };
    Back_Home.prototype.backhome = function () {
        this.parent.parent.addChild(StartGame.Shared());
        this.parent.parent.removeChild(this.parent);
    };
    return Back_Home;
}(eui.Button));
__reflect(Back_Home.prototype, "Back_Home", ["eui.UIComponent", "egret.DisplayObject"]);
