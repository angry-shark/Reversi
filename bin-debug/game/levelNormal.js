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
        _this.creatBlockGroup();
        _this.startGame();
        return _this;
    }
    levelNormal.Shared = function () {
        if (levelNormal.shared == null) {
            levelNormal.shared = new levelNormal();
        }
        return levelNormal.shared;
    };
    levelNormal.prototype.creatBlockGroup = function () {
        this._rectGrounp = [];
        // this._rectBoot=new egret.Sprite();
        //  this.addChild(this._rectBoot);
        var group;
        for (var i = 0; i < Data._row(); i++) {
            group = new blockGroup();
            group.y = i * Data.get_width() / 4;
            this.addChild(group);
            this._rectGrounp.push(group);
            group.addEventListener("gameOver", this.gameOver, this);
            group.addEventListener("clickRight", this.clickRight, this);
        }
        this.addChild(gameScore.Shared());
        this.y = Data.get_height() - this.height;
    };
    //绑定相应行数和黑色各种
    levelNormal.prototype.startGame = function () {
        this.touchChildren = true;
        var nowRow;
        for (var i = 0; i < Data._row(); i++) {
            nowRow = this._rectGrounp[i];
            nowRow.clear();
            nowRow.y = Data.get_width() / 4 * i;
            nowRow._curren = i;
            if (i != (Data._row() - 1)) {
                this._rectGrounp[i].drawRow();
            }
        }
    };
    //初始化界面
    /*private init(){
        var group:blockGroup=new blockGroup();
        this.addChild(group);
        group.drawRow();
        group.addEventListener("gameOver",this.gameOver,this);
        group.addEventListener("clickRight",this.clickRight,this);
}*/
    //点击失败
    levelNormal.prototype.gameOver = function () {
        //禁止点击
        this.touchChildren = false;
        var endgame = new gameOverPanel();
        setTimeout(function () {
            endgame.x = Data.get_width() / 2 - endgame.width / 2;
            endgame.y = Data.get_height() / 2 - endgame.height / 2;
        }, 0);
        this.parent.addChild(endgame);
    };
    //点击成功
    levelNormal.prototype.clickRight = function () {
        var num = Data.Score;
        num += 1;
        Data.Score = num;
        for (var i = 0; i < Data._row(); i++) {
            this._rectGrounp[i].move();
        }
    };
    return levelNormal;
}(egret.Sprite));
__reflect(levelNormal.prototype, "levelNormal");
