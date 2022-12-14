// Materialize Navbar - resizes for Mobile to a hamburger menu
$(document).ready(function(){
$('.sidenav').sidenav();
});

var projectsEl = $('#projects');

for (var i = 0; i < projects.length; i++){
    var projectTitle = projects[i].title;
    var projectDesc = projects[i].desc;
    var projectImg1 = projects[i].image1;
    var projectImg2 = projects[i].image2;
    var projectDeployedUrl = projects[i].deployedUrl;
    var projectGitHubUrl = projects[i].gitHubRepoUrl;
    projectsEl.append(`
     
        <div class="col s12 m6 l3 xl2 id="ticketmaster-div">
            <div class="card large hoverable project-card">
                <div class="card-image activator">
                    <image class="project-image activator" src=${projectImg1}>
                </div>
                <div class="card-content left-align activator">
                    
                    <h5 class="blue-text accent-1-text">${projectTitle}<i class="material-icons right">more_vert</i></h5>
                    <p>${projectDesc}</p>
                    
                </div>
                <div class="card-action">
                    <a class="project-link-deployed blue-text accent-1-text" href=${projectDeployedUrl}>Deployed App</a>
                    <a class="project-link-github" href=${projectGitHubUrl}>GitHub Repo</a>
                </div>
                <div class="card-reveal blue accent-1">
                    <span class="card-title white-text center-align">${projectTitle}<i class="material-icons right">close</i></span>
                    <image class="reveal-image" src=${projectImg1}>
                    <image class="reveal-image" src=${projectImg2}>
                </div>
            </div>
        </div>
        
    `)
    if (projectDeployedUrl === "N/A") {
        var deployedLinkEl = $('.project-link-deployed');
        deployedLinkEl[i].style.display = "none";
    };
};

