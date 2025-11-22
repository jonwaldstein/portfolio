export default function ProjectCard({ title, description, featured_image, external_url, credits, link_text }) {
  return (
    <div className="rounded-lg border border-gray-200 shadow-xs">
        <div className="px-6 py-5">
            <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
            <div className="mt-3 border-t border-gray-100 pt-4 text-gray-700">{description}</div>
        </div>
        <div className="w-full">
            <img className="w-full object-cover" src={featured_image} alt="" />
        </div>
        <div className="flex items-center justify-between gap-3 border-t border-gray-100 p-6 text-sm">
            <a className="text-teal-600 hover:text-teal-700 font-medium" target="_blank" rel="noreferrer" href={external_url}>{link_text}</a>
            {credits && (
            <span className="text-gray-500">Credits: <em>{credits}</em></span>
            )}
        </div>
    </div>
  );
}
