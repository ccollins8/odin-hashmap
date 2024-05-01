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
m.set('john', 'Smith')

console.log(m.remove('name'))
console.log(m.remove('email'))

console.log(m.length())
console.log(m.table)
