import "./style.css";

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
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }

        return hashCode; 
    }

    set(key, value) {
        const index = this.hash(key)
        if (this.has(key) == false) {
            this.capacity++
        }
        this.table[index] = [key, value]
    }

    get(key) {
        const index = this.hash(key)
        if (this.has(key)) {
            return this.table[index][1]
        } else {
            return null
        }
    }

    has(key) {
        const index = this.hash(key)
        if (this.table[index]) {
            if (this.table[index][0] == key) {
                return true
            } else {
                return false
            }
        }
        return false
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

}

const m = new HashMap()

m.set('name', 'corey')
m.set('email', 'abc@gmail.com')
m.set('phone', '123-456-7890')

console.log(m.get('phone'))
console.log(m.has('name'))
console.log(m.length())
console.log(m.remove('name'))
console.log(m.length())
console.log(m.table)