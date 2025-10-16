import './projlink.css'
import comet_s from './images/comet-still.png'

function ProjLink() {
return (
    <div className="click4project">
        <header className="click4project-header">
            <p>
                check out some projects here!
            </p>
        </header>
        <div className="comets">
            <img src='https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGIzMzlyZmp0MmtxcnV1NHpwamNiaXJ4Mm1pdjI2eGh4cmRicWE4MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/OtuWgEoE6bYyZfjvPx/giphy.gif'
         alt='comet gif' class="comet-animated"/>
            <img src={comet_s} alt='comet' class="comet-still"/>
        </div>
    </div>
  );

}

export default ProjLink;
