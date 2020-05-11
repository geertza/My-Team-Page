function css(){
    return`</div>
        </div>
    </div>
</body>
<style>    
body{
    font-size: 1.5vw;
}
.manager{
background-color: black;
color: red;
text-align: center;
}
.card-body{
background-color: dimgray;
height: 25vw;
}
.card-header{
height: 15vw;
}
.engineer{
background-color: dodgerblue;

}
.intern{
background-color: pink;

}

.grid-container > div{
width: 40vw;
border: 1px solid black;
text-align: center;
border-width:25px ;

}

.grid {
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(auto, 1fr);
grid-column-gap: 10px;
grid-row-gap: 10px;
position: relative;
left: 20px;
border-radius: 10px;
}
body{
background-color: cornflowerblue;
}
h2,h3{
font-size: 2.5vw;
}
h1{
font-size: 3.2vw;
}
@media only screen and (max-width: 550px) {
.grid {
grid-template-columns: repeat(1, 1fr);
}
.card-body{
height: 20vh;
}
}
</style>
</html>`}

module.exports = {css}