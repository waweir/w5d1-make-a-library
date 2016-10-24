// Your test code examples go here. Make sure you console.log() results.
console.log(md.one('.text-muted'))

console.log(md.all('.text-muted'))

// remove one .icon-bar span, then log the resulting array
md.remove('.text-muted')
console.log(md.all('.text-muted'))

console.log(md.addClass('.page-header', 'light_green'))

console.log(md.removeClass('.nav-sidebar li:first-child', 'active'))

console.log(md.hasClass('button', 'navbar-toggle'))

console.log(md.getAttr('button', 'data-target'))

console.log(md.setAttr('input', 'placeholder', 'Type your search here...'))

console.log(md.setHTML('.navbar-brand', 'Brand Here'))

console.log(md.getHTML('.sub-header'))



//
