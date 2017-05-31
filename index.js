const gst = require('./lib/GST');
// fair play
const a = 'abcdefgh';
const b = 'deabcfgh';
// fair play
const g = 'abcdefghi3ge';
const h = 'abcdefghi124';
// not fair play
const c = 'abcdefghi3ges';
const d = 'abcdefghi124s';

function asyncGST() {
	return new Promise((resolve, reject) => {  
  		return setTimeout(()=> {
			gst(g, h, 3, (result) => {
  				resolve(result)
  			});
  		});
  		
	});
};

asyncGST().then((result) => {
	console.log(result);
})
