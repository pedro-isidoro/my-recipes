function arrowClicked(){
    const idAside = document.getElementById('recipes-links');
    idAside.classList.toggle('recipes-links-active');
    
    const arrow = document.getElementById('arrow');
    arrow.classList.toggle('arrow-active');

    const idList1 = document.getElementById('list-1');
    idList1.classList.toggle('list-active');
    
    const idList2 = document.getElementById('list-2');
    idList2.classList.toggle('list-active')
    
    const idList3 = document.getElementById('list-3');
    idList3.classList.toggle('list-active')
    
    const idList4 = document.getElementById('list-4');
    idList4.classList.toggle('list-active')

    const idList5 = document.getElementById('list-5');
    idList5.classList.toggle('list-active')

    const idList6 = document.getElementById('list-6');
    idList6.classList.toggle('list-active')
}

export {arrowClicked}