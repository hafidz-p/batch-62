function getData(e) {
    e.preventDefault();

    const projectName = document.getElementById("projectName").value;
    const dateStart = document.getElementById("dateStart").value;
    const dateEnd = document.getElementById("dateEnd").value;
    const description = document.getElementById("message").value;

    const technologies = Array.from(document.querySelectorAll("input[type='checkbox']:checked"))
        .map(checkbox => checkbox.value)
        .join(", ");

    const cards = [
        {
            projectName,
            dateStart,
            dateEnd,
            description,
            technologies
        }
    ];

    const projectCard = (card) => `
        <div class="col-md-4 mb-4">
        <div class="card shadow-sm" onclick="expandCard(${JSON.stringify(card).replace(/"/g, '&quot;')})">
            <img src="img/Screenshot 2025-05-08 073945.png" class="card-img-top" alt="Project Image">
            <div class="card-body">
            <h5 class="card-title fw-bold">${card.projectName}</h5>
            <p class="card-text text-muted">Durasi: ${card.dateStart} - ${card.dateEnd}</p>
            <p class="card-text">${card.description}</p>
            <div class="d-flex my-3">
                ${card.technologies.split(", ").map(tech => getTechnologyLogo(tech)).join("")}
            </div>
            <div class="d-flex justify-content-between">
                <button class="btn btn-dark px-4 me-1">Edit</button>
                <button class="btn btn-dark px-4 me-1">Delete</button>
            </div>
            </div>
        </div>
        </div>
    `;

    document.getElementById("projectList").innerHTML += cards.map(projectCard).join("");

    document.querySelector("form").reset();
}

function expandCard(card) {
    const expandedView = `
        <div class="container">
            <h1>${card.projectName}</h1>
            <p><strong>Duration:</strong> ${card.dateStart} - ${card.dateEnd}</p>
            <p><strong>Description:</strong> ${card.description}</p>
            <p><strong>Technologies:</strong></sp>
            <div class="d-flex">
                ${card.technologies.split(", ").map(tech => getTechnologyLogo(tech)).join("")}
            </div>
            <button class="btn btn-dark mt-4" onclick="goBack()">Go Back</button>
        </div>
    `;

    document.body.innerHTML = expandedView;
}

function goBack() {
    location.reload(); // Reload the page to go back to the original view
}

function getTechnologyLogo(tech) {
    const logos = {
        "Node Js": "https://static.cdnlogo.com/logos/n/79/node-js.svg",
        "React Js": "https://static.cdnlogo.com/logos/r/85/react.svg",
        "Next Js": "https://static.cdnlogo.com/logos/n/80/next-js.svg",
        "Typescript": "https://static.cdnlogo.com/logos/t/96/typescript.svg"
    };

    const logoUrl = logos[tech.trim()];
    return `<img src="${logoUrl}" alt="${tech}" class="tech-icon mx-2" title="${tech}">`;
}

function selectSubject(value) {
    const subjectElement = document.getElementById('selected-subject');
    subjectElement.innerText = value;
    subjectElement.style.color = 'black';
    subjectElement.classList.remove('text-secondary');
    document.getElementById('subject').value = value;
}

$(document).ready(function () {
    $('#datepicker input').datepicker({
        format: 'dd/mm/yyyy', 
        autoclose: true,      
        todayHighlight: true  
    });

    $('#datepicker2 input').datepicker({
        format: 'dd/mm/yyyy', 
        autoclose: true,     
        todayHighlight: true 
    });
});