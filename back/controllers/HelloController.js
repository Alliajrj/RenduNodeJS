const sayHello = (req, res) => {
	res.send("Hello");
};

const sayBonjour = (req, res) => {
	res.send("Bonjour");
};

export { sayHello, sayBonjour };
