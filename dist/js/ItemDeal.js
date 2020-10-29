var ItemDeal = /** @class */ (function () {
    /*
        priority - важность дела
        text - контент, содержимое
        dt - дата создания дела date time
        dl - дедлайн dealine
     */
    function ItemDeal(priority, text, dl) {
        this.priority = priority;
        this.text = text;
        this.dt = Date.now();
        this.dl = dl;
    }
    return ItemDeal;
}());
export default ItemDeal;
