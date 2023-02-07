function rotatio(rot) {
    // функция принимает элемент .rotator и переключает активность .rotator__case
    let rotChildList = Array.from(rot.children),                         // список всех дочерних элементов в роторе
        activeCurrent = document.querySelector(".rotator__case_active"), // поиск активного элемента
        indCurrent = rotChildList.indexOf(activeCurrent),                // индекс текущего актиивного элемента
        lastElem = rot.lastElementChild,                                 // последний элемент в роторе
        lastInd = rotChildList.indexOf(lastElem)                         // индекс последнего элемента
    activeCurrent.classList.remove("rotator__case_active")               // инактивируем текущий
    if (indCurrent != lastInd) {                 // если текущий активный не равен последнему элементу в роторе
        activeCurrent.nextElementSibling.classList.add("rotator__case_active") // активируем следующий
    } else {
        rot.firstElementChild.classList.add("rotator__case_active") // активируем первый элемент ротатора
    }
}


setInterval(() => {
    let rotatorList = document.querySelectorAll(".rotator")               // список всех ротаторов
    for (let rotator of rotatorList) {
        rotatio(rotator)            // передаем каждый найденный ротатор в переключатель
    }
}, 1000)