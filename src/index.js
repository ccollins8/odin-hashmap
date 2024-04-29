import "./style.css";

class Node {
    constructor(key = null, value = null) {
        this.key = key
        this.value = value
        this.nextNode = null
    }
}

class HashMap {

    constructor() {
        this.table = new Array(16)
        this.capacity  = 0
        this.loadFactor = 0.75
    }

    hash(key) {
        let hashCode = 0;
      
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i)
        }

        return hashCode % this.table.length; 
    }

    set(key, value) {
        const newNode = new Node(key, value)

        const index = this.hash(key)
        if (!this.table[index]) {
            this.table[index] = newNode
        } else {
            let current = this.table[index]
            while (current.nextNode != null) {
                current = current.nextNode
            }
            current.nextNode = new Node(key,value)
        }
        // const index = this.hash(key)
        // if (this.has(key) == false) {
        //     this.capacity++
        // }
        // this.table[index] = [key, value]
    }

    get(key) {
        // const index = this.hash(key)
        // if (this.has(key)) {
        //     return this.table[index][1]
        // } else {
        //     return null
        // }
    }

    has(key) {
        const index = this.hash(key)

        if (!this.table[index]) {
            return false
        }

        let current = this.table[index]
        while (current) {
            if (current.key == key) {
                return true
            }
            current = current.nextNode
        }

        return false

        // const index = this.hash(key)
        // if (this.table[index]) {
        //     if (this.table[index][0] == key) {
        //         return true
        //     } else {
        //         return false
        //     }
        // }
        // return false
    }

    remove(key) {
        const index = this.hash(key)
        if (this.has(key)) {
            delete this.table[index]
            this.capacity--
            return true
        } else {
            return false
        }
    }

    length() {
        return this.capacity
    }

    clear() {
        this.capacity = 0
        this.table = new Array()
    }

    keys() {
        const arr = []
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                arr.push(this.table[i][0])
            }
        }
        return arr
    }

}

const m = new HashMap()

m.set('name', 'corey')
m.set('email', 'abc@gmail.com')
m.set('phone', '123-456-7890')
m.set('jon', 'Smith')

console.log(m.hash('Jon'))

console.log(m.table)
