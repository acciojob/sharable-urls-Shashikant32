document.getElementById('urlForm').addEventListener('submit', function(event) {
event.preventDefault();
	const name = document.getElementById('name').value;
    const year = document.getElementById('year').value;

	let queryString = '';
            if (name) {
                queryString += `?name=${encodeURIComponent(name)}`;
            }
            if (year) {
                queryString += (queryString ? '&' : '?') + `year=${encodeURIComponent(year)}`;
            }
	 const baseUrl = 'https://localhost:8080/';
            document.getElementById('url').innerText = baseUrl + queryString;
        });
