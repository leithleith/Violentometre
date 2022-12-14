if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js');
};
var toggle = false;
function calcul()
{
  var A = 0;
  var B = 0;
  var C = 0;
  var D = 0;
  var E = 0;
  for (i=1;i<23;i++)
    {
      if (document.getElementById("" + i).checked)
        {
      switch (document.getElementById("" + i).name.charAt(0))
        {
          case "A":
            A += 1;
            break;
          case "B":
            B += 1;
            break;
          case "C":
            C += 1;
            break;
          case "D":
            D += 1;
            break;
          case "E":
            E += 1;
            break;
          default:
        }
          }
    }
  var data = [{
    r: [A/5*100, 0, 0, 0, 0],
    theta: ["Environnement pro sain", "Environnement pro sexiste et hostile", "Harcèlement sexuel", "Agressions sexuelles", "Viols"],
    name: "Environnement pro sain",
    marker: {color: "rgb(36, 140, 70)"},
    type: "barpolar"
  },
   {
    r: [0, B/8*100, 0, 0, 0],
    theta: ["Environnement pro sain", "Environnement pro sexiste et hostile", "Harcèlement sexuel", "Agressions sexuelles", "Viols"],
    name: "Environnement pro sexiste et hostile",
    marker: {color: "rgb(252, 208, 0)"},
    type: "barpolar"
  },
           {
    r: [0, 0, C/5*100, 0, 0],
    theta: ["Environnement pro sain", "Environnement pro sexiste et hostile", "Harcèlement sexuel", "Agressions sexuelles", "Viols"],
    name: "Harcèlement sexuel",
    marker: {color: "rgb(255, 147, 51)"},
    type: "barpolar"
  },
           {
    r: [0, 0, 0, D/3*100, 0],
    theta: ["Environnement pro sain", "Environnement pro sexiste et hostile", "Harcèlement sexuel", "Agressions sexuelles", "Viols"],
    name: "Agressions sexuelles",
    marker: {color: "rgb(255, 0, 36)"},
    type: "barpolar"
  },
           {
    r: [0, 0, 0, 0, E*100],
    theta: ["Environnement pro sain", "Environnement pro sexiste et hostile", "Harcèlement sexuel", "Agressions sexuelles", "Viols"],
    name: "Viols",
    marker: {color: "rgb(0,0,0)"},
    type: "barpolar"
  }]
var layout = {
    paper_bgcolor: '#1e1e1e',
    font: {size: 12, color: '#cdcccc'},
    showlegend: false,
    polar: {
      bgcolor: "#d7d9dc",
      barmode: "overlay",
      bargap: 0,
      radialaxis: {ticks: "", showline: false, showticklabels: false, range: [0,100]},
      angularaxis: {direction: "clockwise"}
    }
  }
var config = {
    displayModeBar: true,
    responsive: true,
    displaylogo: false,
    locale: 'fr',
    modeBarButtonsToAdd: [
        {
          name: 'Passer en plein écran',
          icon: Plotly.Icons.zoombox,
          click: function(gd) {
            document.getElementById("rose").requestFullscreen();
          }}],
    modeBarButtonsToRemove: ['pan2d','select2d','lasso2d','resetScale2d','zoom2d'],
    scrollZoom: false,
    toImageButtonOptions: {
        filename: 'Violentomètre-' + Date.now(),
        height: 800,
        width: 800
    }
}
Plotly.newPlot("rose", data, layout, config)
}
function menu() {
    if (toggle) {
        document.getElementById("menu").style.visibility =  'hidden';
        document.getElementById("menu").style.display = 'none';
        document.getElementById("boutonmenu").innerHTML = '☰';
        toggle = !toggle;
    }
    else {
        document.getElementById("menu").style.visibility =  'visible';
        document.getElementById("menu").style.display = 'block';
        document.getElementById("boutonmenu").innerHTML = 'X';
        toggle = !toggle;
    }
}