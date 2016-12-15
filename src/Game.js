var querystring = require('querystring');
var https = require('https');

class Game {
	static login(sr) {

		var data = querystring.stringify({
			sr: 'abc',
		});

		let cb = function(res) {
			console.log('STATUS: ' + res.statusCode);
			console.log('HEADERS: ' + JSON.stringify(res.headers));
			res.setEncoding('utf8');
			res.on('data', function (chunk) {
				console.log(Date.now(), 'BODY: ' + chunk);
			});
		};

		let req = https.get({
			hostname: 'royal-lan-6.socialgamenet.com',
			path: '/facebook/api',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				'Content-Length': Buffer.byteLength(data)
			}
		}, cb);

		req.on('error', function(e) {
			console.log('problem with request: ' + e.message);
		});

		// https.get('https://d1w4gwzq9ek9tg.cloudfront.net/v2/game_config/A/en_US/96705.json', (res) => {
		https.get('https://royal-lan-6.socialgamenet.com/flash/version.json', (res) => {
			res.on('data', function (chunk) {
				console.log(Date.now(), 'data BODY: ' + chunk);
			});
		})
	}
}

export default Game;
