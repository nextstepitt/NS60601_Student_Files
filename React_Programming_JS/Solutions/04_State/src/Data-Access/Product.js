// Product.js
// Copyright © NextStep IT Training. All rights reserved.
//

export default class Product {

    constructor(source) {

        this.id = source && source.id ? source.id : 0
        this.name = source && source.name ? source.name : ''
        this.price = source && source.price ? source.price : 0
    }
}