

function intern(name,id,email,school){
 return `<!-- start of intern -->
 <div class="grid-container">
 <div class="card-header intern">
     <h2 class="card-title">${name}</h2>
     <h3 class="card-title"><i class="fas fa-bong"></i>Engineer</h3>
 </div>
 <div class="card-body info">
     <ul class="list-group">
         <li class="list-group-item">ID: ${id}</li>
         <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
         <li class="list-group-item">School:${school}</li>
         </ul>
 </div>
</div>
`
}

module.exports = {intern}