
// - створити функцію яка обчислює та повертає площу прямокутника висотою
function res (a,b){
    return a*b;
}
let re = res (20,10);
console.log(re);
// - створити функцію яка обчислює та повертає площу кола
function res2 (P ,r){
    return P * Math.pow(r,2)
}
let ri = res2(3.14,8);
console.log(ri);

// - створити функцію яка обчислює та повертає площу циліндру
function res3 (P, r, h) {
    return 2*P*r*(r+h)
}
let rp = res3(3.14,6,8)
console.log(rp);


// створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

function fres() {
    let min = arguments[0]
    let max = arguments[0]
  for (let i of arguments){
      if (i>max) max=i
      if (i<min) min = i
  }
  console.log(max)
    return min
}
let gg = fres(1,2,3,4,5,6,7)
console.log(gg)



// створити функцію яка при створює блок з текстом. Текст задати через аргумент



function res4 (header) {
    document.write(`<div>
      <h2>${header}</h2>
     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, rerum?</p>
</div>`)
}
res4('hello')
res4('hi')


// - створити функцію яка при створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function res5(text){
    document.write(`<ul>
     <li>${text}</li>
     <li>${text}</li>
     <li>${text}</li>
    </ul>`)

}
res5('1')

// - створити функцію яка при створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//     Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)


function res6(text1,a){
    document.write(`<ul>`)
    for (let i=0;i<a;i++){
        document.write(` <li>${text1}</li>`)
document.write(`</ul>`)}

}
res6('1',3)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let res8 =[1,4,5,7,true,false,'hi']
let funres7 = res7 =>{
    for (const item of res7){
     document.write(`<ul>
      <li>${item}</li>
</ul>`)
    }
}
funres7(res8);







