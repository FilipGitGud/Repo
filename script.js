function Auto(tip, boja, broj_sjedala, model) {
    this.tip = Opel;
    this.boja = Plava;
    this.broj_sjedala = 4;
    this.model = Vectra;
  }
  
  var NoviAuto = new Auto("BMW", "Crna", 4, "E36");

  document.getElementById("primjer").innerHTML =
"Model novog auta je: " + NoviAuto.model + ". Boja auta je " + NoviAuto.boja;
  
 