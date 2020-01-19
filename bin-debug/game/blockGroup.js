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
var blockGroup = (function (_super) {
    __extends(blockGroup, _super);
    //声明单例
    /*	private static shared:blockGroup;
        public static Shared():blockGroup{
            if(blockGroup.shared==null){
                blockGroup.shared=new blockGroup();
            }
            return blockGroup.shared;
    }*/
    function blockGroup() {
        var _this = _super.call(this) || this;
        //点击事件
        _this._curren = 0;
        _this.row();
        return _this;
    }
    blockGroup.prototype.row = function () {
        //初始化行
        blockGroup.row = [];
        //创建一排
        for (var i = 0; i < Data.rowNumber; i++) {
            var blocks = new block();
            blockGroup.row.push(blocks);
            blocks.x = i * blocks.width;
            this.addChild(blocks);
            blocks.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclicktap, this);
        }
    };
    blockGroup.prototype.onclicktap = function (e) {
        e.target.onBlockClick();
        if (e.target.blockColor == 1 || this._curren != Data._row() - 2) {
            this.dispatchEventWith('gameOver');
        }
        else {
            this.dispatchEventWith('clickRight');
        }
    };
    //随机黑色
    blockGroup.prototype.drawRow = function () {
        var radomNumber = Math.ceil(Math.random() * 4) - 1;
        this.clear();
        if (radomNumber == -1) {
            radomNumber = 0;
        }
        blockGroup.row[radomNumber].blockColor = 0;
    };
    //点击清空颜色
    blockGroup.prototype.clear = function () {
        for (var i = 0; i < blockGroup.row.length; i++) {
            blockGroup.row[i].blockColor = 1;
        }
    };
    blockGroup.prototype.move = function () {
        this._curren++;
        if (this._curren == Data._row()) {
            this._curren = 0;
            this.drawRow();
        }
        this.y = this._curren * Data.get_width();
    };
    //一排的数组
    blockGroup.row = [];
    return blockGroup;
}(egret.Sprite));
__reflect(blockGroup.prototype, "blockGroup");
