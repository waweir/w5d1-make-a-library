Using the MoDom Library
======
One
------
```
md.one(selector)
```
Finds one matching element using the defined CSS selector.
#### Arguments
selector: The CSS query selector to search on.
#### Returns
The first HTML element returned from the CSS query selector.
#### Example
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

All
------
```
md.all(selector)
```
Finds all matching elements using the defined CSS selector.
#### Arguments
selector: The CSS query selector to search on.
#### Returns
An array of all HTML elements returned from the CSS query selector.
#### Example
```HTML
<div class="container">
    <div id="row_1" class="row">Row 1</div>
    <div id="row_2" class="row">Row 2</div>
</div>
```
```javascript
md.all('.row')
// => [<div id="row_1" class="row">Row 1</div>, <div id="row_2" class="row">Row 2</div]
```

Remove
------
```
md.remove(selector)
```
Removes the first matching element using the defined CSS selector.
#### Arguments
selector: The CSS query selector to search on.
#### Returns
Removes the first HTML element returned from the CSS query selector.
#### Example
```HTML
<div class="container">
    <div id="row_1" class="row">Row 1</div>
    <div id="row_2" class="row">Row 2</div>
</div>
```
```javascript
md.remove('.row')
// The first row is removed from HTML. This can be checked by rerunning the all method on the same CSS selector. Result of md.all('.row') after md.remove('.row') is below
// => <div id="row_2" class="row">Row 2</div
```

Add Class
------
```
md.addClass(selector, className)
```
Adds the defined CSS class to the first element returned from the CSS query selector.
#### Arguments
selector: The CSS query selector to search on.

className: CSS class to add to the element.
#### Returns
Adds the CSS class the first HTML element returned from the CSS query selector.
#### Example
```HTML
<div class="container">
    <div id="row_1" class="row">Row 1</div>
    <div id="row_2" class="row">Row 2</div>
</div>
```
```javascript
md.addClass('.row', 'blue')
// => <div id="row_1" class="row blue">Row 1</div
```

Remove Class
------
```
md.removeClass(selector, className)
```
Removes the defined CSS class to the first element returned from the CSS query selector.
#### Arguments
selector: The CSS query selector to search on.

className: CSS class to remove from the element.
#### Returns
Removes the CSS class the first HTML element returned from the CSS query selector.
#### Example
```HTML
<div class="container">
    <div id="row_1" class="row blue">Row 1</div>
    <div id="row_2" class="row">Row 2</div>
</div>
```
```javascript
md.removeClass('.blue', 'row')
// => <div id="row_1" class="blue">Row 1</div
```

Has Class
------
```
md.hasClass(selector, className)
```
Checks if the first element returned from the CSS query selector contains the specified CSS class name.
#### Arguments
selector: The CSS query selector to search on.

className: CSS class to check for.
#### Returns
True if the element contains the class, false if it does not.
#### Example
```HTML
<div class="container">
    <div id="row_1" class="blue">Row 1</div>
    <div id="row_2" class="row">Row 2</div>
</div>
```
```javascript
md.hasClass('.container div', 'blue')
// => true
```

Get Attribute
------
```
md.getAttr(selector, attribute)
```
Finds the specified attribute of the element defined by the CSS query selector.
#### Arguments
selector: The CSS query selector to search on.

attribute: Attribute to search on.
#### Returns
Value of the attribute.
#### Example
```HTML
<div class="container">
    <div class="navbar">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
    </div>
</div>
```
```javascript
md.getAttr('button', 'data-target')
// => #navbar
```

Set Attribute
------
```
md.setAttr(selector, attribute, value)
```
Sets the specified attribute of the element defined by the CSS query selector with the value.
#### Arguments
selector: The CSS query selector to search on.

attribute: Attribute to search on.

value: Value to set the attribute to.
#### Returns
Sets the value of the attribute.
#### Example
```HTML
<form class="navbar-form navbar-right">
  <input type="text" class="form-control">
</form>
```
```javascript
md.setAttr('input', 'placeholder', 'Search...')
// => Will update the input HTML to:
// <input type="text" class="form-control" placeholder="Search...">
```

Set HTML
------
```
md.setHTML(selector, value)
```
Sets the inner HTML of the element defined by the CSS query selector with the value.
#### Arguments
selector: The CSS query selector to search on.

value: HTML to insert into the element.
#### Returns
Sets the HTML of the element.
#### Example
```HTML
<div class="container">
    <div class="row">
        <div class="col-sm-12"></div>
    </div>
</div>
```
```javascript
md.setHTML('.col-sm-12', 'Column 1')
// <div class="col-sm-12">Column 1</div>
```

Get HTML
------
```
md.setHTML(selector)
```
Finds the inner HTML of the element defined by the CSS query selector with the value.
#### Arguments
selector: The CSS query selector to search on.
#### Returns
The HTML of the element.
#### Example
```HTML
<div class="container">
    <div class="row">
        <div class="col-sm-12">Column 1</div>
    </div>
</div>
```
```javascript
md.setHTML('.col-sm-12')
// Column 1
```
