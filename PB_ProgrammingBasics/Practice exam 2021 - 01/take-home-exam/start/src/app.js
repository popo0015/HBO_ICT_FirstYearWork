// global variables
const vaccinationGradePerProvince = {
  name: "Vaccination grade per province",
  grade: [
    {
      province: "Zeeland",
      vaccinationGrade: 32,
    },
    {
      province: "Noord-Brabant",
      vaccinationGrade: 68,
    },
    {
      province: "Limburg",
      vaccinationGrade: 10,
    },
    {
      province: "Noord-Holland",
      vaccinationGrade: 60,
    },
    {
      province: "Zuid-Holland",
      vaccinationGrade: 80,
    },
  ],
};
let list;
let bulletPoint;
let arr;

window.addEventListener("load", init);

function init() {
  const inputElement = document.getElementsByTagName('input');

  list = document.getElementById('checkedProvinces');
  bulletPoint = document.createElement('li');

  arr = Array.from(inputElement);
  arr.forEach((input) => {
    input.addEventListener("click", checkBoxCheck);
  });
}

/**
 * checks if a ceratin checkbox is checked
 */
function checkBoxCheck() {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].checked == true) {
      for (let j = 0; i < vaccinationGradePerProvince.grade.length; i++) {
        if (vaccinationGradePerProvince.grade[j].province == arr[i].getAttribute("id")) {
          bulletPoint.innerHTML = `${vaccinationGradePerProvince.grade[j].province} - ${vaccinationGradePerProvince.grade[j].vaccinationGrade}%`;
          list.appendChild(bulletPoint);
        }
      }
    }
  }
}

const checkbox = document.querySelector("input[name=checkbox]");

checkbox.addEventListener('change', function() {
  if (this.checked) {
    bulletPoint.innerHTML = `${vaccinationGradePerProvince.grade[j].province} - ${vaccinationGradePerProvince.grade[j].vaccinationGrade}%`;
    list.appendChild(bulletPoint);
  } else {
    console.log("Checkbox is not checked..");
  }
});