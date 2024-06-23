import TodoCard from "./TodoCard";

export default function TodosList({ todos }) {

    return (
        <div className="flex flex-col gap-5 mb-20">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">Todo's List</h1>
            <div className="sm:grid sm:grid-cols-2 sm:gap-10 2xl:grid 2xl:grid-cols-3 2xl:gap-10">
                <div className="flex flex-col gap-2">
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-medium">Today</h1>
                    {todos.length === 0 ?
                        (<div className="rounded-lg bg-gray-500 min-h-40 md:min-h-60 flex justify-center items-center text-xl md:text-2xl lg:text-3xl">Empty</div>)
                        :
                        (<div className="rounded-lg bg-violet-300 min-h-40 md:min-h-60 flex flex-col gap-1 p-2">
                            {todos.map((todo, index) => {
                                return (
                                    <div key={index}>
                                        <TodoCard todo={todo} />
                                    </div>
                                )
                            })}
                        </div>)
                    }
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-medium">Tomorrow</h1>
                    {todos.length === 0 ?
                        (<div className="rounded-lg bg-gray-500 min-h-40 md:min-h-60 flex justify-center items-center text-xl md:text-2xl lg:text-3xl">Empty</div>)
                        :
                        (<div className="rounded-lg bg-violet-300 min-h-40 md:min-h-60 flex flex-col gap-1 p-2">
                            {todos.map((todo, index) => <TodoCard key={index} todo={todo} />)}
                        </div>)
                    }
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-medium">Someday</h1>
                    {todos.length === 0 ?
                        (<div className="rounded-lg bg-gray-500 min-h-40 md:min-h-60 flex justify-center items-center text-xl md:text-2xl lg:text-3xl">Empty</div>)
                        :
                        (<div className="rounded-lg bg-violet-300 min-h-40 md:min-h-60 flex flex-col gap-1 p-2">
                            {todos.map((todo, index) => <TodoCard key={index} todo={todo} />)}
                        </div>)
                    }
                </div>
            </div>
        </div>
    )
} 