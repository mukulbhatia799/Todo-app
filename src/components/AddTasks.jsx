import { useState } from "react";

export default function AddTasks({ setTodos, todos }) {
    const [todo, setTodo] = useState("");

    return (
        <div className="my-10 flex flex-col gap-4">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">Add Tasks</h1>
            <div className="flex flex-col gap-2 md:flex-row text-sm md:text-xl lg:text-2xl">
                <input
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    className="outline-none flex-1 border-2 border-violet-950 rounded-lg bg-violet-600 p-2 placeholder:text-black placeholder:font-bold placeholder:opacity-60 hover:bg-violet-500"
                    type="text"
                    placeholder="Add Todo"
                />
                <button
                    onClick={() => {
                        if (todo.trim()) {
                            setTodos([...todos, todo.trim()]);
                            setTodo("");
                        }
                    }}
                    className="rounded-lg bg-violet-700 border-2 border-violet-900 hover:bg-violet-600 p-2 font-bold"
                >
                    Add Todo
                </button>
            </div>
        </div>
    );
}
