function Message({ message, loading }) {
  if (loading) {
    return <p className="message">Loading...</p>;
  }
  if (message) {
    return <p className="message">{message}</p>;
  }
  return null;
}

export default Message;