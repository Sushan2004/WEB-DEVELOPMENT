// Object-oriented counter class
class Counter {
constructor() {
this.count = 0;
}


increment() {
return ++this.count;
}
}


const counter = new Counter();


// Event listener with callback and exception handling
document.getElementById("clickBtn").addEventListener("click", () => {
try {
const val = counter.increment();
document.getElementById("counterDisplay").innerText = "Clicks: " + val;
} catch(err) {
console.error("Error updating counter:", err);
}
});