export default function TodoCard({ todo }) {
    return (
        <div className="break-words hyphens-auto text-xl md:text-2xl lg:text-3xl rounded-lg bg-violet-600 px-2 py-2 font-medium">{todo}</div>
    )
}