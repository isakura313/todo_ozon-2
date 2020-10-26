export default class ItemDeal{
/*
    priority - важность дела
    text - контент, содержимое
    dt - дата создания дела date time
    dl - дедлайн dealine
 */
    constructor(priority, text, dl) {
        this.priority = priority;
        this.text = text;
        this.dt = Date.now();
        this.dl = dl;
    }

}
