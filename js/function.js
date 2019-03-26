function Slider(idElement, widthNext, delay) {
    setInterval(function () {
        let container = document.getElementById(idElement);
        let interval = setInterval(function () {
            let locationBefore = container.style.left;
            let locationCurrent = locationBefore.substring(0, locationBefore.length - 2);
            container.style.left = (locationCurrent - 18) + "px";
            if (container.style.left === -widthNext + "px") {
                clearInterval(interval);
                container.appendChild(container.firstElementChild);
                container.style.left = "0px";
            }
        }, 10);
    }, delay);
}

function NextProduct(idContainer, widthNext) {
    let container = document.getElementById(idContainer);
    let interval = setInterval(function () {
        let locationBefore = container.style.left;
        let locationCurrent = Number(locationBefore.substring(0, locationBefore.length - 2));
        container.style.left = (locationCurrent - 10) + "px";
        if (locationCurrent - 10 < -widthNext) {
            clearInterval(interval);
            container.style.left = "0px";
            container.appendChild(container.firstElementChild);
        }
    }, 10);
}

function PreviousProduct(idContainer, widthPrevious) {
    let container = document.getElementById(idContainer);
    container.insertBefore(container.lastElementChild, container.childNodes[0]);
    container.style.left = -widthPrevious + "px";
    let interval = setInterval(function () {
        let locationBefore = container.style.left;
        let locationCurrent = Number(locationBefore.substring(0, locationBefore.length - 2));
        if (locationCurrent + 10 > 0) {
            clearInterval(interval);
            container.style.left = "0px";
        } else {
            locationCurrent += 10;
            container.style.left = (locationCurrent) + "px";
        }
    }, 10);
}

function LatestDeals(timeRemaining) {
    let hourTen = Number(timeRemaining.substring(0, 1));
    let hourUnit = Number(timeRemaining.substring(1, 2));
    let minuteTen = Number(timeRemaining.substring(3, 4));
    let minuteUnit = Number(timeRemaining.substring(4, 5));
    let secondTen = Number(timeRemaining.substring(6, 7));
    let secondUnit = Number(timeRemaining.substring(7, 8));
    setInterval(function () {
        if (secondUnit <= 0) {
            secondUnit = 9;
            document.getElementById("seconds-units").innerText = secondUnit + "";
            secondTen -= 1;
            if (secondTen < 0) {
                secondTen = 5;
                document.getElementById("second-tens").innerText = secondTen + "";
                minuteUnit -= 1;
                if (minuteUnit < 0) {
                    minuteUnit = 9;
                    document.getElementById("minute-units").innerText = minuteUnit + "";
                    minuteTen -= 1;
                    if (minuteTen < 0) {
                        minuteTen = 5;
                        document.getElementById("minute-tens").innerText = minuteTen + "";
                        hourUnit -= 1;
                        if (hourUnit < 0) {
                            hourUnit = 4;
                            document.getElementById("hour-units").innerText = hourUnit + "";
                            hourTen -= 1;
                            if (hourTen < 0) {
                                hourTen = 2;
                                document.getElementById("hour-tens").innerText = hourTen + "";
                            } else {
                                document.getElementById("hour-tens").innerText = hourTen + "";
                            }
                        } else {
                            document.getElementById("hour-units").innerText = hourUnit + "";
                        }
                    } else {
                        document.getElementById("minute-tens").innerText = minuteTen + "";
                    }
                } else {
                    document.getElementById("minute-units").innerText = minuteUnit + "";
                }
            } else {
                document.getElementById("second-tens").innerText = secondTen + "";
            }

        } else {
            secondUnit -= 1;

            document.getElementById("seconds-units").innerText = secondUnit + "";
        }

    }, 1000);
}

function ShowMenu(idMenuConst, widthShow) {
    let menuConst = document.getElementById(idMenuConst);
    if (menuConst.style.height === "" || menuConst.style.height === "0px") {
        menuConst.style.height = widthShow + "px";
    } else {
        menuConst.style.height = "0px";
    }
}

