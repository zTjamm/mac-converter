const macIn = document.querySelector('.border__macin');
const macDlink = document.querySelector('.dlink');
const macBilling = document.querySelector('.billing');
const macCdata = document.querySelector('.cdata');
const macHp = document.querySelector('.hp');
macIn.addEventListener("blur", (e) => {
    lm = e.target.value.toLowerCase().replace(/[:.-]/g, "");
    console.log(lm)
    macDlink.textContent = lm[0] + lm[1] + "-" + lm[2] + lm[3] + "-" + lm[4] + lm[5] + "-" + lm[6] + lm[7] + "-" + lm[8] + lm[9] + "-" + lm[10] + lm[11];
    macBilling.textContent = lm[0] + lm[1] + ":" + lm[2] + lm[3] + ":" + lm[4] + lm[5] + ":" + lm[6] + lm[7] + ":" + lm[8] + lm[9] + ":" + lm[10] + lm[11];
    macCdata.textContent = lm[0] + lm[1] + lm[2] + lm[3] + "." + lm[4] + lm[5] + lm[6] + lm[7] + "." + lm[8] + lm[9] + lm[10] + lm[11];
    macHp.textContent = lm[0] + lm[1] + lm[2] + lm[3] + "-" + lm[4] + lm[5] + lm[6] + lm[7] + "-" + lm[8] + lm[9] + lm[10] + lm[11];
})

// const macTest = 'ab:Cd-47.f5:Ac-B3';
// console.log(macTest.toLowerCase().replace(/[:.-]/g, ""));



