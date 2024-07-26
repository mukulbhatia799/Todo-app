import TodoCard from "./TodoCard";

export function ParticularDay({ day, todos }) {
    return (
        <>
            <div className="flex flex-col gap-2">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-medium">
                    {day}
                </h1>
                {todos.length === 0 ? (
                    <div className="rounded-lg bg-violet-500 font-bold text-gray-700 min-h-40 md:min-h-60 flex justify-center items-center text-xl md:text-2xl lg:text-3xl">
                        Empty
                    </div>
                ) : (
                    <table className="rounded-lg bg-blue-500 min-h-40 md:min-h-60 flex flex-col gap-2 p-2">
                        <thead>
                            <tr
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "6fr 1fr 2fr",
                                }}
                                className=""
                            >
                                <th>Task</th>
                                <th>Priority</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {todos.map((todo, index) => (
                                <tr
                                    key={index}
                                    style={{
                                        display: "grid",
                                        gridTemplateColumns: "6fr 1fr 2fr",
                                    }}
                                >
                                    <td>
                                        <TodoCard todo={todo} />
                                    </td>
                                    <td className="min-w-16 flex items-center justify-center">
                                        <div
                                            className={`font-extrabold text-lg w-min border-4 rounded-xl focus:border-white border-black px-1 bg-${
                                                todos[index].priority === "high"
                                                    ? "red"
                                                    : todos[index].priority ===
                                                      "medium"
                                                    ? "green"
                                                    : "yellow"
                                            }-600 py-1`}
                                        >
                                            {todos[index].priority}
                                        </div>
                                    </td>
                                    <td className="flex justify-center items-center gap-3">
                                        <button
                                            onClick={() => {
                                                const newTodos = todos.filter(
                                                    () => {}
                                                );
                                            }}
                                            className="w-6 h-6 border-4 bg-[#00D26A] p-3 rounded-lg hover:bg-green-900 flex justify-center items-center hover:scale-110 transition-all duration-200"
                                        >
                                            ✅
                                        </button>
                                        <button
                                            onClick={() => {
                                                const newTodos = todos.filter(
                                                    () => {}
                                                );
                                            }}
                                            className="w-6 h-6 border-4 bg-red-800 p-3 rounded-lg hover:bg-red-900 flex justify-center items-center hover:scale-110 transition-all duration-200"
                                        >
                                            ❌
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </>
    );
}
