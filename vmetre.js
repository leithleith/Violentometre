if('serviceWorker' in navigator)
{
    navigator.serviceWorker.register('sw.js');
};
function melanger()
{
  tableau = ['<input type="checkbox" id="1" name="A1" value="1"><label id="label1" for="1">Remarques et critiques acceptées</label><br>', '<input type="checkbox" id="2" name="A2" value="1"><label id="label2" for="2">Promotions pour les femmes comme pour les hommes</label><br>', '<input type="checkbox" id="3" name="A3" value="1"><label id="label3" for="3">Travail en confiance et autonomie</label><br>', '<input type="checkbox" id="4" name="A4" value="1"><label id="label4" for="4">Reconnaissance du travail</label><br>', '<input type="checkbox" id="5" name="A5" value="1"><label id="label5" for="5">Refus de relations extraprofessionnelles accepté</label><br>', '<input type="checkbox" id="6" name="B1" value="1"><label id="label6" for="6">Commentaires sur l\'apparence</label><br>', '<input type="checkbox" id="7" name="B2" value="1"><label id="label7" for="7">Parole coupée systématiquement</label><br>', '<input type="checkbox" id="8" name="B3" value="1"><label id="label8" for="8">Blague sur les promotions canapé</label><br>', '<input type="checkbox" id="9" name="B4" value="1"><label id="label9" for="9">Questions indiscrètes insistantes sur la vie privée</label><br>', '<input type="checkbox" id="10" name="B5" value="1"><label id="label10" for="10">Blagues sexistes sur les blondes</label><br>', '<input type="checkbox" id="11" name="B6" value="1"><label id="label11" for="11">Evocation de sexualité sans accord</label><br>', '<input type="checkbox" id="12" name="B7" value="1"><label id="label12" for="12">Mécontentement après refus d\'être raccompagnée</label><br>', '<input type="checkbox" id="13" name="B8" value="1"><label id="label13" for="13">Recherche systématique d\'être seul avec une femme</label><br>', '<input type="checkbox" id="14" name="C1" value="1"><label id="label14" for="14">Images à caractère pornographique visibles</label><br>', '<input type="checkbox" id="15" name="C2" value="1"><label id="label15" for="15">Regards insistants sur la poitrine et les fesses</label><br>', '<input type="checkbox" id="16" name="C3" value="1"><label id="label16" for="16">SMS ou courriels à caractère sexuel sans accord</label><br>', '<input type="checkbox" id="17" name="C4" value="1"><label id="label17" for="17">Demande insistante d\'un acte sexuel</label><br>', '<input type="checkbox" id="18" name="C5" value="1"><label id="label18" for="18">Hostilité liée au refus d\'un acte sexuel</label><br>', '<input type="checkbox" id="19" name="D1" value="1"><label id="label19" for="19">Menaces professionnelles pour obtenir un acte sexuel</label><br>', '<input type="checkbox" id="20" name="D2" value="1"><label id="label20" for="20">Baiser forcé ou par surprise</label><br>', '<input type="checkbox" id="21" name="D3" value="1"><label id="label21" for="21">Toucher les seins, fesses ou cuisses sans consentement</label><br>', '<input type="checkbox" id="22" name="E1" value="1"><label id="label22" for="22">Fellation ou pénétration forcée</label><br>'];
  for (var i = tableau.length - 1; i > 0; i--)
  {
    var j = Math.floor(Math.random() * (i + 1));
    [tableau[i], tableau[j]] = [tableau[j], tableau[i]];
  }
  for (var n=0;n<tableau.length;n++)
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
  for (var i=1;i<23;i++)
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
  if (A+B+C+D+E != 0)
  {
    var rang;
    var rE = [0,0,0,0,0];
    var rD = [0,0,0,0,0];
    var rC = [0,0,0,0,0];
    var rB = [0,0,0,0,0];
    var rA = [0,0,0,0,0];

    if (A != 0) {A = A*4; rang = 0;};
    if (B != 0) {B = B*5/2; rang = 1;};
    if (C != 0) {C = C*4; rang = 2};
    if (D != 0) {D = 20; rang = 3};
    if (E != 0) {E = 20; rang = 4};

    rE[rang] = E;
    rD[rang] = D;
    rC[rang] = C;
    rB[rang] = B;
    rA[rang] = A;
    
    //var vtheta = ["Viols", "Agressions sexuelles", "Harcèlement sexuel", "Environnement pro sexiste et hostile", "Environnement pro sain"];
    var vtheta = ["OK", "SH", "H", "A", "V"];
    var data = [{
      r: rA,
      theta: vtheta,
      name: "Environnement pro sain",
      //marker: {color: couleur(A, "OK")},
      marker: {color: "green"},
      type: "barpolar",
      hoverinfo: "name"
    },
    {
      r: rB,
      theta: vtheta,
      name: "Environnement pro sexiste et hostile",
      //marker: {color: couleur(B, "SH")},
      marker: {color: "yellow"},
      type: "barpolar",
      hoverinfo: "name"
    },
    {
      r: rC,
      theta: vtheta,
      name: "Harcèlement sexuel",
      //marker: {color: couleur(C, "H")},
      marker: {color: "orange"},
      type: "barpolar",
      hoverinfo: "name"
    },
    {
      r: rD,
      theta: vtheta,
      name: "Agression sexuelle",
      //marker: {color: couleur(D, "A")},
      marker: {color: "red"},
      type: "barpolar",
      hoverinfo: "name"
    },
    {
      r: rE,
      theta: vtheta,
      name: "Viol",
      //marker: {color: couleur(E, "V")},
      marker: {color: "black"},
      type: "barpolar",
      hoverinfo: "name"
    }
    ];
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
          barmode: "stack",
          bargap: 0,
          radialaxis: {ticks: "", showline: false, showticklabels: false},
          angularaxis: {direction: "clockwise"}
        },
        autosize: true
      };
    var config = {
        staticPlot: true,
        responsive: true
    };
    Plotly.newPlot("rose", data, layout, config);
    var restitution = "";
    var coches = [];
    var couleur = ["vert","vert","vert","vert","vert","jaune","jaune","jaune","jaune","jaune","jaune","jaune","jaune","orange","orange","orange","orange","orange","rouge","rouge","rouge","noir"];
    for (var i=0;i<tableau.length;i++)
    {
      restitution += document.getElementById((i+1).toString()).outerHTML + document.getElementById("label" + (i+1).toString()).outerHTML + "<br>";
      if (document.getElementById((i+1).toString()).checked)
      {
        coches[i] = true;
      }
      else
      {
        coches[i] = false;
      }
    }
    document.getElementById("formulaire").innerHTML = restitution;
    for (var i=0;i<coches.length;i++)
    {      
      if (coches[i] == true)
      {
        document.getElementById((i+1).toString()).checked = true;
      }
      document.getElementById((i+1).toString()).disabled = true;
      document.getElementById("label" + (i+1).toString()).className = couleur[i];
    }
  }
}
function couleur(score, categorie)
{
  if (score == 0)
  {
    return "#d7d9dc";
  }
  else
  {
    const hachagedefaut = "#d7d9dc";
    const hachagecategorie = {
      "V": "black",
      "A": "red",
      "H": "orange",
      "SH": "yellow",
      "OK": "green"
    };
    return hachagecategorie[categorie] || hachagedefaut;
  }
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