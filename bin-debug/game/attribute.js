var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var attribute = (function () {
    function attribute() {
    }
    attribute.prototype.back_btn = function () {
    };
    return attribute;
}());
__reflect(attribute.prototype, "attribute");
