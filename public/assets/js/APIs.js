// Get all the characters for this user
getMain = async () => {
    const response = await fetch('/api/getmain');
    const res = await response.json();
    if (response.ok) {
        generateMain(res);
    }
}

getOthers = async () => {
    const response = await fetch('/api/getothers');
    const res = await response.json();
    if (response.ok) {
        generateOthers(res);
    }
}

generateMain = (mainData) => {
        const mainProject = `
        <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
        <div class="col-lg-5 p-3 p-lg-5 pt-lg-3">
            <a target="_blank" style="text-decoration:none; color:#333333;"
                href="${mainData.deployedLink}">
                <h1 class="display-4 fw-bold lh-1">${mainData.name}</h1>
            </a>
            <p class="lead">
                ${mainData.description}    
            </p>
            <a href="${mainData.githubLink}" target="_blank"
                class="btn btn-outline-secondary btn-lg px-4">GitHub Repository</a>
                <a href="${mainData.deployedLink}" target="_blank"
                class="btn btn-outline-secondary btn-lg px-4">Deployed Link</a>
        </div>
        <div class="col-lg-6 offset-lg-1 p-0 position-relative overflow-hidden shadow-lg">
            <div class="position-lg-absolute top-0 left-0 overflow-hidden">
                <a target="_blank" href="https://github.com/Dylancouzon/farQuest">
                    <img class="d-block rounded-lg-3" src="assets/images/${mainData.image}" alt="${mainData.name}"
                        width="720">
                </a>
            </div>
        </div>
    </div>
    `
        $("#mainProject").append(mainProject);
}

generateOthers = (otherData) => {
    otherData.forEach((card) => {
        const content = `
        <div class="col-md d-flex mb-4">
        <div class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg"
            style="background-image: url('assets/images/${card.image}'); background-size: cover; ">
            <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <a target="_blank"
                    style="text-decoration:none; color:white;  -webkit-text-stroke-width: 1px; -webkit-text-stroke-color: black;"
                    href="${card.deployedLink}">
                    <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">${card.name}</h2>
                </a>
                <a href="${card.githubLink}" target="_blank"><img
                        src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                        alt="GitHub" width="32" height="32" class="rounded-circle border border-white"></a>
            </div>
        </div>
    </div>
    `
        $("#project-cards").append(content);
    })
}

getMain();
getOthers();