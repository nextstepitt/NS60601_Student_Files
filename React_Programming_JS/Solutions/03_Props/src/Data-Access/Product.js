// Product.js
// Copyright © NextStep IT Training. All rights reserved.
//

export default class Product {

    constructor(source) {

        this.id = source && source.id ? source.id : 0
        this.name = source && source.name ? source.name : ''
        this.price = source && source.price ? source.price : 0
    }

    get id() {

        return this._id
    }

    set id(value) {

        this._id = value
    }

    get name() {

        return this._name
    }

    set name(value) {

        this._name = value
    }
    
    get price() {

        return this._price
    }

    set price(value) {

        this._price = value
    }
}