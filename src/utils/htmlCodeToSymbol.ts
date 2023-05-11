const htmlCodeToSymbol = (str: string) => {
	return str.replace(/&#(\d+);/g, function (match, dec) {
		return String.fromCharCode(dec);
	});
};

export default htmlCodeToSymbol;
