# Generate Pin

Each PIN is unique from the other

Each PIN is random

Each PIN uses only digits 0-9

A PIN doesn't contain 3 or more consecutive ascending or descending digits

A PIN doesn't have 2 same consecutive digits

```javascript
const generatePin = require('generate-pin');

generatePin();
// output: ["0245"]

generatePin(3);
// output: ["0245", "6298", "4910"]
```
