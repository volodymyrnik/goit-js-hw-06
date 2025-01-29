class Storage {
    #items;
    constructor(items) {
        this.#items = items;
    }
    getItems() {
        return this.#items;
    }
    addItem(newItem) {
        this.#items.push(newItem);
    }
    removeItem(itemToRemove) {
        let idx = this.#items.indexOf(itemToRemove);
        if (idx !== -1) {
            this.#items.splice(idx, 1);
        } else {
            console.log(`${itemToRemove} not found in the storage.`);
        }
    }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
storage.removeItem("NonexistentItem"); // "NonexistentItem not found in the storage."
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]