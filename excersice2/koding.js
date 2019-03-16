var bilangan1;
var bilangan2;
var bilangan3;
var proses;
var tampil;
var proses_kondisi = false;
var total;

function btn(angka){
	tampil = document.getElementById("tampilan").value;
	if ( tampil == "0")
	{
		tampil=angka;
	}

	else
	{
		tampil += angka;
	}

	document.getElementById("tampilan").value=tampil;
}

function Koma(){
	tampil=document.getElementById("tampilan").value;
	if ( tampil.includes(".") == false ){
		tampil += ".";
	}

	document.getElementById("tampilan").value=tampil;
}

function Clear(){
	document.getElementById("tampilan").value="";
	bilangan1=0;
	bilangan2=0;
	proses_kondisi = false;
}

function Delete(){
	bilangan1=document.getElementById("tampilan").value;
	bilangan2=bilangan1.length-1;
	bilangan3=bilangan1.substring(0,bilangan2);
	document.getElementById("tampilan").value=bilangan3;

}

function btnclick_proses(o){
	proses_kondisi=true;
	bilangan1=parseFloat(document.getElementById("tampilan").value);
	proses=o;
	document.getElementById("tampilan").value="";
}

function Negatif_positif(input){
	tampil=document.getElementById("tampilan").value;
	if ( tampil.includes("-") == false ){
		tampil += "-";
	}

	else{
		tampil += "+";
	}

	document.getElementById("tampilan").value=tampil;


}

function Hasil(){
	if (proses_kondisi == true){
		bilangan2=parseFloat(document.getElementById("tampilan").value);
		switch(proses){
			case 1 :
				total=bilangan1+bilangan2;
				document.getElementById("tampilan").value=total;
				break;
			case 2 :
				total=bilangan1-bilangan2;
				document.getElementById("tampilan").value=total;
				break;
			case 3 :
				total=bilangan1*bilangan2;
				document.getElementById("tampilan").value=total;
				break;
			case 4 :
				total=bilangan1/bilangan2;
				document.getElementById("tampilan").value=total;
				break;

		}

		proses_kondisi=false;
		bilangan1=0;
		bilangan2=0;
		total=0;
	}
}