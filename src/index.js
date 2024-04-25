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
        this.table[index] = [key, value]
    }

    get(key) {
        const index = this.hash(key)
        return this.table[index]
    }

}

const m = new HashMap()

m.set('name', 'corey')
m.set('email', 'abc@gmail.com')
m.set('phone', '123-456-7890')

console.log(m.get('name'))
console.log(m.table)