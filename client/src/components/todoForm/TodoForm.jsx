import React, { useState } from "react";
import "./TodoForm.css";
import { addNewTodo } from "../../redux/actions";
import { useDispatch } from "react-redux";

const TodoForm = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();
    dispatch(addNewTodo(text));
    setText('');
  };

  const onInputChange = (event) => {
    setText(event.target.value);
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input
        placeholder="Enter new todo..."
        className="input"
        onChange={onInputChange}
        value={text}
      />
    </form>
  );
};

export default TodoForm;
