const status = document.getElementById('status');
const message = document.getElementById('messages');
const form = document.getElementById('form');
const input = document.getElementById('input');

const ws = new WebSocket('ws://188.225.35.65:3030');

function setStatus(value){
    status.innerHTML = value;
};

function printMessage(value){
    let li = document.createElement('li');

    li.innerHTML = value;
    messages.appendChild(li);
};

form.addEventListener('submit', function(event){
    event.preventDefault();

    ws.send(input.value);
    input.value = '';
});

ws.onopen = () => setStatus('ONLINE');

ws.onclose = () => setStatus('DISCONECTED');

ws.onmessage = response => printMessage(response.data),console.log(response);
