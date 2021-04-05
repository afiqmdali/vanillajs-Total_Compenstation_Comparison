const selectElement = document.querySelectorAll('input[type="number"]');
const resultCurrent = document.querySelector("#totalCurrent");
const resultOffer = document.querySelector("#totalOffer");
let totalCurrent = parseInt(0);
let totalOffer = parseInt(0);
let basicPayCurrent = parseInt(0);
let allowanceCurrent = parseInt(0);
let ptoCurrent = parseInt(0);
let bonusesCurrent = parseInt(0);
let basicPayOffer = parseInt(0);
let allowanceOffer = parseInt(0);
let ptoOffer = parseInt(0);
let bonusesOffer = parseInt(0);

for (var i = 0; i < selectElement.length; i++) {
  selectElement[i].addEventListener("change", (event) => {
    calculate(event.target.id, parseInt(event.target.value));
    showTotal(event.target.id);
  });
}

const calculate = (id, value) => {
  if (id.includes("Current")) {
    console.log("current");
    switch (id) {
      case "basicPayCurrent":
        if (value) {
          basicPayCurrent = parseInt(value) * 12;
        } else {
          basicPayCurrent = parseInt(0);
        }
        break;
      case "allowanceCurrent":
        if (value) {
          allowanceCurrent = parseInt(value) * 12;
        } else {
          allowanceCurrent = parseInt(0);
        }
        break;
      case "employerEPFCurrent":
        if (basicPayCurrent) {
          if (value) {
            employerEPFCurrent = (basicPayCurrent * parseInt(value)) / 100;
          } else {
            employerEPFCurrent = parseInt(0);
          }
        } else {
          alert("Please enter Current Basic Pay first");
          document.getElementById(id).value = "";
        }
        break;
      case "ptoCurrent":
        if (basicPayCurrent) {
          if (value) {
            let ptoPerDay = basicPayCurrent / 250;
            ptoCurrent = ptoPerDay * parseInt(value);
          } else {
            ptoCurrent = parseInt(0);
          }
        } else {
          alert("Please enter Current Basic Pay first");
          document.getElementById(id).value = "";
        }
        break;
      case "bonusesCurrent":
        if (value) {
          bonusesCurrent = parseInt(value);
        } else {
          bonusesCurrent = parseInt(0);
        }
        break;
    }
  } else {
    console.log("offer");
    switch (id) {
      case "basicPayOffer":
        if (value) {
          basicPayOffer = parseInt(value) * 12;
        } else {
          basicPayOffer = parseInt(0);
        }
        break;
      case "allowanceOffer":
        if (value) {
          allowanceOffer = parseInt(value) * 12;
        } else {
          allowanceOffer = parseInt(0);
        }
        break;
      case "employerEPFOffer":
        if (employerEPFOffer) {
          if (value) {
            employerEPFOffer = (basicPayOffer * parseInt(value)) / 100;
          } else {
            employerEPFOffer = parseInt(0);
          }
        } else {
          alert("Please enter Current Basic Pay first");
          document.getElementById(id).value = "";
        }
        break;
      case "ptoOffer":
        if (basicPayOffer) {
          if (value) {
            let ptoPerDay = basicPayOffer / 250;
            ptoOffer = ptoPerDay * parseInt(value);
          } else {
            ptoOffer = parseInt(0);
          }
        } else {
          alert("Please enter Offer Basic Pay first");
          document.getElementById(id).value = "";
        }
        break;
      case "bonusesOffer":
        if (value) {
          bonusesOffer = parseInt(value);
        } else {
          bonusesOffer = parseInt(0);
        }
        break;
    }
  }
};

const showTotal = (id) => {
  console.log(id);
  if (id.includes("Current")) {
    console.log("Current Total");
    totalCurrent =
      basicPayCurrent +
      allowanceCurrent +
      employerEPFCurrent +
      ptoCurrent +
      bonusesCurrent;
    resultCurrent.textContent = `Total : RM ${parseInt(totalCurrent)}`;
  } else {
    console.log("offer total");
    totalOffer =
      basicPayOffer +
      allowanceOffer +
      employerEPFOffer +
      ptoOffer +
      bonusesOffer;
    console.log(totalOffer);
    resultOffer.textContent = `Total : RM ${parseInt(totalOffer)}`;
  }
};
