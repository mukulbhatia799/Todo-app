import { ParticularDay } from "./ParticularDay";
import { useState } from "react";

export default function TodosList({ todos }) {
    let somedayList=[], todayList=[], tomorrowList=[];

    for (let i = 0; i < todos.length; i++) {
        if (todos[i].completeBy === "Today") todayList.push(todos[i]);
        else if (todos[i].completeBy === "Tomorrow") tomorrowList.push(todos[i]);
        else somedayList.push(todos[i]);
    }

    console.log("todoslist (length): ", todos.length);
    return (
        <div className="flex flex-col gap-5 mb-20">
            <h1 className="text-violet-500 underline text-2xl md:text-3xl lg:text-4xl font-bold">
                Todo's List
            </h1>
            <div>
                <ParticularDay day={"Today"} todos={todayList} />
                <ParticularDay day={"Tomorrow"} todos={tomorrowList} />
                <ParticularDay day={"Someday"} todos={somedayList} />
            </div>
        </div>
    );
}
