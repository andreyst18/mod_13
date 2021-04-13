/*
window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('birthYearOutput').innerText = initPerson.birthDay;
    document.getElementById('patronymicOutput').innerText = initPerson.patronymic;
    document.getElementById('professionOutput').innerText = initPerson.profession;

};*/

document.getElementById('generate_button').addEventListener('click', () => {
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('genderOutput').innerText = initPerson.gender + ',';
    document.getElementById('birthYearOutput').innerText = initPerson.birthDay + ',';
    document.getElementById('patronymicOutput').innerText = initPerson.patronymic;
    document.getElementById('professionOutput').innerText = initPerson.profession;

});

document.getElementById('clear_button').addEventListener('click', () => {
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = '';
    document.getElementById('surnameOutput').innerText = '';
    document.getElementById('genderOutput').innerText = '';
    document.getElementById('birthYearOutput').innerText = '';
    document.getElementById('patronymicOutput').innerText = '';
    document.getElementById('professionOutput').innerText = '';

});

