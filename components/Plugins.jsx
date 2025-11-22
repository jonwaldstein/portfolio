import { plugins as pluginsData } from '../lib/data';
import ProjectCard from './ProjectCard';

export default function Plugins() {
  const websites = [...pluginsData].reverse();
  return (
    <div className="flex flex-col space-y-8">
      {websites.map((website) => (
        <ProjectCard key={website.title} link_text="View Plugin" {...website} />
      ))}
    </div>
  );
}

