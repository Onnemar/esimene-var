	const http = require("http");
	const dateEt = require("./src/dateTimeET");
	const pageBegin = '<!DOCTYPE html><html lang="et"><head><meta charset="utf-8"><title>Õnne-Elisabeth Maripu, veebiprogrammeerimine</title></head><body>';
	const pageBody = '\n\t<h1>Õnne-Elisabeth Maripu, veebiprogrammeerimine</h1>\n\t<p>See leht on tehtud <a href="https://www.tlu.ee/dt">Tallinna Ülikooli</a> veebiprogrammeerimise kursusel ja ei sisalda mõistlikku sisu.</p><p></p><hr><p>\n Kirjutan siis veidi endast. Olen pärit suurperest, kuhu kuuluvad vanemad, mina ja mu 4 nooremat õde/venda. Olen tegelenud käsitööga üle viie aasta. Sündisin "kui raske see ikka olla saab" mentaliteediga, mistõttu eelistan luua ise esemeid nende ostmise asemel. Minu käsitöö oskused ulatuvad pinjatade tegemisest kangastelgedel kudumiseni. Fun fact, Minu loodud pinjatad olid ka leitavad Baltoscandali 2022 lavastuses <a href="https://teater.ee/teatriinfo/lavastused/liisa-saaremael-emer-vark-eesti-sihtkoht-teadmata-12-hmr-baltoscandal-2022-rakvere-teater-baltoscandal/">"Sihtkoht teadmata 12 HMR"</a> kus olin nii dekoreeria kui ka performer.\n Lapsepõlvest saati on mind ka huvitanud erinevad müüdid ja legendid, mis on nüüdseks segunenud minu huviga ajalooliste/etnoloogiliste motiivide ja nende tähenduste vastu.</p>';
	const pageEnd = '\n</body>\n</html>';

	http.createServer(function(req, res){
		res.writeHead(200, {"Content-type": "text/html"});
		//res.write("LÃ¤kski kÃ¤ima!");
		res.write(pageBegin);
		res.write(pageBody);
		res.write("\n\t<p>Täna on " + dateET.weekDay() + ".</p>");
		res.write(pageEnd);
		return res.end();
	}).listen(5216);