import { plugins as pluginsData } from '../lib/data';

export default function Plugins() {
  const websites = [...pluginsData].reverse();
  return (
    <div>
      {websites.map((website) => (
        <div className=" max-w-2xl overflow-hidden rounded-lg border border-gray-200 shadow-md mb-12" key={website.title}>
          <div className="px-6 py-5">
            <h3 className="text-xl font-semibold tracking-tight text-gray-900">{website.title}</h3>
            <div className="mt-3 border-t border-gray-100 pt-4 text-gray-700">{website.description}</div>
          </div>
          <div className="w-full">
            <img className="w-full object-cover" src={website.featured_image} alt="" />
          </div>
          <div className="flex items-center justify-between gap-3 border-t border-gray-100 px-6 py-3 text-sm">
            <a className="text-teal-600 hover:text-teal-700 font-medium" target="_blank" rel="noreferrer" href={website.external_url}>View Plugin</a>
          </div>
        </div>
      ))}
    </div>
  );
}

