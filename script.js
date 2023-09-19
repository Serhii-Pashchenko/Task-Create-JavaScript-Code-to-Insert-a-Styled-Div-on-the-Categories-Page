let customDiv = document.createElement('div');

customDiv.style.margin = '1.5rem 0.5rem';
customDiv.style.minHeight = '500px';
customDiv.textContent = 'Random Text';
customDiv.style.fontSize = '2rem';
customDiv.style.display = 'flex';
customDiv.style.alignItems = 'center';
customDiv.style.justifyContent = 'center';
customDiv.style.borderRadius = '10px';
customDiv.style.boxShadow = '1px 1px 5px 5px #f1f1f1';

let products = document.querySelectorAll('.product-item');

if (window.innerWidth < 1200) {
  customDiv.style.width = 'calc(66.658% - 4rem)';
} else {
  customDiv.style.width = 'calc(50% - 2rem)';
}

if (window.innerWidth < 768) {
  customDiv.style.width = 'calc(100% - 2rem)';
}

products[3].after(customDiv);
