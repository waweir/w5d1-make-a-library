Using the MoDom Library
======
One
------
```
md.one(CSS selector)
```
Finds one matching element using the defined CSS selector
### Arguments
selector: The CSS query selector to search on.
### Returns
The first HTML element returned from the CSS query selector.
### Example
```
```HTML
<div class="container">
    <div id="row_1" class="row">Row 1</div>
    <div id="row_2" class="row">Row 2</div>
</div>
```
```javascript
md.one('.row')
// => <div id="row_1" class="row">Row 1</div>
```
```
