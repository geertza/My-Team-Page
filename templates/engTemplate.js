
// insert values into html layout
function eng(name,id,email,github){
    return`<!-- start of engineer -->
    <div class="grid-container">
                    <div class="card-header engineer">
                        <h2 class="card-title">${name}</h2>
                        <h3 class="card-title"><i class="fas fa-people-carry"></i>Engineer</h3>
                    </div>
                    <div class="body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                            <li class="list-group-item">GitHub: <a href="https://github.com/${github}" target="_blank" rel="noopener noreferrer">${github}</a></li>
                        </ul>
                    </div>
                </div>
                `}
module.exports = {eng}