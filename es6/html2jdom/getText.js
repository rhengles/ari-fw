import hp from 'htmlparser2';

var du = hp.DomUtils;

function getText(tags) {
	return du.findAll(function(elem) {
		return (elem.type === 'text');
	}, tags.children || tags).reduce(function(p, c) {
		return p.concat( c.data );
	}, '');
}

export default getText;