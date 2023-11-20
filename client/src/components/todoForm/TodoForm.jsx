import React, {useState} from "react";
import "./TodoForm.css";

const TodoForm = () => {

  const [text, setText] = useState("");

  const onFormSubmit = ()=>{

  };

  const onInputChange=(event)=>{
    setText(event.target.value);
  }

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
