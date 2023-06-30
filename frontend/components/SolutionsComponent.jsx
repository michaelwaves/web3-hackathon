
export default function SolutionsComponent({ title, text, href }) {
    return (
        <a href={href} className="p-16 font-[500]">
            {title}<span className="">→</span>
            <br></br>
            <span className="small-text fw-400 text-gray-600 block max-w-4 px-2">
                {text}
            </span>
        </a>
    )
}