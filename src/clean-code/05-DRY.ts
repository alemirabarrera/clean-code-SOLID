
type Size = ''|'S'|'M'|'XL';
class Product{
    constructor(
        public name: String ='',
        public price: number= 0,        
        public size: Size ='',
        ){        
    }
    isProductReady(): boolean {
        for (const key in this) {
            const elem = this[key];                            
            //console.log(typeof(elem));
            switch (typeof(elem)) {
                case 'string':
                    if(!elem || !elem.length) throw new Error(`${key} is empty`);
                    break;
                case 'number':
                    if(<number>elem <= 0) throw new Error(`${key} is zero`);
                    break;
                default:
                    throw new Error(`Type of ${key} is not valid`);
            }
        }
        return true;
    }

    toString(){
/*      if(!this.name || this.name.length <= 0) throw new Error('name is empty');
        if(this.price <= 0) throw new Error('price is zero');
        if(!this.size || this.size.length <= 0) throw new Error('size is empty'); */        
        if(!this.isProductReady()) return;
        return  `${this.name} (${this.price}), ${this.size}`;
    }
}

(()=>{
    const bluePants = new Product('Blue Large Pants');
    console.log(bluePants.toString());
})();