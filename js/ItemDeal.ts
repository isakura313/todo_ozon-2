

export default class ItemDeal{
    priority:number;
    text:string;
    dt: number;
    dl: string;
/*
    priority - важность дела
    text - контент, содержимое
    dt - дата создания дела date time
    dl - дедлайн dealine
 */
    constructor(priority:number, text:string, dl:string) {
        this.priority = priority;
        this.text = text;
        this.dt = Date.now();
        this.dl = dl;
    }

}
