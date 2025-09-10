let projects = [
    {
    title: "SIR Model Infection Simulation",
    description: "This project used the Susceptible, Infected, Recovery (SIR) model to simulate infection spread in a population. The project was written in Python and included user entered parameters for Population Size, Intitial Infected, Infection Rate, Recovery Time, and Movement Speed. The agents were color coded dots: Blue (Susceptible), Red (Infected), and Green (Recovered).",
    link: "#"
    },
    {
    title: "Email Generator",
    description: "This project involved making a tool to generate common emails the Veterans Resource Center sends out to new students seeking to use their Veteran Affairs Education Benefits. I was the sole contributor and created it to make my office work easier and more efficient.",
    link: "#"
    }
];

function listProjects() {
    for (let project of projects) {
    console.log(`${project.title}: ${project.description}.\n`)
    }       
}


