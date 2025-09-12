let projects = [
   {
      title: "EyeDHD (Ongoing)",
      description:
         "This is the eye tracking tool to be used for the Psych Department in diagnosing ADHD with objective data.",
      link: "#",
      type: "school",
   },
   {
      title: "SIR Model Infection Simulation",
      description:
         "This project used the Susceptible, Infected, Recovery (SIR) model to simulate infection spread in a population. The project was written in Python and included user entered parameters for Population Size, Intitial Infected, Infection Rate, Recovery Time, and Movement Speed. The agents were color coded dots: Blue (Susceptible), Red (Infected), and Green (Recovered).",
      link: "https://github.com/BernyFranklin/P1_6-Infection",
      type: "school",
   },
   {
      title: "Email Generator",
      description:
         "This project involved making a tool to generate common emails the Veterans Resource Center sends out to new students seeking to use their Veteran Affairs Education Benefits. I was the sole contributor and created it to make my office work easier and more efficient.",
      link: "https://bernyfranklin.github.io/vrcEmailGen/index.html",
      type: "personal",
   },
   {
      title: "Outdoor Park Concert App",
      description:
         "This Python project involved creating a ticketing app via the command line that enabled the user to view available seating, purchase tickets, query by name, display all purchases, and enforced social distancing parameters when purchasing tickets.",
      link: "https://youtu.be/fkoU1B-YR5Q",
      type: "school",
   },
];

function listProjects(projects, sectionId) {
   const section = document.getElementById(sectionId);
   section.innerHTML = "";

   projects.forEach((project) => {
      const card = document.createElement("article");
      card.className = project.type;
      // Title
      const title = document.createElement("h3");
      title.textContent = project.title;
      card.appendChild(title);
      // Description
      const description = document.createElement("p");
      description.textContent = project.description;
      card.appendChild(description);
      // Link
      if (project.link !== "#") {
         const link = document.createElement("a");
         link.href = project.link;
         link.target = "_blank";
         link.textContent = "View Project";
         card.appendChild(link);
      }
      section.appendChild(card);
   });
}

function toggleProjectList() {
   const schoolChecked = document.getElementById("filter-school").checked;
   const personalChecked = document.getElementById("filter-personal").checked;
   const projectList = document.getElementById("project-list");
   projectList.style.visibility = "visible";

   const filteredProjects = projects.filter((project) => {
      if (project.type === "school" && schoolChecked) return true;
      if (project.type === "personal" && personalChecked) return true;
      return false;
   });
   listProjects(filteredProjects, "project-list");
}

document
   .getElementById("show-projects")
   .addEventListener("click", () => toggleProjectList());
