const sliders = document.querySelectorAll("input[type='range']");
sliders.forEach(function(slider){
    slider.addEventListener("input",calculateBonus);
});

const salaryInput = document.getElementById("salary");
salaryInput.addEventListener("change",calculateBonus);


function calculateBonus(){
    let salary = parseFloat(salaryInput.value);
    let bonusPercent = document.getElementById("bonus").value;
    let noOfPeople = document.getElementById("no-of-people").value;

    salaryInput.value = salary.toFixed(2);

    let totalBonus = parseFloat((salary * (bonusPercent/100)).toFixed(2));
    let total = parseFloat((salary + totalBonus).toFixed(2));

    let bonusPerPerson = (totalBonus / noOfPeople).toFixed(2);
    let totalPerPerson = (total / noOfPeople).toFixed(2);

    document.getElementById("bonus-amount").textContent = `\$ ${totalBonus}`;
    document.getElementById("total-amount").textContent = `\$ ${total}`;
    
    document.getElementById("bonus-percent").textContent = `${bonusPercent}%`;
    document.getElementById("split-num").textContent = noOfPeople;

    document.getElementById("bonus-per-person").textContent = `\$ ${bonusPerPerson}`;
    document.getElementById("total-per-person").textContent = `\$ ${totalPerPerson}`;
}
calculateBonus();


