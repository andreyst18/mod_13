const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    firstNameFemaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Алина",
            "id_2": "Ольга",
            "id_3": "Наталья",
            "id_4": "Нина",
            "id_5": "Кристина",
            "id_6": "Анастасия",
            "id_7": "Екатерина",
            "id_8": "Мария",
            "id_9": "Виктория",
            "id_10": "Надежда"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function() {
        if (this.person.gender == 'Мужчина') {
            return this.randomValue(this.firstNameMaleJson);
        } else {
            return this.randomValue(this.firstNameFemaleJson);
        }
    },


     randomSurname: function() {

        return this.randomValue(this.surnameJson);

    },

    //Определение пола
    randomGender: function() {
        return this.randomIntNumber() == 0 ? this.GENDER_MALE : this.GENDER_FEMALE;
    },


    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surname = this.person.gender == 'Женщина' ? this.randomSurname() + 'а' : this.randomSurname();
        this.person.birthYear = this.randomIntNumber(2003, 1921) + ' года рождения'; //c 2003 г. - совершеннолетние
        this.person.patronymic = patronymicGenerator.randomPatronymic();
        this.person.profession = professionGenerator.randomProfession();
        
        return this.person;
    }
};

//Генерация отчетства
const patronymicGenerator = {
    malePatronymic: `{
        "count": 10,
        "list": {
            "id_1": "Александрович",
            "id_2": "Максимович",
            "id_3": "Иванович",
            "id_4": "Артемович",
            "id_5": "Дмитриевич",
            "id_6": "Никитич",
            "id_7": "Михаилович",
            "id_8": "Даниилович",
            "id_9": "Егорович",
            "id_10": "Андреевич"
        }
    }`,
    femalePatronymic: `{
        "count": 10,
        "list": {
            "id_1": "Александровна",
            "id_2": "Максимовна",
            "id_3": "Ивановна",
            "id_4": "Артемовна",
            "id_5": "Дмитриевна",
            "id_6": "Никитична",
            "id_7": "Михайловна",
            "id_8": "Данииловна",
            "id_9": "Егоровна",
            "id_10": "Андреевна"
        }
    }`,

    randomPatronymic: function() {

        return personGenerator.person.gender == 'Женщина' ? personGenerator.randomValue(this.femalePatronymic) : personGenerator.randomValue(this.malePatronymic);

    },
}

//Генерация професии
const professionGenerator = {
    maleProfession: `{
        "count": 5,
        "list": {
            "id_1": "Шахтер",
            "id_2": "Крановщик",
            "id_3": "Пограничник",
            "id_4": "Автослесарь",
            "id_5": "Хирург"
        }
    }`,
    unisexProfession: `{
        "count": 5,
        "list": {
            "id_1": "Программист",
            "id_2": "Бухгалтер",
            "id_3": "Менеджер",
            "id_4": "Врач",
            "id_5": "Учитель"
        }
    }`,

    randomProfession: function() {

        if (personGenerator.person.gender == 'Женщина') {
            return personGenerator.randomValue(this.unisexProfession);
        } else {
            let sortProfession = personGenerator.randomIntNumber();
            return sortProfession == 0 ? personGenerator.randomValue(this.unisexProfession) : personGenerator.randomValue(this.maleProfession);
        }
   
    }
}
