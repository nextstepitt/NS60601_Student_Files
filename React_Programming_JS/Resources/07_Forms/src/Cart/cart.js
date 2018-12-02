// cart.js
// Copyright © NextStep IT Training. All rights reserved.
//
// Return a singleton shopping cart for the application facets to share.
//

class Cart {

    constructor() {

        this.entries = []
    }

    add(entry) {

        this.entries.push(entry)
    }

    delete(entry) {

        let index = this.entries.indexOf(entry)

        if (index >= 0) {

            this.entries.splice(index, 1)
        }
    }

    clear() {

        this.entries = []
    }

    total() {

        let sum = 0

        for (let entry of this.entries) {

            sum += entry.price
        }

        return sum
    }
}

const cart = new Cart()

export default cart