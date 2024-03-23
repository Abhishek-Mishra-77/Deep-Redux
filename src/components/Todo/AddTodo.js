import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, editTodo } from "../../store/todoSlice";
import { removeTodo } from "../../store/todoSlice";
import { CiEdit } from "react-icons/ci";

const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const [editId, setEditId] = useState();
  const dispatch = useDispatch();
  const {todos} = useSelector((state) => state.todo);


  console.log(todos)

  const onAddTodoHandler = (e) => {
    e.preventDefault();
    if (editId) {
      dispatch(editTodo({ id: editId, newText: todo }));
    } else {
      dispatch(addTodo(todo));
    }

    setTodo("");
    setEditId();
  };

  const onRemoveHandler = (id) => {
    dispatch(removeTodo(id));
  };

  const onEditHandler = (todo) => {
    setEditId(todo.id);
    setTodo(todo.text);
  };

  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>

          <p className="mt-4 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
            nulla eaque error neque ipsa culpa autem, at itaque nostrum!
          </p>
        </div>

        <form
          onSubmit={onAddTodoHandler}
          className="mx-auto mb-0 mt-8 max-w-md space-y-4"
        >
          <div>
            <div className="relative">
              <input
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter todo"
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white w-full"
            >
              Add
            </button>
          </div>
        </form>
      </div>
      <div className="mx-auto max-w-screen-sm px-4 py-16 sm:px-6 lg:px-8">
        {todos.map((todo) => {
          return (
            <div
              key={todo.id}
              role="alert"
              className="rounded-xl border border-gray-100 bg-white p-4"
            >
              <div className="flex items-start gap-4">
                <span className="text-green-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>

                <div className="flex-1">
                  <strong className="block font-medium text-gray-900">
                    {" "}
                    Changes saved{" "}
                  </strong>

                  <p className="mt-1 text-sm text-gray-700">{todo.text}</p>
                </div>

                <button
                  onClick={() => onEditHandler(todo)}
                  className="transition text-green-700"
                >
                  <span className="sr-only">Dismiss popup</span>

                  <CiEdit />
                </button>
                <button
                  onClick={() => onRemoveHandler(todo.id)}
                  className="transition text-red-600  "
                >
                  <span className="sr-only">Dismiss popup</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AddTodo;
