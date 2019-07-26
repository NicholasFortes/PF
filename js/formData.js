function formData(){
	var inpData = document.getElementById('inpData');
	var date = inpData.value;
	var dateDef = date.split('-').reverse().join('/');
	return dateDef;
}