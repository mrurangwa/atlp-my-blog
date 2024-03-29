const messages = JSON.parse(localStorage.getItem('messages') || '{}');
const messageContainer = document.getElementById('messageContainer');

const formatTimestamp = (timestamp) => {
  const date = new Date(timestamp);
  const monthNames = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC',
  ];
  const formattedDate = `${
    monthNames[date.getMonth()]
  } ${date.getDate()}, ${date.getFullYear()} -- ${date.getHours()}:${date.getMinutes()} ${
    date.getHours() >= 12 ? 'PM' : 'AM'
  }`;
  return formattedDate;
};

const renderMessages = () => {
  messageContainer.innerHTML = '';
  messages.forEach((message, index) => {
    const messageCard = document.createElement('div');
    messageCard.classList.add('messageCard');

    const nameElement = document.createElement('h2');
    nameElement.classList.add('name');
    nameElement.textContent = message.name;

    const descElement = document.createElement('p');
    descElement.classList.add('desc');
    descElement.textContent = message.message;

    const dateElement = document.createElement('p');
    dateElement.classList.add('date');
    dateElement.textContent = formatTimestamp(message.timestamp);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('deleteButton');
    deleteButton.addEventListener('click', () => {
      messages.splice(index, 1);
      localStorage.setItem('messages', JSON.stringify(messages));
      renderMessages();
    });

    messageCard.appendChild(nameElement);
    messageCard.appendChild(descElement);
    messageCard.appendChild(dateElement);
    messageCard.appendChild(deleteButton);

    messageContainer.appendChild(messageCard);
  });
};

renderMessages();
