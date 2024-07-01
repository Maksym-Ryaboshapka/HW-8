// Task 1.1
console.log("Завдання 1.1:");

const friends = ["Mango", "Poly", "Kiwi", "Ajax"];
let string = '';

for (let i = 0; i < friends.length; i++) {
	if (i === friends.length - 1) {
		string += friends[i];
	} else {
		string += friends[i] + ", ";
	}
}

console.log(string);

// Task 1.2
console.log("Завдання 1.2:");

const friendsJoin = friends.join(", ");
console.log(friendsJoin);

// Task 2-5
console.log("Завдання 2-5:");

const cards = ["Картка-1", "Картка-2", "Картка-3", "Картка-4", "Картка-5"];

const cardToRemove = cards.splice(2, 1);
console.log(cards);

const cardToInsert = cards.splice(4, 0, "Картка-6");
console.log(cards);

const cardToUpdate = cards.splice(2, 1, "Картка-4.5");
console.log(cards);