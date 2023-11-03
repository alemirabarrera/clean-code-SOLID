export abstract class Vehicle {
    
/*     getNumberOfSeats():number{
        throw  Error('Method not implemented')
    }
 */
    abstract getNumberOfSeats():number
}




export class Tesla  extends Vehicle{

    constructor( private numberOfSeats: number ) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
 

}

export class Audi  extends Vehicle{
    getNumberOfSeats(): number {
        return this.numberOfSeats;
    }

    constructor( private numberOfSeats: number ) {
        super();
    }


}

export class Toyota extends Vehicle {
    getNumberOfSeats(): number {
        return this.numberOfSeats;
    }

    constructor( private numberOfSeats: number ) {
        super();
    }


}

export class Honda extends Vehicle {
    getNumberOfSeats(): number {
        return this.numberOfSeats;
    }

    constructor( private numberOfSeats: number ) {
        super();
    }

    
}


export class Ford extends Vehicle {  
    constructor( private numberOfSeats: number ) {
        super();
    }

    getNumberOfSeats(): number {
        return this.numberOfSeats;
    }

    
}


