//create xmlhttp request object
const xhr = new XMLHttpRequest();

 // create callback
xhr.onreadystatechange = function () {
	if(xhr.readyState === 4) {
		if(xhr.status === 200) {
			const employees = JSON.parse(xhr.responseText);
			
			let statusHTML = '<ul class="bulleted">';
			
			for (let i = 0; i < employees.length; i ++) {
				if (employees[i].inoffice === true) {
					statusHTML += '<li class="in">';
				} else {
					statusHTML += '<li class="out">';  
				}
				statusHTML += employees[i].name;
				statusHTML += '</li>';
			}
			
			statusHTML += '</ul>'; 
			
			document.querySelector('#employeeList').innerHTML = statusHTML;
		} else {
			alert(xhr.statusText);
		}
	}
};

//open a request
xhr.open('GET', 'data/employees.json');

//send the request
xhr.send();