function ChangeSizeMenu(idCategory, idConvoluted, widthStart, widthEnd) {
    let category = document.getElementById(idCategory);
    if (category.style.height === "400px" || category.style.height === "") {
        category.style.height = widthEnd + "px";
        document.getElementById(idConvoluted).innerHTML = "Close";
    } else {
        category.style.height = widthStart + "px";
        document.getElementById(idConvoluted).innerHTML = "All Categories";
    }
}

function ShowAllCategoryPage(idCategory, idConvoluted) {
    let category = document.getElementById(idCategory);
    if (category.style.height === "0px" || category.style.height === "") {
        category.style.height = "390px";
    } else {
        category.style.height = "0px";
        document.getElementById(idConvoluted).innerHTML = "All Categories";
    }
}

function ShowTreeView(idTreeView) {
    let treeView = document.getElementById(idTreeView);
    if (treeView.style.height === "0px" || treeView.style.height === "0") {
        treeView.style.height = "160px";
    } else {
        treeView.style.height = "0px"
    }
}

function CheckBox(idCheckBox, nameClass) {
    let element = document.getElementById(idCheckBox);
    if (element.getAttribute("class").length > 10) {/*sau này dùng RegualarException*/
        element.classList.remove(nameClass);
    } else {
        element.classList.add(nameClass);
    }

}

function SliderAbstract(firstCode, numberImage) {
    let i = Number(1);
    setInterval(function () {
        if (i <= numberImage) {
            let element = document.getElementById(firstCode + i);
            element.style.opacity = (element.style.opacity === "" || element.style.opacity === "0") ? "1" : "0";
        } else {
            document.getElementById(firstCode + "1").style.opacity = "1";
            i = 1;
        }
        for (let j = 1; j <= numberImage; j++) {
            if (j !== i) {
                document.getElementById(firstCode + j).style.opacity = "0";
            }
        }
        i++;
    }, 6000)
}

function NextPage(firstCode, numberPage, nameClass) {
    for (let i = 1; i < numberPage; i++) {
        if (document.getElementById(firstCode + i).getAttribute("class").length > 12) { /*sau này dùng RegualarException*/
            document.getElementById(firstCode + i).classList.remove(nameClass);
            document.getElementById(firstCode + (i + 1)).classList.add(nameClass);
            i = 1000;
        }
    }
}

function PreviousPage(firstCode, numberPage, nameClass) {
    for (let i = 2; i <= numberPage; i++) {
        if (document.getElementById(firstCode + i).getAttribute("class").length > 12) {/*sau này dùng RegualarException*/
            document.getElementById(firstCode + i).classList.remove(nameClass);
            document.getElementById(firstCode + (i - 1)).classList.add(nameClass);
            i = 1000;
        }
    }
}

function ActivePage(firstCode, numberPage, nameClass, numberPageActive) {
    document.getElementById(firstCode + numberPageActive).classList.add(nameClass);
    for (let i = 1; i <= numberPage; i++) {
        if (i !== numberPageActive) {
            document.getElementById(firstCode + i).classList.remove(nameClass);
        }
    }
}

function QtyIncrease(idElement) {
    document.getElementById(idElement).value = Number(document.getElementById(idElement).value) + 1;
}

function QtyReduction(idElement) {
    if (Number(document.getElementById(idElement).value) > 1)
        document.getElementById(idElement).value = Number(document.getElementById(idElement).value) - 1;
}

function ShowTab(firstCodeTab, firstCodeComment, numberTab, totalTab, className) {
    document.getElementById(firstCodeComment + numberTab).style.display = "block";
    document.getElementById(firstCodeTab + numberTab).classList.add(className);
    for (let i = 1; i <= totalTab; i++) {
        if (i !== numberTab) {
            document.getElementById(firstCodeComment + i).style.display = "none";
            document.getElementById(firstCodeTab + i).classList.remove(className);
        }

    }
}


