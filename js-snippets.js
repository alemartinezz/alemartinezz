
// necesito decimales
function formatNumbers(number){
    return number.toLocaleString('en-US', {maximumFractionDigits:2});
}

// No necesito decimales
// 1.
var n = 34523453.345
n.toLocaleString()
"34,523,453.345"
// 2.
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}


// Regex only numbers
const ci = document.getEmentById('input-document').value;
const regex = new RegExp('^[0-9]*$');
	
ci.onkeyup = (e) => {
	if (regex.test(ci)){
		ci.style.boxShadow = 'none';
	} else {
		ci.style.boxShadow = '0 0 3.5px #800000';
	}
}


// Option selected value
const select = document.getElementById('select-usd-bank');
const value = select.options[select.selectedIndex].value;
if (value == "PREX") {
	document.getElementById('cuenta_o_caja').style.display = 'none';
}

select.onchange = (e) => {
	if (e.target[e.target.selectedIndex].text == "PREX") {
		document.getElementById('cuenta_o_caja').style.display = 'none';
	} else {
		document.getElementById('cuenta_o_caja').style.display = 'grid';
	}


// Check age from input
let birthdate = document.getElementById('input-birthdate');
birthdate.value = birthdate.value.split('T')[0];
function checkAge(birthdate.value) {
    let flag = false
    if (birthdate !== undefined && birthdate !== null && birthdate !== "") {
        let years = new Date() - new Date(birthdate);
        years = Math.floor(years / 1000 / 60 / 60 / 24 / 365)
        if (years >= 18 && years <= 149) {
            flag = true;
        }
    }
    return flag;
}

// Custom file Input

/*
<label for="id-pictures" style="margin-top: 1em;">ID Facial <span class="iconify" data-icon="ic:baseline-info"
        style="color: #c9c9c9;" data-width="16" data-height="16"></span></label>
<div class='file-input' style="padding-bottom: 2em;">
    <input type='file' id="id-pictures" name="id-pictures[]" multiple>
    <label for="ci-pictures" class='button'>Subir</label>
    <span class='label' data-js-label>No file selected</label>
</div>
*/

function customInput(el) {
    const fileInput = el.querySelector('[type="file"]');
    const label = el.querySelector('[data-js-label]');
    label.innerText = "Ningún archivo seleccionado.";
    fileInput.onchange = (e) => {
        if (fileInput.files.length === 0) {
            return;
        }
        label.innerText = fileInput.files.length + " archivos seleccionados.";
    };
}