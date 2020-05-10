

function intern(name,id,email,school){
 return `<div class="card employee-card">
<div class="card-header intern">
    <h2 class="card-title">${name}</h2>
    <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>Intern</h3>
</div>
<div class="card-body info">
    <ul class="list-group">
        <li class="list-group-item">ID: ${id}</li>
        <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
        <li class="list-group-item">School:${school}</li>
    </ul>
</div>
</div>`
}

module.exports = {intern}