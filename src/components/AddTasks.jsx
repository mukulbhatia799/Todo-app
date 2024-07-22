import { useState } from "react";
import PriorityButton from "./PriorityButton";
import CompleteByButton from "./CompleteByButton";

export default function AddTasks({ setTodos, todos }) {
    const [todo, setTodo] = useState("");
    const [priority, setPriority] = useState("");
    const [completeBy, setCompleteBy] = useState("");
    console.log("add tasks component (priority): ", priority);

    return (
        <div className="my-10 flex flex-col gap-8">
            <h1 className="text-violet-500 underline text-2xl md:text-3xl lg:text-4xl font-bold">
                Add Tasks
            </h1>
            <div className="flex flex-col gap-2 md:flex-row text-sm md:text-xl lg:text-2xl">
                <input
                    value={todo} // when todo gets changed,
                    onChange={(e) => setTodo(e.target.value)}
                    className="outline-none flex-1 border-2 border-violet-950 rounded-lg bg-gray-300 p-2 placeholder:text-black placeholder:font-bold placeholder:opacity-60 hover:bg-gray-200"
                    type="text"
                    placeholder="Add Todo"
                />
                <button
                    onClick={() => {
                        if (todo.trim() && priority !== "") {
                            setTodos([
                                ...todos,
                                {
                                    todo: todo.trim(),
                                    priority: priority,
                                    completeBy,
                                    status: {
                                        completed: false,
                                        deleted: false,
                                    },
                                },
                            ]);
                            console.log("todos: ", todos);
                            setTodo("");
                        } else {
                            if (!todo.trim())
                                console.log("todo can't be empty");
                            else
                                console.log(
                                    "select the task priority to add a todo."
                                );
                        }
                    }}
                    className="rounded-lg bg-violet-500 text-white border-2 border-white hover:bg-slate-700 p-2 font-bold"
                >
                    Add Todo
                </button>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-2">
                <h1 className="font-bold text-lg sm:text-3xl md:text-4xl">
                    Priority:
                </h1>
                <div className="flex flex-wrap gap-2">
                    <PriorityButton
                        text={"High"}
                        setPriority={setPriority}
                        color={"red"}
                    />
                    <PriorityButton
                        text={"Medium"}
                        setPriority={setPriority}
                        color={"green"}
                    />
                    <PriorityButton
                        text={"Low"}
                        setPriority={setPriority}
                        color={"yellow"}
                    />
                </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-2">
                <h1 className="font-bold text-lg sm:text-3xl md:text-4xl">
                    Complete By:
                </h1>
                <div className="flex flex-wrap gap-2">
                    <CompleteByButton
                        text={"Today"}
                        setCompleteBy={setCompleteBy}
                    />
                    <CompleteByButton
                        text={"Tomorrow"}
                        setCompleteBy={setCompleteBy}
                    />
                    <CompleteByButton
                        text={"Someday"}
                        setCompleteBy={setCompleteBy}
                    />
                </div>
            </div>
        </div>
    );
}
