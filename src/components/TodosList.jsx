import TodoCard from "./TodoCard";

export default function TodosList({ todos, setTodos }) {
    console.log("todoslist (length): ", todos.length);
    return (
        <div className="flex flex-col gap-5 mb-20">
            <h1 className="text-violet-500 underline text-2xl md:text-3xl lg:text-4xl font-bold">Todo's List</h1>
            <div>
                <div className="flex flex-col gap-2">
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-medium">Today</h1>
                    {todos.length === 0 ?
                        (<div className="rounded-lg bg-violet-500 font-bold text-gray-700 min-h-40 md:min-h-60 flex justify-center items-center text-xl md:text-2xl lg:text-3xl">Empty</div>)
                        :
                        (
                            <table className="rounded-lg bg-blue-500 min-h-40 md:min-h-60 flex flex-col gap-2 p-2">
                                <thead>
                                    <tr style={{ display: "grid", gridTemplateColumns: "6fr 1fr 2fr" }} className="">
                                        <th>Task</th>
                                        <th>Priority</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {todos.map((todo, index) =>
                                        <tr key={index} style={{ display: "grid", gridTemplateColumns: "6fr 1fr 2fr" }}>
                                            <td>
                                                <TodoCard todo={todo} />
                                            </td>
                                            <td className="min-w-16 flex items-center justify-center">{(todos[index].priority === 'high') ?
                                                (<div className="text-xs w-min border-4 rounded-xl focus:border-white border-black px-1 bg-red-600 py-1">High</div>)
                                                :
                                                (todos[index].priority === 'medium') ?
                                                    (<div className="text-xs w-min border-4 rounded-xl focus:border-white border-black px-1 bg-green-500 py-1">Medium</div>)
                                                    :
                                                    ((<div className="text-xs border-4 rounded-xl focus:border-white border-black px-2 bg-yellow-400 py-1">Low</div>))}
                                            </td>
                                            <td className="flex justify-center items-center">
                                                <button onClick={() => {
                                                    const newArr = todos.slice(1);
                                                    console.log("newarr: ", newArr);
                                                    setTodos(newArr);
                                                }} className="w-6 h-6 border-4 bg-green-800 px-1 py-1 rounded-lg hover:bg-green-900 flex justify-center items-center ">✅</button>
                                                {/* <button className="overflow-hidden w-6 h-6 border-2 bg-red-800 px-1 py-1 rounded-lg hover:bg-red-900 flex justify-center items-center">❌</button> */}
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        )
                    }
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-medium">Tomorrow</h1>
                    {todos.length === 0 ?
                        (<div className="rounded-lg bg-violet-500 font-bold text-gray-700 min-h-40 md:min-h-60 flex justify-center items-center text-xl md:text-2xl lg:text-3xl">Empty</div>)
                        :
                        (
                            <table className="rounded-lg bg-blue-500 min-h-40 md:min-h-60 flex flex-col gap-2 p-2">
                                <thead>
                                    <tr style={{ display: "grid", gridTemplateColumns: "6fr 1fr 2fr" }} className="">
                                        <th>Task</th>
                                        <th>Priority</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {todos.map((todo, index) =>
                                        <tr key={index} style={{ display: "grid", gridTemplateColumns: "6fr 1fr 2fr" }}>
                                            <td>
                                                <TodoCard todo={todo} />
                                            </td>
                                            <td className="min-w-16 flex items-center justify-center">{(todos[index].priority === 'high') ?
                                                (<div className="text-xs w-min border-4 rounded-xl focus:border-white border-black px-1 bg-red-600 py-1">High</div>)
                                                :
                                                (todos[index].priority === 'medium') ?
                                                    (<div className="text-xs w-min border-4 rounded-xl focus:border-white border-black px-1 bg-green-500 py-1">Medium</div>)
                                                    :
                                                    ((<div className="text-xs border-4 rounded-xl focus:border-white border-black px-2 bg-yellow-400 py-1">Low</div>))}
                                            </td>
                                            <td className="flex justify-center items-center">
                                                <button onClick={() => {
                                                    const newArr = todos.slice(1);
                                                    console.log("newarr: ", newArr);
                                                    setTodos(newArr);
                                                }} className="w-6 h-6 border-4 bg-green-800 px-1 py-1 rounded-lg hover:bg-green-900 flex justify-center items-center ">✅</button>
                                                {/* <button className="overflow-hidden w-6 h-6 border-2 bg-red-800 px-1 py-1 rounded-lg hover:bg-red-900 flex justify-center items-center">❌</button> */}
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        )
                    }
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-medium">Someday</h1>
                    {todos.length === 0 ?
                        (<div className="rounded-lg bg-violet-500 font-bold text-gray-700 min-h-40 md:min-h-60 flex justify-center items-center text-xl md:text-2xl lg:text-3xl">Empty</div>)
                        :
                        (
                            <table className="rounded-lg bg-blue-500 min-h-40 md:min-h-60 flex flex-col gap-2 p-2">
                                <thead>
                                    <tr style={{ display: "grid", gridTemplateColumns: "6fr 1fr 2fr" }} className="">
                                        <th>Task</th>
                                        <th>Priority</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {todos.map((todo, index) =>
                                        <tr key={index} style={{ display: "grid", gridTemplateColumns: "6fr 1fr 2fr" }}>
                                            <td>
                                                <TodoCard todo={todo} />
                                            </td>
                                            <td className="min-w-16 flex items-center justify-center">{(todos[index].priority === 'high') ?
                                                (<div className="text-xs w-min border-4 rounded-xl focus:border-white border-black px-1 bg-red-600 py-1">High</div>)
                                                :
                                                (todos[index].priority === 'medium') ?
                                                    (<div className="text-xs w-min border-4 rounded-xl focus:border-white border-black px-1 bg-green-500 py-1">Medium</div>)
                                                    :
                                                    ((<div className="text-xs border-4 rounded-xl focus:border-white border-black px-2 bg-yellow-400 py-1">Low</div>))}
                                            </td>
                                            <td className="flex justify-center items-center">
                                                <button onClick={() => {
                                                    const newArr = todos.slice(1);
                                                    console.log("newarr: ", newArr);
                                                    setTodos(newArr);
                                                }} className="w-6 h-6 border-4 bg-green-800 px-1 py-1 rounded-lg hover:bg-green-900 flex justify-center items-center ">✅</button>
                                                {/* <button className="overflow-hidden w-6 h-6 border-2 bg-red-800 px-1 py-1 rounded-lg hover:bg-red-900 flex justify-center items-center">❌</button> */}
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        )
                    }
                </div>
            </div>
        </div>
    )
}