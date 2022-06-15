  let series = [];

  $("button").on("touchstart mousedown", function () {
    $(this).addClass("clicked");
  });
  
  $("button").on("touchend mouseup", function () {
    $(this).removeClass("clicked");
    $(this).blur();
  });


  
  const seriesPendientesEl = document.getElementById("series");
  
  const crearSerie = (serie, platform, description) => {
    return {serie, platform, description}
  }
  
  
  document.getElementById("add").addEventListener("click", () => {
    const serie = document.getElementById("serie").value;
    const platform = document.getElementById("platform").value;
    const description = document.getElementById("description").value;
  
  
    let serieNueva = crearSerie(serie, platform, description);
    
    series.push(serieNueva);
    
    
    mostrarSeries();
  })
  
  
  const mostrarSeries = () => {
    const pendientesHTML = series.map(serie =>
       `
      <li>
        <ul>
            <li>Serie: ${serie.serie}</li>
            <li>Plataforma: ${serie.platform}</li>
            <li>Descripción: ${serie.description}</li>
        </ul>
    </li>
      `
    );
  
  seriesPendientesEl.innerHTML = pendientesHTML.join('');
  
  
  }
  

  