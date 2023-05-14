var smaller_range_number = +prompt("введите меньшее число диапазона");
var a_larger_number_of_the_range = +prompt("введите большее число диапазона");
var the_amount_of_the_range = 0;
while (smaller_range_number <= a_larger_number_of_the_range) {
    the_amount_of_the_range += smaller_range_number;
    smaller_range_number++;
}
document.write(' ' + the_amount_of_the_range + ' ');
var the_first_divisible_number = +prompt("введите первое число для деления");
var the_second_divisible_number = +prompt("введите второе число для деления");
while (the_first_divisible_number != the_second_divisible_number) {
    if (the_first_divisible_number > the_second_divisible_number) {
        the_first_divisible_number = the_first_divisible_number - the_second_divisible_number;
    }
    else {
        the_second_divisible_number = the_second_divisible_number - the_first_divisible_number;
    }
}
document.write(' ' + the_first_divisible_number + ' ');
var number_to_divide = +prompt("введите число для определения делителей");
for (var i_1 = 1; i_1 <= number_to_divide; i_1++) {
    if (number_to_divide % i_1 == 0) {
        document.write(' ' + i_1 + ' ');
    }
    else {
        continue;
    }
}
var a_set_of_numbers = +prompt("введите число для подсчета цифр");
var number_of_digits = 0;
for (; a_set_of_numbers > 1; number_of_digits++) {
    a_set_of_numbers /= 10;
}
document.write(' ' + number_of_digits + ' ');
var number_of_numbers, theNumberBeingChecked;
var negative = 0;
var positive = 0;
var zero = 0;
var evenNumbers = 0;
var odd = 0;
for (number_of_numbers = 10; number_of_numbers > 0; number_of_numbers--) {
    theNumberBeingChecked = +prompt("введите " + (number_of_numbers) + " чисел: ");
    if (theNumberBeingChecked > 0) {
        positive += 1;
    }
    else if (theNumberBeingChecked < 0) {
        negative += 1;
    }
    else if (theNumberBeingChecked == 0) {
        zero += 1;
    }
    else {
        alert("ERROR");
    }
    if (theNumberBeingChecked % 2 == 0) {
        evenNumbers += 1;
    }
    else if (theNumberBeingChecked % 2 != 0) {
        odd += 1;
    }
    else {
        alert("ERROR");
    }
}
document.write("положительных чисел: " + (positive) + ", отрицательных чисел: " + (negative) + ", нулевых значений: " + (zero) + ", чётных чисел: " + (evenNumbers) + ", нечётных чисел: " + (odd));
do {
    var the_first_number = +prompt("Для проведения математической операции введите первое число");
    var the_second_number = +prompt("Для проведения математической операции введите второе число");
    var mathematical_action = prompt("введите действие: +, -, * или /");
    switch (mathematical_action) {
        case "+":
            alert(the_first_number + the_second_number);
            break;
        case "-":
            alert(the_first_number - the_second_number);
            break;
        case "*":
            alert(the_first_number * the_second_number);
            break;
        case "/":
            alert(the_first_number / the_second_number);
            break;
        default:
            alert("ошибка в данных");
    }
} while (confirm('Хотите ли вы решить еще один пример?'));
var input;
do {
    input = prompt('Введите число');
} while ((input === null || input === void 0 ? void 0 : input.length) < 1);
var shift = +prompt('На сколько разрядов сдвинуть число?');
var newNumber = '';
for (var i_2 = shift; i_2 < input.length; i_2++) {
    newNumber += input[i_2];
}
for (var i_3 = shift - 1; i_3 >= 0; i_3--) {
    newNumber += input[i_3];
}
alert(newNumber);
var day_of_the_week = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
var i = 0;
while (confirm(day_of_the_week[i] + ".\u0425\u043E\u0442\u0438\u0442\u0435 \u0443\u0432\u0438\u0434\u0435\u0442\u044C \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0434\u0435\u043D\u044C?")) {
    i++;
    if (i > 6) {
        i = 0;
    }
}
//Вариант 1
var plenty1 = 0;
var multiplier11 = 2;
var multiplier21 = 1;
for (multiplier11 = 2; multiplier11 <= 9; multiplier11++) {
    for (multiplier21 = 1; multiplier21 <= 10; multiplier21++) {
        plenty1 = multiplier11 * multiplier21;
        document.write(' ' + plenty1 + ' ');
    }
}
//Вариант 2
var plenty = 0;
var multiplier1 = 2;
var multiplier2 = 1;
for (multiplier2 = 1; multiplier2 <= 10; multiplier2++) {
    plenty = multiplier1 * multiplier2;
    document.write(' ' + plenty + ' ');
    if (multiplier2 == 10) {
        multiplier2 = 0;
        multiplier1 += 1;
    }
    if (multiplier1 == 9) {
        break;
    }
}
var minimumRange = 0;
var maximumRange = 100;
var N;
var midleNumber;
var userSign;
N = +prompt('Введите число которое я буду отгадывать');
do {
    midleNumber = Math.trunc((maximumRange + minimumRange) / 2);
    userSign = prompt("\u041C\u043E\u0451 \u0447\u0438\u0441\u043B\u043E " + midleNumber + ". \u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u0431\u0435\u0437 \u043A\u0430\u0432\u044B\u0447\u0435\u043A. \u0412\u0430\u0448\u0435 \u0447\u0438\u0441\u043B\u043E \u0431\u043E\u043B\u044C\u0448\u0435 \">\", \u043C\u0435\u043D\u044C\u0448\u0435 \"<\" \u0438\u043B\u0438 \u0440\u0430\u0432\u043D\u043E\"=\" \u043C\u043E\u0435\u043C\u0443.");
    if (userSign == ">") {
        minimumRange = midleNumber;
    }
    else if (userSign == "<") {
        maximumRange = midleNumber;
    }
    else {
        alert("\u0412\u0430\u0448\u0435 \u0447\u0438\u0441\u043B\u043E " + midleNumber);
        break;
    }
} while (midleNumber != N);
