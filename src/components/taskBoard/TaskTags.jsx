export default function TaskTags({ tags }) {
  return (
    <ul className="flex justify-center gap-1.5 flex-wrap">
      {tags.map((tag) => (
        <li key={tag}>
          <span className="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#00D991A1] px-2.5 text-sm capitalize text-[#F4F5F6]">
            {tag}
          </span>
        </li>
      ))}
    </ul>
  );
}
