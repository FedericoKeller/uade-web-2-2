function nuevoID () {
    return Math.random().toString(36).substr(2, 9);
  }
	
  let series = [];
  
  const seriesPendientesEl = document.getElementById("series");
  
  const crearSerie = (serie, platform, description) => {
    return {id: nuevoID(), serie, platform, description, pendiente: false, fechaCreacion: Date(Date.now()).toString()}
  }
  
  
  document.getElementById("add").addEventListener("click", () => {
    const serie = document.getElementById("serie").value;
    const platform = document.getElementById("platform").value;
    const description = document.getElementById("description").value;
  
  
    let serieNueva = crearSerie(serie, platform, description);
    
    series = [...series, serieNueva];
    
    
    mostrarSeries();
  })
  
  
  const mostrarSeries = () => {
    let pendientes = series.filter(serie => serie.pendiente == false);
  

    const pendientesHTML = pendientes.map(serie =>
       `
      <li id="${serie.id}">
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
  

  