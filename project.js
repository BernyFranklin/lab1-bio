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

function validateEmail(email) {
   const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   return re.test(String(email).toLowerCase());
}

// used for showing the projects
document
   .getElementById("show-projects")
   .addEventListener("click", () => toggleProjectList());

// used for the email validation
document.addEventListener("DOMContentLoaded", () => {
   const emailInput = 
      document.getElementById("email") ||
      document.querySelector('input[name="email"]') ||
      document.querySelector('input[type="email"]');
   if (!emailInput) return;

   let errorEl = document.getElementById("email-error");
   if (!errorEl) {
      errorEl = document.createElement("div");
      errorEl.id = "email-error";
      errorEl.setAttribute("aria-live", "polite");
      emailInput.insertAdjacentElement("afterend", errorEl);
   }

   const form = emailInput.closest("form");
   if (!form) return;

   form.addEventListener("submit", (e) => {
      e.preventDefault();                       // stops default submission

      // grab our status element or create one if it doesn't exist
      let statusEl = document.getElementById("status");
      if (!statusEl) {
         statusEl = document.createElement("p");
         statusEl.id = "status";
         emailInput.insertAdjacentElement("afterend", statusEl);
      }
      
      const value = emailInput.value.trim();
      if (!validateEmail(value)) {
         e.preventDefault();
         errorEl.textContent =
            value === "" ? "Email is required." : "Please enter a valid email.";
         emailInput.classList.add("invalid");
         emailInput.focus();
         statusEl.textContent = "";    // if invalid, clear sending message
      } else{
         errorEl.textContent = "";
         statusEl.textContent = "Sending...";
         emailInput.classList.remove("invalid");   
         
         setTimeout(() => {
            statusEl.textContent = "Message Sent!";
            form.reset();  
            
            setTimeout(() => {
               statusEl.textContent = "";
            }, 2000);// clear the form
         }, 2000); // simulate sending delay
         
         
      }
   });
});