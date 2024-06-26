

export default function Navigation() {
    return (
        <div className="rounded-xl flex justify-between items-center text-center gap-4 bg-violet-500 px-2 py-4 md:px-10 my-4">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold">Todo App</h1>
            <h2 className="hidden sm:block text-md md:text-2xl lg:text-3xl font-medium md:w-56 lg:w-80">Stop Procastination, Keep working</h2>
            <button className="rounded-full bg-gray-600 font-extrabold text-2xl px-4 py-2">U</button>
        </div>
    )
}