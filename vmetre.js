if('serviceWorker' in navigator)
{
    navigator.serviceWorker.register('sw.js');
};
function melanger()
{
  var tableau = ['<input type="checkbox" id="1" name="A1" value="1">Remarques et critiques acceptées<br/>', '<input type="checkbox" id="2" name="A2" value="1">Promotions pour les femmes comme pour les hommes<br/>', '<input type="checkbox" id="3" name="A3" value="1">Travail en confiance et autonomie<br/>', '<input type="checkbox" id="4" name="A4" value="1">Reconnaissance du travail<br/>', '<input type="checkbox" id="5" name="A5" value="1">Refus de relations extraprofessionnelles accepté<br/>', '<input type="checkbox" id="6" name="B1" value="1">Commentaires sur l\'apparence<br/>', '<input type="checkbox" id="7" name="B2" value="1">Parole coupée systématiquement<br/>', '<input type="checkbox" id="8" name="B3" value="1">Blague sur les promotions canapé<br/>', '<input type="checkbox" id="9" name="B4" value="1">Questions indiscrètes insistantes sur la vie privée<br/>', '<input type="checkbox" id="10" name="B5" value="1">Blagues sexistes sur les blondes<br/>', '<input type="checkbox" id="11" name="B6" value="1">Evocation de sexualité sans accord<br/>', '<input type="checkbox" id="12" name="B7" value="1">Mécontentement après refus d\'être raccompagnée<br/>', '<input type="checkbox" id="13" name="B8" value="1">Recherche systématique d\'être seul avec une femme<br/>', '<input type="checkbox" id="14" name="C1" value="1">Images à caractère pornographique visibles<br/>', '<input type="checkbox" id="15" name="C2" value="1">Regards insistants sur la poitrine et les fesses<br/>', '<input type="checkbox" id="16" name="C3" value="1">SMS ou courriels à caractère sexuel sans accord<br/>', '<input type="checkbox" id="17" name="C4" value="1">Demande insistante d\'un acte sexuel<br/>', '<input type="checkbox" id="18" name="C5" value="1">Hostilité liée au refus d\'un acte sexuel<br/>', '<input type="checkbox" id="19" name="D1" value="1">Menaces professionnelles pour obtenir un acte sexuel<br/>', '<input type="checkbox" id="20" name="D2" value="1">Baiser forcé ou par surprise<br/>', '<input type="checkbox" id="21" name="D3" value="1">Toucher les seins, fesses ou cuisses sans consentement<br/>', '<input type="checkbox" id="22" name="E1" value="1">Fellation ou pénétration forcée<br/>'];
  for (i = tableau.length - 1; i > 0; i--)
  {
    var j = Math.floor(Math.random() * (i + 1));
    [tableau[i], tableau[j]] = [tableau[j], tableau[i]];
  }
  for (n=0;n<tableau.length;n++)
  {
    document.getElementById("formulaire").innerHTML += tableau[n];
  }
  document.getElementById("formulaire").innerHTML += '<hr/><button onclick="calcul()">Calculer</button>';
}
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
  //var vtheta = ["Viols", "Agressions sexuelles", "Harcèlement sexuel", "Environnement pro sexiste et hostile", "Environnement pro sain"];
  var vtheta = ["V", "A", "H", "SH", "OK"];
  var data = [{
    r: [E*100, 0, 0, 0, 0],
    theta: vtheta,
    name: "Viols",
    marker: {color: "rgb(0,0,0)"},
    type: "barpolar",
    hoverinfo: "name"
  },
  {
    r: [0, D/3*100, 0, 0, 0],
    theta: vtheta,
    name: "Agressions sexuelles",
    marker: {color: "rgb(255, 0, 36)"},
    type: "barpolar",
    hoverinfo: "name"
  },
           {
    r: [0, 0, C/5*100, 0, 0],
    theta: vtheta,
    name: "Harcèlement sexuel",
    marker: {color: "rgb(255, 147, 51)"},
    type: "barpolar",
    hoverinfo: "name"
  },
  {
    r: [0, 0, 0, B/8*100, 0],
    theta: vtheta,
    name: "Environnement pro sexiste et hostile",
    marker: {color: "rgb(252, 208, 0)"},
    type: "barpolar",
    hoverinfo: "name"
  },   
  {
    r: [0, 0, 0, 0, A/5*100],
    theta: vtheta,
    name: "Environnement pro sain",
    marker: {color: "rgb(36, 140, 70)"},
    type: "barpolar",
    hoverinfo: "name"
  }]
var layout = {
    paper_bgcolor: '#1e1e1e',
    font: {size: 12, color: '#cdcccc'},
    margin: {
      b: 10,
      l: 10,
      r: 10,
      t: 50
    },
    legend: {
      x: 0.2,
      y: -0.5
    },
    showlegend: true,
    polar: {
      bgcolor: "#d7d9dc",
      barmode: "overlay",
      bargap: 0,
      radialaxis: {ticks: "", showline: false, showticklabels: false, range: [0,100]},
      angularaxis: {direction: "clockwise"}
    },
    autosize: true
  }
var config = {
    staticPlot: true,
    responsive: true
}
Plotly.newPlot("rose", data, layout, config)
}
function opentab(evt, tabname)
{
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
	  tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
	  tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(tabname).style.display = "block";
	evt.currentTarget.className += " active";
}