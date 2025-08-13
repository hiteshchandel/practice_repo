// Way 1: module.exports = object
let lastMessage;

function getMessage() {
    return lastMessage;
}

function setMessage(msg) {
    lastMessage = msg;
}

module.exports = {
    getMessage,
    setMessage
};
