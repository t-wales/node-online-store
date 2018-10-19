exports.myMiddleware = (req, res, next) => {
	req.name = 'tony';
	next();
}

exports.homepage = (req, res) => {
	console.log(req.name);
	res.render('index');
}