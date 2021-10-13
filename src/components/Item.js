

class Item {
    static lastid = 0;
    constructor(text){
            this.text = text;
            this.id = Item.lastid++;
            this.done = false;
    }

}


export default Item ;