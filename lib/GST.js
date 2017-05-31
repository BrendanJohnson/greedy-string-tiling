'use strict';

// Looks in stringB for stringA
module.exports = (stringA, stringB, minLength, callback) => {
	if (!stringA || !stringB) return false;

	class Markit {
		constructor(arraylen, minlen) {
			this.a = new Array(arraylen).fill(0);
			this.minlen = minlen;
		}
	}

	let markit = new Markit(stringA.length, minLength)
	let out = [];

	function maxsub(a, b, position, length) {
		const apos = position || 0;
		const lennow = length || 0;

		if ((a.length == 0) || (b.length == 0)) return [];
		if ((a[0] == b[0]) && (markit.a[apos] != 1)) {
			return [apos].concat(maxsub(a.slice(1), b.slice(1), apos+1, lennow+1));
		}
		else if ((a[0] != b[0]) && (lennow > 0)) {
			return [];
		}
		let maxa = maxsub(a, b.slice(1), apos);
		let maxb = maxsub(a.slice(1), b, apos+1);

		return (maxa.length > maxb.length)
					? maxa
					: maxb;
	};

	while (true) {
		let findmax = maxsub(stringA, stringB, 0, 0);
		if (findmax.length < markit.minlen) {
			break;
		}
		else {
			findmax.forEach((x, i) => {
				markit.a[x] = 1;

			});
			out = out.concat(findmax);
		}
	}
	const finalOutput = out.map((x, i) => {
		return stringA[x];
	}).join('');
	if (callback) callback(finalOutput);
	return finalOutput;
}