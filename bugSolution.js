```javascript
// Correct usage of $inc operator with a numerical value
db.collection.updateOne({ _id: 1 }, { $inc: { count: 1 } });
```