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
var gameRecord = (function (_super) {
    __extends(gameRecord, _super);
    function gameRecord() {
        return _super.call(this) || this;
    }
    gameRecord.Shared = function () {
        if (gameRecord.shared == null) {
            gameRecord.shared = new gameRecord();
        }
        return gameRecord.shared;
    };
    gameRecord.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    gameRecord.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    //添加一个记录
    gameRecord.prototype.creatRecord = function () {
        // var Record:record=new record();
        // this.record_group.addChild(new record())
    };
    return gameRecord;
}(eui.Component));
__reflect(gameRecord.prototype, "gameRecord", ["eui.UIComponent", "egret.DisplayObject"]);
