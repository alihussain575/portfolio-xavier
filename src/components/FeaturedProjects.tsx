import { getAllProjects, getFeaturedProjects } from '../lib/fetchers';
import ButtonLink from './ButtonLink';
import FadeUp from './FadeUp';
import ProjectsMasonry from './ProjectsMasonry';

const FeaturedProjects = async () => {
  const projects = await getAllProjects();

  return (
    <section
      className="max-w-2xl mt-20 mx-auto md:max-w-none md:mt-28"
      id="projects"
    >
      <ProjectsMasonry
        projects={projects}
        className="flex-row-reverse"
        FirstItem={
          <div>
            <FadeUp cascade damping={0.15}>
              <h2 className="h2">All projects</h2>
              <p>Here are some of my projects that I've worked on:</p>
            </FadeUp>
          </div>
        }	
      />
    </section>
  );
};

export default FeaturedProjects as unknown as () => JSX.Element;
