document.querySelectorAll('.event-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const card = e.target.closest('.event-card');
        const popup = document.getElementById('popupOverlay');
        
        // Set popup content
        popup.querySelector('.popup-title').innerHTML = card.querySelector('.event-title').innerHTML;
        popup.querySelector('.event-date').textContent = card.querySelector('.event-date').textContent;
        popup.querySelector('.event-time').textContent = card.querySelector('.event-time').textContent;
        popup.querySelector('.single-option .option-desc').textContent = card.querySelector('.event-desc').textContent;
        popup.querySelector('.single-option .price').textContent = 
            card.querySelector('.event-title').textContent.includes('Computer') ? '₹79' : '₹49';
        popup.querySelector('.primary').href = btn.href;
  
        // Show popup
        popup.classList.add('active');
        popup.style.display = 'flex';
    });
  });
  
  // Close only with close button
  document.querySelector('.close-btn').addEventListener('click', () => {
    const popup = document.getElementById('popupOverlay');
    popup.classList.remove('active');
    setTimeout(() => {
        popup.style.display = 'none';
    }, 300);
  });
  
  // Close with ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const popup = document.getElementById('popupOverlay');
        popup.classList.remove('active');
        setTimeout(() => {
            popup.style.display = 'none';
        }, 300);
    }
  });