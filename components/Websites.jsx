import { websites as websitesData } from '../lib/data';
import ProjectCard from './ProjectCard';

export default function Websites() {
  const websites = [...websitesData].reverse();
  return (
    <div className="flex flex-col space-y-8">
      {websites.map((website) => (
        <ProjectCard key={website.title} link_text="View Website" {...website} />
      ))}
    </div>
  );
}

