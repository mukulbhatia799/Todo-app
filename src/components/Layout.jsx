import { useState } from "react";

import Navigation from './Navigation'
import TodosList from './TodosList'
import AddTasks from './AddTasks'


export default function Layout() {
    const [todos, setTodos] = useState([]);
    return (
        <div className="flex flex-col gap-10 mx-10">
            <Navigation />
            <AddTasks setTodos={setTodos} todos={todos} />
            <TodosList todos={todos} />
        </div>
    )
}