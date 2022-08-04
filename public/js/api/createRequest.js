const createRequest = (options = {}) => {

	const xhr = new XMLHttpRequest();
	xhr.onload = function() {
		if (xhr.readyState === xhr.DONE && xhr.status === 200) {
		options.callback(null, xhr.response);
		} else {
			options.callback(xhr.statusText, xhr.response);
		}
	};	

	if (options.method === 'GET') {
		options.url += '?';
		for (let i in options.data) {
			options.url += i + '=' + options.data[i] + '&'; 
		}
		options.url.slice(0,-1);
		try {
			xhr.open(options.method, options.url);
			xhr.responseType = 'json';
			xhr.send();	
		}
		catch (err) {
			callback(err);
        }		
	} else {
		const formData = new FormData();
		for (let i in options.data) {
			formData.append(i, options.data[i]);
		}
		
		try {
			xhr.open(options.method, options.url);
			xhr.responseType = 'json';
			xhr.send(formData);
		}
		catch (err) {
			callback(err);
		}
	}	
};

