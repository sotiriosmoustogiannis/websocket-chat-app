function formatMessage(sender, content) {
  return {
    id: Date.now(),
    sender,
    content,
    timestamp: new Date().toLocaleTimeString(),
  };
}

module.exports = { formatMessage };
