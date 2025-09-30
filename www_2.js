const http = require("http");
const url = require("url");
const path = require("path");
const fs = require("fs");
const dateET = require("./src/dateTimeET");
const textRef = "txt/vanasonad.txt";
const pageBegin = '<!DOCTYPE html>\n<html lang="et">\n<head>\n\t<meta charset="utf-8">\n\t<title>Õnne-Elisabeth Maripu, veebiprogrammeerimine</title>\n</head>\n<body>';
const pageBody = '\n\t<h1>Õnne-Elisabeth Maripu, veebiprogrammeerimine</h1>\n\t<p>See leht on tehtud <a href="https://www.tlu.ee/dt">Tallinna Ülikooli</a> veebiprogrammeerimise kursusel ja ei sisalda mõistlikku sisu.</p>\n\t<hr>';
const pageBanner ='<img src="vp_banner_2025_ID.jpg" alt="kursuse bänner">';
const pageBanner2 ='<img src="toimne_rakendus.jpg" alt="toimne rakendus kangastelgedel">';
const pageEnd = '\n</body>\n</html>';

http.createServer(function(req, res){
	//vaatan päringut
	console.log("Päring: " + req.url);
	let currentUrl = url.parse(req.url, true);
	console.log("parsituna: " + currentUrl.pathname);
	
	if(currentUrl.pathname === "/"){
		res.writeHead(200, {"Content-type": "text/html"});
		res.write(pageBegin);
		res.write(pageBanner);
		res.write(pageBody);
		res.write("\n\t<p>Täna on " + dateET.weekDay() + " " + dateET.longDate() + ".</p>");
		res.write('<p>Vaata valik <a href="/vanasonad">vanasõnu</a>.</p>');
		res.write('<p>Soovi kooral on siin nimekiri minu <a href="/kinnisideed">kinnisideedest</a> viimase kümnendi jooksul.</p>');
		res.write(pageEnd);
		return res.end();
	}
	
	else if(currentUrl.pathname === "/vanasonad"){
		res.writeHead(200, {"Content-type": "text/html"});
		fs.readFile(textRef, "utf8", (err, data)=>{
			if(err){
				res.write(pageBegin);
				res.write(pageBanner);
				res.write(pageBody);
				res.write("\n\t<p>Täna on " + dateET.weekDay() + " " + dateET.longDate() + ".</p><p>Kahjuks tänaseks ühtki vanasõna välja pakkuda pole!</p>");
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
				res.write(pageBanner);
				res.write(pageBody);
				res.write("\n\t<p>Täna on " + dateET.weekDay() + " " + dateET.longDate() + ".</p>");
				res.write("\n\t<h2>Valik Eesti vanasõnu</h2>")
				res.write(folkWisdomOutput);
				res.write(pageEnd);
				return res.end();
			}
		});
	}
	
else if(currentUrl.pathname === "/kinnisideed"){
		res.writeHead(200, {"Content-type": "text/html"});
		fs.readFile(textRef, "utf8", (err, data)=>{
			if(err){
				res.write(pageBegin);
				res.write(pageBanner2);
				res.write(pageBody);
				res.write("\n\t<p>Täna on " + dateET.weekDay() + " " + dateET.longDate() + ".</p><p>Mingi kamm on sees, hiljem peaks toimima</p>");
				res.write(pageEnd);
				return res.end();
				} else {
				res.write(pageBegin);
				res.write(pageBanner2);
				res.write(pageBody);
				res.write("\n\t<p>Täna on " + dateET.weekDay() + " " + dateET.longDate() + ".</p>");
				res.write("\n\t<h2>Jagasin huvialade listi kategooriate järgi. Olen nendesse valdkondadesse investeerinud liiga palju oma vaba aega.</h2><hr>");
				res.write('<p>käsitöö- <a href="https://www.youtube.com/playlist?list=PLczQUpEt88A8wY9YZBDbyDMYRbYNGuJZs">süstikpits</a>, kudumine, lõnga tegemine, vaselised</p><hr>');
				res.write('<p>kirjandusega seonduv eri tasemetel- <a href="https://archiveofourown.org/works/15287826/chapters/35465508">AO3</a>, "Videviku saaga", "Lõikuspäeva päikesetõus", üldine mütoloogia,</p><hr>');
				res.write('<p>mängud ja nendega seonduv lore- <a href="https://identityv.fandom.com/wiki/Identity_V_Wiki">"IdentityV"</a>, "Five Nights at Freddy`s", "The Panic Room: House of Secrets"</p><hr>');
				res.write('<p>muusikalid ja filmid- "Ooperifantoom", "Hadestown", "Noorkuu", "Muumia"</p><hr>');
				res.write("<p>Elus on kaks rasket asja: kangastelgede rakendamine ja veebiprogrammeerimine</p>");
				res.write(pageEnd);
				return res.end();
			}
		});
	}
	
	else if(currentUrl.pathname === "/vp_banner_2025_ID.jpg"){
		let bannerPath = path.join(__dirname, "images");
		fs.readFile(bannerPath + currentUrl.pathname, (err, data)=>{
			if(err){
				throw(err);
			} 
			else {
				res.writeHead(200, {"Content-type": "image/jpeg"});
				res.end(data);
			}
		});
	}
	
	else if(currentUrl.pathname === "/toimne_rakendus.jpg"){
		let bannerPath = path.join(__dirname, "images");
		fs.readFile(bannerPath + currentUrl.pathname, (err, data)=>{
			if(err){
				throw(err);
			} 
			else {
				res.writeHead(200, {"Content-type": "image/jpeg"});
				res.end(data);
			}
		});
	}
	
	else {
		res.end("Viga 404, ei leia sellist veebilehte!");
	}
}).listen(5216);