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
            this.capacity++
        } else {
            let current = this.table[index]
            while (current.nextNode != null) {
                current = current.nextNode
            }
            current.nextNode = new Node(key,value)
            this.capacity++
        }
    }

    get(key) {
        const index = this.hash(key)
        if (this.has(key)) {

            let current = this.table[index]
            while (current) {
                if (current.key == key) {
                    return current.value
                }
            current = current.nextNode
            }   
        }
        return null
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
    }

    remove(key) {
        const index = this.hash(key)
        if (this.has(key)) {
            let current = this.table[index]
            let previous = null

            if (current.key == key) {
                this.table[index] = current.nextNode
                this.capacity--
                if (this.table[index] == null) {
                    delete this.table[index]
                }
                return true
            }

            while (current) {
                if (current.key == key) {
                    previous.nextNode = current.nextNode
                    this.capacity--
                    return true
                }
                previous = current
                current = current.nextNode
            }
        }
        return false
    }

    length() {
        return this.capacity
    }

    clear() {
        this.capacity = 0
        this.table = new Array()
    }

    keys() {
        let keys = []
        for (let i = 0; i < this.table.length; i++) {
            let current = this.table[i]
            while (current) {
                keys.push(current.key)
                current = current.nextNode
            }
        }
        return keys
    }

    values() {
        let values = []
        for (let i = 0; i < this.table.length; i++) {
            let current = this.table[i]
            while (current) {
                values.push(current.value)
                current = current.nextNode
            }
        }
        return values
    }

    entries() {
        let entries = []
        for (let i = 0; i < this.table.length; i++) {
            let current = this.table[i]
            while (current) {
                entries.push([current.key, current.value])
                current = current.nextNode
            }
        }
        return entries   
    }

}

const m = new HashMap()

m.set('name', 'corey')
m.set('email', 'abc@gmail.com')
m.set('phone', '123-456-7890')
m.set('john', 'Smith')

console.log(m.remove('nme'))
console.log(m.remove('d'))

console.log(m.length())
console.log(m.table.length)
console.log(m.keys())
console.log(m.values())
console.log(m.entries())
