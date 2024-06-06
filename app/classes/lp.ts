interface LPAsset {
    name: string;
    price: number;
    amountHeld: number;
}

interface LPPointInTimeValue {
    date: string;
    asset1: LPAsset;
    asset2: LPAsset;
}

class LP {
    data: LPPointInTimeValue[]

    constructor() {
        this.data = []
    }
}