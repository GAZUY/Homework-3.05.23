/*
let smaller_range_number = +(prompt("введите меньшее число диапазона")as string)
let a_larger_number_of_the_range = +(prompt("введите большее число диапазона")as string)
let the_amount_of_the_range = 0; 
while(smaller_range_number <= a_larger_number_of_the_range) {
  the_amount_of_the_range += smaller_range_number;
 smaller_range_number ++; 
}
 document.write(' ' +the_amount_of_the_range+ ' ' );



let the_first_divisible_number = +(prompt("введите первое число для деления")as string)
let the_second_divisible_number = +(prompt("введите второе число для деления")as string)
while (the_first_divisible_number != the_second_divisible_number){
    if (the_first_divisible_number > the_second_divisible_number){
        the_first_divisible_number = the_first_divisible_number - the_second_divisible_number 
    }
    else{
        the_second_divisible_number = the_second_divisible_number - the_first_divisible_number 
    }
} 
document.write (' '+the_first_divisible_number+ ' ')


let number_to_divide = +(prompt ("введите число для определения делителей")as string)
for (let  i = 1 ; i <= number_to_divide ; i ++) {
  if (number_to_divide % i == 0) {
    document.write (' '+i+ ' ') 
  }
  else {
    continue;
  }
}




let a_set_of_numbers = +(prompt ("введите число для подсчета цифр")as string)
let number_of_digits = 0
   for(; a_set_of_numbers > 1; number_of_digits ++) {
    a_set_of_numbers /= 10
   }
   document.write (' '+number_of_digits+ ' ')




let number_of_numbers, theNumberBeingChecked;
let negative = 0;
let positive = 0;
let zero = 0;
let evenNumbers = 0;
let odd = 0;

for (number_of_numbers = 10; number_of_numbers > 0; number_of_numbers -- ) {
  theNumberBeingChecked = +(prompt("введите " + (number_of_numbers) + " чисел: ", )as string)

  if ( theNumberBeingChecked > 0 ) {
    positive += 1; 
  }else if ( theNumberBeingChecked < 0) {
    negative += 1
  }else if (theNumberBeingChecked == 0){
    zero +=1
  }else {
    alert ("ERROR")
  }
  if (theNumberBeingChecked % 2 == 0){
    evenNumbers +=1
  } else if (theNumberBeingChecked % 2 != 0){
    odd +=1
  }else {
    alert ("ERROR")
  }
}
document.write ("положительных чисел: " +(positive)+ ", отрицательных чисел: " +(negative)+ ", нулевых значений: " +(zero)+ ", чётных чисел: " +(evenNumbers)+ ", нечётных чисел: " +(odd));


do {
  let the_first_number = +(prompt("Для проведения математической операции введите первое число")as string)
  let the_second_number = +(prompt("Для проведения математической операции введите второе число")as string)
  let mathematical_action = prompt("введите действие: +, -, * или /");
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
*/


