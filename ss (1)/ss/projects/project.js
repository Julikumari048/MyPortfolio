const Projects = [

 
    {
        name : "Clone of Bewakoof.com",
        about: "Bewakoof is an Online Shopping site for Men and Women Clothing. Shop from a wide range of T-shirts, Mobile Covers, Accessories and more at the best prices.",
        img : "images/Bewakoof.png",
         gitrepo : "https://github.com/Vijay-Prakash146246/Bewakoof.com/",
        tech_stack : "HTML | CSS | JAVASCRIPT |",
        tech_stackicons : [
            `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
            `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
            `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
            `<img src="https://img.icons8.com/nolan/64/api-settings.png" width="48px"/>`
            
        ],
         project_link : "https://wonderful-starburst-edda71.netlify.app/",
         project_type : "Group Project",
        category : ["all", "html"],

    },
    
    {
        name : "Clone of NDTV",
        about : "NDTV.com provides latest news from India and around the world. Get breaking news alerts from India and follow today's live news updates in field of politics.",
        img : "images/NDTV.png",
         gitrepo : "https://github.com/rohitkumar6324/ndtv-clone",
        tech_stack : "HTML | CSS | JAVASCRIPT | API's",
        tech_stackicons : [
            `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
            `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
            `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
            `<img src="https://img.icons8.com/nolan/64/api-settings.png" width="48px"/>`
            
        ],
         project_link : "https://radiant-lamington-32bf35.netlify.app/",
        project_type : "Group Project",
        category : ["all", "html"],

    },
    {
        name : "Clone of Nykaa",
        about : "Nykaa is an Indian e-commerce company, founded by Falguni Nayar in 2012 and headquartered in Mumbai. It sells beauty, wellness and fashion products across websites, mobile apps and 100+ offline stores. In 2020, it became the first Indian unicorn startup headed by a woman.",
        img : "images/Nykaa.png",
         gitrepo : "https://github.com/Julikumari048/Nykaa",
        tech_stack : "HTML | CSS | JAVASCRIPT | API's",
        tech_stackicons : [
            `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
            `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
            `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
            `<img src="https://img.icons8.com/nolan/64/api-settings.png" width="48px"/>`
            
        ],
         project_link : "https://steady-treacle-aea23e.netlify.app/",
         project_type : "Indivisual Project",
        category : ["all", "html"],

    },
]




let projects__container = document.getElementById("projects--container")

let all_projects = document.querySelector(".all_projects")

let mern_projects = document.querySelector(".mern_projects");
// let other_projects = document.querySelector(".other_projects");
let html_projects = document.querySelector(".html_projects")
all_projects.classList.add("active_tech_project")

all_projects.addEventListener("click", () => {
    filterProjects("all");
    all_projects.classList.add("active_tech_project")
    react_projects.classList.remove("active_tech_project")
    mern_projects.classList.remove("active_tech_project")
    // other_projects.classList.remove("active_tech_project")
    html_projects.classList.remove("active_tech_project")
})
mern_projects.addEventListener("click", () => {
    filterProjects("mern");
    all_projects.classList.remove("active_tech_project")
    react_projects.classList.remove("active_tech_project")
    mern_projects.classList.add("active_tech_project")
    // other_projects.classList.remove("active_tech_project")
    html_projects.classList.remove("active_tech_project")
})

html_projects.addEventListener("click", () => {
    filterProjects("html");
    all_projects.classList.remove("active_tech_project")
    react_projects.classList.remove("active_tech_project")
    mern_projects.classList.remove("active_tech_project")
    // other_projects.classList.remove("active_tech_project")
    html_projects.classList.add("active_tech_project")
})

function filterProjects(basis) {
    let filtered = Projects.filter((el) => {
        return el.category.includes(basis)
    })
    displayProjectData(filtered)
}

function displayProjectData(Projects) {
    projects__container.innerHTML = null;
Projects.reverse().forEach(pro => {
    let main = document.createElement("div")
    main.setAttribute("class", "portfolio-item padd-15")
    main.innerHTML = `
    <div class="portfolio-item-inner shadow-dark">
    <div class="portfolio-img">
      <img src=${pro.img} alt="">
      <h3 class="project-name">${pro.name}</h3>
      <h4 class="project-name project__about">${pro.about}</h4>
      <div class="navigate_ar">
      <a href=${pro.project_link} target="_blank" title="Demo" class="see-project"><i class="fas fa-eye"></i></a>
      <a href=${pro.gitrepo} target="_blank" title="GitHub Repository" class="github-repo"><i class="fab fa-github"></i></a>
      </div>
      <div class="project_tech_box">
      <span class="TechStacks__text">TechStacks: </span> ${pro.tech_stack}
      </div>
      
    </div>
  </div>
    `
    projects__container.append(main)

})

}

displayProjectData(Projects);


