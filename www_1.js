const http = require("http");
const fs = require("fs");
const dateTimeET = require("./src/dateTimeET");
const oldWisdomList = require("./class_03.js");
const pageBegin = `<!DOCTYPE html><html lang="et"><head><meta charset="utf-8"><title>Õnne-Elisabeth Maripu, veebiprogrammeerimine</title></head><body>`;
const pageBody = `<h1>Õnne-Elisabeth Maripu, veebiprogrammeerimine</h1><p>\n See leht on tehtud <a href="https://www.tlu.ee/dt">Tallinna Ülikooli </a> veebiprogrameerimise kursusel ja ei sisalda mõistlikku sisu.</p><hr><p>\n Kirjutan siis veidi endast. Olen pärit suurperest, kuhu kuuluvad vanemad, mina ja mu 4 nooremat õde/venda. Olen tegelenud käsitööga üle viie aasta. Sündisin "kui raske see ikka olla saab" mentaliteediga, mistõttu eelistan luua ise esemeid nende ostmise asemel. Minu käsitöö oskused ulatuvad pinjatade tegemisest kangastelgedel kudumiseni. Fun fact, Minu loodud pinjatad olid ka leitavad Baltoscandali 2022 lavastuses <a href="https://teater.ee/teatriinfo/lavastused/liisa-saaremael-emer-vark-eesti-sihtkoht-teadmata-12-hmr-baltoscandal-2022-rakvere-teater-baltoscandal/">"Sihtkoht teadmata 12 HMR"</a> kus olin nii dekoreeria kui ka performer.\n Lapsepõlvest saati on mind ka huvitanud erinevad müüdid ja legendid, mis on nüüdseks segunenud minu huviga ajalooliste/etnoloogiliste motiivide ja nende tähenduste vastu.</p>`
const pageEnd = `\n</body>\n</html>`
http.createServer(function(req, res){
	res.writeHead(200,{"content-type": "text/html"});
	//res.write("Läkski käima!");
	res.write(pageBegin);
	res.write(pageBody);
	res.write("\n\t<p>Täna on " + dateTimeET.weekDay() + ".</p>");
	res.write("\n\t<p>Tänane vanasõna on: " + oldWisdomList[Math.round(Math.random() * (oldWisdomList.length -1))]".</p>");
	res.write(pageEnd);
	return res.end();
}).listen(5216);