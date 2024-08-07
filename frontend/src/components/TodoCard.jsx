export default function TodoCard({ todo }) {
    return (
        <div className="text-balance ">
            <div className="break-words hyphens-auto text-sm md:text-2xl lg:text-3xl rounded-lg bg-white text-black px-1 py-1 font-medium">
                {todo.todo}
            </div>
        </div>
    );
}