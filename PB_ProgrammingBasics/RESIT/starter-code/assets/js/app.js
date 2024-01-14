/**
 * This is the entire roller coaster log. It calls `fetchData()`
 * to mimic the fetching of remote data.
 * 
 * If you want to play around with the size of the array, see the `log.js` file 
 */
const log = fetchData();
const availableFilters = availableTags;

// Call the `onLoad` function on the load event (when the DOM is ready). 
window.addEventListener('load', function () {
  let label;
  let itemsShownSpanElement;
  let newTag;
  let tagsCell;
  let filterList;
  let filterArray;
  let idCell;
  let createdAtCell;
  let descriptionCell;
  let tableBody;

  loadFilters();
  loadRows();
  filtering();
});

/**
 * loads the rows using the given database
 */
function loadRows() {
  tableBody = document.getElementById("log");

  for (let i = 0; i < log.entries.length; i++) {
    const newRow = document.createElement("tr");
    idCell = document.createElement("td");
    createdAtCell = document.createElement("td");
    tagsCell = document.createElement("td");
    descriptionCell = document.createElement("td");

    addRowInfo(i);

    newRow.appendChild(idCell);
    newRow.appendChild(createdAtCell);
    newRow.appendChild(tagsCell);
    newRow.appendChild(descriptionCell);
    tableBody.appendChild(newRow);
  }
}

/**
 * loads all filters at the top
 */
function loadFilters() {
  filterArray = [];
  const itemsShown = document.getElementById("item-count");
  itemsShown.innerHTML = log.entries.length;

  filterList = document.getElementById("filter-list");

  for (let i = 0; i < availableFilters.length; i++) {
    label = document.createElement("label");
    label.classList = "checkbox mx-2";
    itemsShownSpanElement = document.createElement("input");
    itemsShownSpanElement.name = availableFilters[i].name;
    itemsShownSpanElement.type = "checkbox";
    itemsShownSpanElement.checked = true;

    // Fix: Remove parentheses from filtering
    itemsShownSpanElement.addEventListener("click", filtering);

    newTag = document.createElement("span");
    newTag.classList = `tag mx-1 ${availableFilters[i].color}`;
    newTag.innerText = availableFilters[i].name;

    label.appendChild(itemsShownSpanElement);
    label.appendChild(newTag);
    filterArray.push(newTag);
    filterList.appendChild(label);
  }
}

/**
 * creates the tags for each row
 * @param {*} tag current tag
 * @returns 
 */
function loadRowsTags(tag) {
  for (let num = 0; num < filterArray.length; num++) {
    if (tag === filterArray[num].innerText) {
      const label = document.createElement("label");
      label.classList = "checkbox mx-2";
      const newTag = document.createElement("span");
      newTag.classList = `tag mx-1 ${availableFilters[num].color}`;
      newTag.innerText = availableFilters[num].name;
      
      label.appendChild(newTag);
      return label;
    }
  }
  const label = document.createElement("label");
  label.classList = "checkbox mx-2";
  const newTag = document.createElement("span");
  newTag.classList = "tag mx-1";
  newTag.innerText = "";
  label.appendChild(newTag);
  return label;
}

/**
 * adds all the information to the currently created row
 * @param {*} i the given row
 */
function addRowInfo(i) {
  idCell.innerHTML = log.entries[i].id;
  createdAtCell.innerHTML = log.entries[i].created_at;
  for (let j = 0; j < log.entries[i].tags.length; j++) {
    const addNewTagToCell = loadRowsTags(log.entries[i].tags[j]);
    tagsCell.appendChild(addNewTagToCell);
  }
  descriptionCell.innerHTML = log.entries[i].description;
}

/**
 * hides or shows the row if a tag's filter is checked
 * it doesn't work however
 */
function filtering() {
  const bodyCheckboxes = Array.from(document.querySelectorAll("tbody#log > tr"));

  bodyCheckboxes.forEach(function (row) {
    const rowTags = Array.from(row.querySelectorAll("td > label > span"));
    const isVisible = rowTags.every(tag => tag.querySelector("input").checked);

    row.style.display = isVisible ? 'table-row' : 'none';
  });
}