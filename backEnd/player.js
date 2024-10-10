class Item {
    constructor(name, count = 0, description = '') {
        this.name = name;
        this.count = count;
        this.description = description;
    }
}

class Player {
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.healthCap = health;
        this.deathSaveFails = 0;
        this.deathSaveSuccesses = 0;
        this.inventory = new Map();
    }

    // General functions
    namePrint() {
        return this.name;
    }

    healthPrint() {
        return this.health;
    }

    playerPrint() {
        console.log(`Name: ${this.namePrint()}`);
        console.log(`Health: ${this.healthPrint()}`);
    }

    // Health functions
    healthIncrement(a) {
        if (a <= 0) {
            console.error("Not a valid healing counter");
            return;
        }

        this.health += a;
        if (this.health > this.healthCap) {
            console.log("Healed past cap.");
            this.health = this.healthCap;
        }
    }

    healthDecrement(a) {
        if (a <= 0) {
            console.error("Not a valid damage counter");
            return;
        }

        this.health -= a;
        if (this.health < 0) {
            console.log("Player is knocked.... begin death saves >:)");
        }
    }

    deathFail() {
        this.deathSaveFails++;
        if (this.deathSaveFails >= 3) {
            console.log("YOU ARE DEAD!!!");
        }
    }

    deathSuccess() {
        this.deathSaveSuccesses++;
        if (this.deathSaveSuccesses >= 3) {
            console.log("YOU ARE BACK UP! DON'T WASTE THIS CHANCE");
        }
        this.health = 1;
    }

    // Inventory functions
    inventoryInsert(name) {
        if (this.inventory.has(name)) {
            const item = this.inventory.get(name);
            item.count++;
        } else {
            const description = prompt("Enter a description: ");
            const newItem = new Item(name, 1, description);
            this.inventory.set(name, newItem);
        }
    }

    inventoryRemove(name) {
        if (this.inventory.has(name)) {
            const item = this.inventory.get(name);
            item.count--;

            if (item.count === 0) {
                this.inventory.delete(name);
            }
        } else {
            console.log("You don't even have that");
        }
    }

    inventoryPrint() {
        let i = 1;
        this.inventory.forEach((item) => {
            console.log(`${i}. ${item.name} x${item.count}`);
            i++;
        });
    }

    inventoryPrintWithDescription() {
        let i = 1;
        this.inventory.forEach((item) => {
            console.log(`${i}. ${item.name} x${item.count} - ${item.description}`);
            i++;
        });
    }

    inventoryRemoveMultiple(name, count) {
        if (this.inventory.has(name)) {
            const item = this.inventory.get(name);
            if (item.count >= count) {
                item.count -= count;
                if (item.count === 0) {
                    this.inventory.delete(name);
                }
            } else {
                console.log(`Not enough of ${name} to remove`);
            }
        } else {
            console.log("You don't even have that");
        }
    }
    
    inventoryAdd(name, count) {
        if (count <= 0) {
            console.error("Count must be greater than zero.");
            return;
        }
    
        if (this.inventory.has(name)) {
            const item = this.inventory.get(name);
            item.count += count; // Increase count by the specified amount
        } else {
            const description = prompt("Enter a description: ");
            const newItem = new Item(name, count, description); // Create new item with the given count
            this.inventory.set(name, newItem);
        }
    }
    

    inventoryClear() {
        this.inventory.clear();
        console.log("Inventory cleared.");
    }
}
