function TodoForm({
  input,
  inputMessage,
  onInputChange,
  onSubmit
}) {
  return (
    <>
      <form onSubmit={onSubmit} className="task-form">
        <input
          type="text"
          value={input}
          onChange={onInputChange}
          placeholder="What needs to be done?"
          autoComplete="off"
        />

        <button type="submit">
          Add Task
        </button>
      </form>

      <p className="input-message">
        {inputMessage}
      </p>
    </>
  );
}

export default TodoForm;