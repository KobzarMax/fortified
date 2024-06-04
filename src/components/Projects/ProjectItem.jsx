export const ProjectItem = ({ project }) => {
  return (
    <div className={`project-item`}>
      <div className="project-item-text">
        <h4 className={`project-item-title gradient-title`}>{project.title}</h4>
        <p className={`project-item-description subtitle lg`}>
          {project.description}
        </p>
      </div>
      <img
        loading={"lazy"}
        src={project.image}
        alt={`project ${project.title}`}
      />
    </div>
  );
};
