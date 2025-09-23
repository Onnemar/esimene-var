	const http = require("http");
	const url = require("url");
	const path = require 
	const fs = require("fs");
	const dateTimeET = require("./src/dateTimeET");
	const oldWisdomList = require("./class_03.js");
	const pageBegin = `<!DOCTYPE html><html lang="et"><head><meta charset="utf-8"><title>Õnne-Elisabeth Maripu, veebiprogrammeerimine</title></head><body>`;
	const pageBody = `<h1>Õnne-Elisabeth Maripu, veebiprogrammeerimine</h1><p>\n See leht on tehtud <a href="https://www.tlu.ee/dt">Tallinna Ülikooli </a> veebiprogrameerimise kursusel ja ei sisalda mõistlikku sisu.</p><hr><p>\n Kirjutan siis veidi endast. Olen pärit suurperest, kuhu kuuluvad vanemad, mina ja mu 4 nooremat õde/venda. Olen tegelenud käsitööga üle viie aasta. Sündisin "kui raske see ikka olla saab" mentaliteediga, mistõttu eelistan luua ise esemeid nende ostmise asemel. Minu käsitöö oskused ulatuvad pinjatade tegemisest kangastelgedel kudumiseni. Fun fact, Minu loodud pinjatad olid ka leitavad Baltoscandali 2022 lavastuses <a href="https://teater.ee/teatriinfo/lavastused/liisa-saaremael-emer-vark-eesti-sihtkoht-teadmata-12-hmr-baltoscandal-2022-rakvere-teater-baltoscandal/">"Sihtkoht teadmata 12 HMR"</a> kus olin nii dekoreeria kui ka performer.\n Lapsepõlvest saati on mind ka huvitanud erinevad müüdid ja legendid, mis on nüüdseks segunenud minu huviga ajalooliste/etnoloogiliste motiivide ja nende tähenduste vastu.</p>`
	const pageBanner ='<img src="vp_banner_2025_ID.jpg" alt="kursuse banner">'
	const pageEnd = '\n</body>\n</html>`'
	http.createServer (function(req, res)){
		//vaatan päringut
		console.log("päring: " + req url);
		let currntUrl = url.parse (req.url, true);
		console.log("parsituna: " + currentUrl.pathname);
		if(currentUrl.pathname === "/"){
		res.writeHead(200,{"content-type": "text/html"});
		res.write(pageBegin);
				res.write(pageBody);
				res.write("\n\t<p>Täna on " + dateEt.weekDay() + " " + dateEt.longDate() + ".</p>");
				res.write('<p>Vaata valikut <a href="/vanasõnad"> vanasõnadest </a>.<1/p>');
				res.write(pageEnd);
				return res.end();
	}
	else if(currentUrl.pathname === "/vanasonad");
	http.createServer(function(req, res)){
		res.writeHead(200,{"content-type": "text/html"});
		//res.write("Läkski käima!");
		//res.write(pageBegin);
		//res.write(pageBody);
		//res.write("\n\t<p>Täna on " + dateTimeET.weekDay() + ".</p>");
		//res.write("\n\t<p>Tänane vanasõna on: " + oldWisdomList[Math.round(Math.random() * (oldWisdomList.length -1))]".</p>");
		//res.write(pageEnd);
		//return res.end();
		http.createServer(function(req, res){
		res.writeHead(200, {"Content-type": "text/html"});
		fs.readFile(textRef, "utf8", (err, data)=>{
			if(err){
				res.write(pageBegin);
				res.write(pageBody);
				res.write("\n\t<p>Täna on " + dateEt.weekDay() + " " + dateEt.longDate() + ".</p><p>Kahjuks tänaseks ühtki vanasõna välja pakkuda pole!</p>");
				res.write(pageEnd);
				return res.end();
			} else {
				let oldWisdomList = data.split(";");
				let folkWisdomOutput = "\n\t<ol>";
				for (let i = 0; i < oldWisdomList.length; i ++){
					folkWisdomOutput += "\n\t\t<li>" + oldWisdomList[i] + "</li>";
				}
				folkWisdomOutput += "\n\t</ol>";
				res.write(pageBegin);
				res.write(pageBody);
				res.write("\n\t<p>Täna on " + dateEt.weekDay() + " " + dateEt.longDate() + ".</p>");
				res.write("\n\t<h2>Valik Eesti vanasõnu</h2>")
				res.write(folkWisdomOutput);
				res.write(pageEnd);
				return res.end();
			}
		});
	}
		
		else if (currentUrl.pathname === "/vp_banner_2025_ID.jpg"){
			let bannerPath = path.join(__dirname, "images");
			fs.readFile(bannerPath + currentUrl.pathname, (err, data)=>{
				if (err){
					throw(err);
				}
				else{
					res.writeHead(200, {"Content-type": "image/jpeg"});
					res.end(data);
				}	
			});
		}
		
		else {res.end ("Viga 404, ei leia sellist veebilehte!")}
	}).listen(5216);