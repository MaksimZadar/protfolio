import Project from "./Project";

export default function ProjectsSlide() {
  return (
    <div className="hero fullscreen bg-red-500" id="projects">
      <div className="hero-body">
        <div className="content">
          <h1 className="title text-white">My Projects</h1>
          <div className="grid grid-cols-3 u-gap-2">
            <Project
              title="CalorieCounter"
              description="This is a calorie counting app, which is made using Flutter."
              link="https://github.com/Borismeister/calorie_counter"
              trelloLink="https://trello.com/b/29K0lK0W/calorie-counter-app" />
          </div>
        </div>
      </div>
    </div>
  )
}