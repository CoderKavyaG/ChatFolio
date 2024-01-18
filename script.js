const toggleSidebarBtn = document.getElementById('toggleSidebarBtn');

toggleSidebarBtn.addEventListener('click', function() {
  const sidebar = document.getElementById('sidebar');
  if (sidebar.classList.contains('collapsed')) {
    sidebar.classList.remove('collapsed');
    document.querySelector('.content').style.paddingLeft = '250px'; 
  } else {
    sidebar.classList.add('collapsed');
    document.querySelector('.content').style.paddingLeft = '0';
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.top-left-button1, .top-right-button2, .top-left-button2 ,.top-right-button1');
  const inputField = document.querySelector('.resizable-input');
  const displayText = document.querySelector('.display-text');
  
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      const buttonText = this.textContent;
      inputField.value += buttonText + ' ';
      displayText.textContent = buttonText;
    });
  });

  inputField.addEventListener('keydown', function(event) {
    if (event.keyCode === 13) {
      sendMessage(); 
    }
  });
});

function sendMessage() {
  const userInput = document.getElementById('user-input').value;
  const chatBox = document.getElementById('chat-box');

  if (userInput.trim() !== '') {
    appendUserMessage(userInput);
    processMessage(userInput.toLowerCase());
  }

  document.getElementById('user-input').value = '';
  chatBox.scrollTop = chatBox.scrollHeight;
}

function appendBotMessage(message) {
  const chatBox = document.getElementById('chat-box');
  const botMessageDiv = document.createElement('div');
  botMessageDiv.className = 'bot-message';
  botMessageDiv.innerHTML = message;
  chatBox.appendChild(botMessageDiv);
}

function appendUserMessage(message) {
  const chatBox = document.getElementById('chat-box');
  const userMessageDiv = document.createElement('div');
  userMessageDiv.className = 'user-message';
  userMessageDiv.innerHTML = message;
  chatBox.appendChild(userMessageDiv);
}

function processMessage(userInput) {
  const inputLowerCase = userInput.toLowerCase();

  if (inputLowerCase.includes('hello') || inputLowerCase.includes('hi') || inputLowerCase.includes('wassup') || inputLowerCase.includes('yo')) {
    appendBotMessage('Hey there! How are you doing? I am Kavya Goel.');
  } else if (inputLowerCase.includes('age') || inputLowerCase.includes('old')) {
    appendBotMessage('I am 18 years old.');
  } else if (inputLowerCase.includes('education')) {
    appendBotMessage('In my education qualifications, I am a first-year student at Chitkara University.');
  } else if (inputLowerCase.includes('skills')) {
    appendBotMessage('Here are my skills:');
    appendBotMessage('- Coding skills: Front-end Development consisting of HTML, CSS, and JS.');
    appendBotMessage('- Other skills: Web 3, Solidity.');
    appendBotMessage('- Other than coding skills: Content Writing, Marketing Strategist, Team Leadership, Project Management, and Networking.');
  } else if (inputLowerCase.includes('blogs')) {
    appendBotMessage('Here are some blog options:');
    appendBotMessage('<a href="blog1-link" target="_blank">Journey of Building Portfolio</a>');
    appendBotMessage('<a href="blog2-link" target="_blank">Interview Obsession</a>');
    appendBotMessage('<a href="blog3-link" target="_blank">Creating Self-Confidence</a>');
  } else if (inputLowerCase.includes('family')) {
    appendBotMessage('There are 3 members in my family: mother, father, and sister.');
  } else if (inputLowerCase.includes('linkedln')) {
    appendBotMessage('Sure, here is my LinkedIn profile: <a href="https://www.linkedin.com/in/coderkavyag/" target="_blank">CoderKavyaG LinkedIn</a>');
  } else if (inputLowerCase.includes('github')) {
    appendBotMessage('Here is my GitHub profile: <a href="https://github.com/CoderKavyaG" target="_blank">CoderKavyaG GitHub</a>');
  } else if (inputLowerCase.includes('youtube')) {
    appendBotMessage('Till now, no YouTube channel, but starting soon.');
  } else if (inputLowerCase.includes('team')) {
    appendBotMessage('I am a part of a team named Vayudev. It consists of two members: Ishan Kumar and Kavya Goel , Means Myself.');
  } else if (inputLowerCase.includes('experience')) {
    appendBotMessage('Till now, I have experience as a content writer for Coneptoou and as a web developer for a company named Business Accelerator.');
  } else if (inputLowerCase.includes('projects')) {
    appendBotMessage('One of my projects involves building a team page.');
  } else if (inputLowerCase.includes('achievements') || inputLowerCase.includes('awards')) {
    appendBotMessage('Here are some achievements and awards:');
    appendBotMessage('- Qualified for E.Y. Techaton');
    appendBotMessage('- Top 5 in Web Development Competition in CGC Jhanjeri');
    appendBotMessage('- In Top 3 of Code Competition by Coding Ninjas');
    appendBotMessage('- Many more, listing soon.');
  } else if (inputLowerCase.includes('hobbies') || inputLowerCase.includes('interests')) {
    appendBotMessage('My hobbies and interests include coding, writing, and chilling with friends.');
  } else if (inputLowerCase.includes('community')) {
    appendBotMessage('I am currently part of a community called DevLearn where I acquire my web development knowledge and also conduct various events focusing on personal brand building and building a growth mindset.');
  } else if (inputLowerCase.includes('contact')) {
    appendBotMessage('You can message me through LinkedIn: <a href="https://www.linkedin.com/in/coderkavyag/" target="_blank">Connect with CoderKavyaG On LinkedIn</a> or message me at codecraftkavya@gmail.com');
  } else if (inputLowerCase.includes('photo') || inputLowerCase.includes('video') || inputLowerCase.includes('picture')) {
    appendBotMessage('To see my photos or videos, follow me on my Instagram account: <a href="https://www.instagram.com/kavigoel_22/" target="_blank">Personally Connect with KingKavya</a>');
  } else if (inputLowerCase.includes('girlfriend')) {
    appendBotMessage('I have a lot of girls as friends, but till now, I have assigned the role of girlfriend to my coding. Coding is my love for now.');
  } else if (inputLowerCase.includes('god')) {
    appendBotMessage('I respect gods of all religions. I am a big devotee of Krishna Ji and Hanuman Bhagwan.');
  } else if (inputLowerCase.includes('phone number')) {
    appendBotMessage('You can call me or message me personally for such sensitive information.');
  } else if (inputLowerCase.includes('good') || inputLowerCase.includes('awesome') || inputLowerCase.includes('well done') || inputLowerCase.includes('great work')) {
    appendBotMessage('Thanks!');
  } else {
    appendBotMessage('I am sorry, I did not understand that. Can you please ask another question?');
  }
}
