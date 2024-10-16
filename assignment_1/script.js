document.addEventListener("DOMContentLoaded", function() {
  const headings = document.querySelectorAll('h2, h3');
  
  headings.forEach(heading => {
    heading.addEventListener('click', () => {
      let nextElement = heading.nextElementSibling;
      while (nextElement && nextElement.tagName !== 'H2' && nextElement.tagName !== 'H3') {
        nextElement.style.display = nextElement.style.display === 'none' ? 'block' : 'none';
        nextElement = nextElement.nextElementSibling;
      }
    });
  });

  const toc = document.querySelector('#toc ul');
  
  document.querySelectorAll('h2, h3').forEach((heading, index) => {
    const tocItem = document.createElement('li');
    const anchor = document.createElement('a');
    const id = heading.textContent.toLowerCase().replace(/\s+/g, '-');
    
    heading.setAttribute('id', id);
    anchor.setAttribute('href', `#${id}`);
    anchor.textContent = heading.textContent;
    
    tocItem.appendChild(anchor);
    toc.appendChild(tocItem);
  });
});
