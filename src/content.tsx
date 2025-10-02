import "./Nav.css";

const projects = [
  {
    title: "O mnie",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut facilisis tincidunt eros ac tristique. Quisque quis magna aliquet, aliquet dui a, ullamcorper nisl. Aenean odio libero, varius sed dictum eu, aliquet ut erat. Quisque mi nunc, imperdiet non congue maximus, efficitur id arcu. Sed risus metus, sollicitudin id sem eu, consectetur vulputate risus. Nullam at semper mi. Suspendisse sed sollicitudin arcu. Suspendisse potenti. Sed venenatis rutrum erat, sit amet sagittis eros rhoncus a. Integer lacus ipsum, tempus ac lacinia eget, auctor nec nisi. Mauris a facilisis nibh. Nam aliquam arcu et feugiat aliquam. Nunc finibus, quam at iaculis suscipit, urna tortor placerat lorem, non interdum erat lacus eget mauris. Aenean auctor turpis eget rhoncus vestibulum."
  },
  { title: "Todo lista", description: "dawddawdwad" },
  { title: "Projekt 2", description: "Short description for project 2." },
  { title: "Project 3", description: "Short description for project 3." }
];

function Content() {
  return (
    <div className="main-container">
      <div className="project">
        <div className="project-content">
          <div className="block">
            <h2>{projects[0].title}</h2>
            <p>{projects[0].description}</p>
          </div>
        </div>
      </div>

      <div className="small-projects-container">
        {projects.slice(1).map((proj, index) => (
          <div key={index} className="project small">
            <div className="project-content">
              <div className="block">
                <h2>{proj.title}</h2>
                <p>{proj.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Content;
