import { EditOutlined, DeleteOutlined, SaveTwoTone } from "@ant-design/icons";
import { Checkbox, Input } from "antd";
import styles from "./todo.module.css";
import { useState } from "react";

export const Todo = (props) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editTodo, setEditTodo] = useState("");
  return (
    <div
      className={`${styles.todo} ${props.isEven ? styles.grey : styles.white}`}
    >
      <div className={styles.todo_left}>
        <Checkbox
          defaultChecked={props.isDone}
          onClick={() => props.handleCheck(!props.todoStatus, props.todoId)}
        />
        {isEditMode ? (
          <Input
            defaultValue={props.text}
            onChange={(event) => setEditTodo(event.target.value)}
          />
        ) : (
          <p>{props.text}</p>
        )}
      </div>
      <div className={styles.icons}>
        {isEditMode ? (
          <SaveTwoTone
            onClick={() => {
              props.handleEdit(editTodo, props.todoId);
              setIsEditMode(false);
              setEditTodo("");
            }}
          />
        ) : (
          <EditOutlined
            style={{ color: "#249f5d" }}
            onClick={() => setIsEditMode(true)}
          />
        )}
        <DeleteOutlined
          style={{ color: "#f32d2d" }}
          onClick={() => props.handleDelete(props.todoId)}
        />
      </div>
    </div>
  );
};
