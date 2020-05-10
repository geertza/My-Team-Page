const app= require('../app.js');
engTemplate= engTemplate
// insert values into html layout
let engTemp=console.log(app) `-----------------------------------------------------------------------
<div class="card employee-card">
                    <div class="card-header engineer">
                        <h2 class="card-title">${engTemplate.name}</h2>
                        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>Engineer</h3>
                    </div>
                    <div class="card-body info">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${engTemplate}</li>
                            <li class="list-group-item">Email: <a href="mailto:{{ email }}">${engTemplate.name}</a></li>
                            <li class="list-group-item">GitHub: <a href="https://github.com/${engTemplate.github}" target="_blank" rel="noopener noreferrer">${EngTemplate.github}</a></li>
                        </ul>
                    </div>
                </div>`
module.exports = engTemp