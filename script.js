function ToggleMenu() {
    const menuList = document.querySelector('.menuList');
    const clkBtn = document.querySelector('.clkBtn');

    if (menuList.style.visibility === 'visible') {
        menuList.style.visibility = 'hidden';
    } else {
        menuList.style.visibility = 'visible';
    }
    if (clkBtn.style.visibility === 'visible') {
        clkBtn.style.visibility = 'hidden';
    } else {
        clkBtn.style.visibility = 'visible';
    }
}

    const subscribeForm = document.getElementById('subscribeForm');
    const modal = document.getElementById('subscriptionModal');
    const closeModalBtn = document.querySelector('.close-modal');
    const formMessage = document.getElementById('formMessage');

    subscribeForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = document.getElementById('email').value;

        if (email.trim() !== '' && email.includes('@')) {
            modal.style.display = 'block';
            subscribeForm.reset();
        } else {
            formMessage.textContent = 'Please enter a valid email address.';
            formMessage.classList.add('show');
        }
    });
    closeModalBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });
    window.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

window.addEventListener('load', function() {
    const loaderWrapper = document.getElementById('loader-wrapper');
    const content = document.getElementById('content');
    const delayDuration = 1500; 
    setTimeout(function() {
        loaderWrapper.style.opacity = '0';
        loaderWrapper.addEventListener('transitionend', function() {
            loaderWrapper.style.display = 'none';
        }, { once: true }); 
        content.style.display = 'block';
        content.classList.add('fade-in');
    }, delayDuration); 
});

document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('chatbot-toggle-btn');
  const popup = document.getElementById('chatbot-popup');
  const closeBtn = document.getElementById('chatbot-close-btn');
  const chatMessages = document.getElementById('chat-messages');
  const userInput = document.getElementById('user-input');
  const sendBtn = document.getElementById('send-btn');

  toggleBtn.onclick = () => popup.classList.toggle('hidden');
  closeBtn.onclick = () => popup.classList.add('hidden');

  function addMessage(text, sender) {
    const msg = document.createElement('div');
    msg.className = `message ${sender}-message`;
    msg.textContent = text;
    chatMessages.appendChild(msg);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function sendMessage() {
    const text = userInput.value.trim();
    if (!text) return;
    addMessage(text, 'user');
    userInput.value = '';
    setTimeout(() => {
      addMessage("I'm just a demo bot. Real answers coming soon!", 'bot');
    }, 500);
  }

  sendBtn.onclick = sendMessage;
  userInput.addEventListener('keypress', e => {
    if (e.key === 'Enter') sendMessage();
  });
});
