import {convertStringNumber} from './convertString.js';

const financeForm = document.querySelector('.finance__form');
const financeAmount = document.querySelector('.finance__amount');
const financeReportBtn = document.querySelector('.finance__report');
const reportCloseBtn = document.querySelector('.report__close');
const report = document.querySelector('.report');

let amount = 0;
financeAmount.textContent = amount;
financeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const typeOperation = e.submitter.dataset.typeOperation;
    const changeAmount = Math.abs(convertStringNumber(financeForm.amount.value));
    console.log('changeAmount: ', typeof changeAmount);
    if(typeOperation === 'income'){
        amount += changeAmount;
    }
    if(typeOperation === 'expenses'){
        amount -= changeAmount;
    }
    financeAmount.textContent = `${amount.toLocaleString()} ₽`;
    
});

financeReportBtn.addEventListener("click", function () {
    report.classList.add('report__open');
});
reportCloseBtn.addEventListener("click", function () {
    report.classList.remove('report__open');
});