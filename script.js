// SCRIPT HAHA


function countDaysToEvent() {
    const today = new Date();
    // wstawić tu poprawną date
    const eventDay = new Date(2025, 4, 29);
    const diff = Math.ceil((eventDay - today) / (1000 * 60 * 60 * 24));

    console.log(`There is ${diff} days left`);
}

document.addEventListener("DOMContentLoaded", () => {
    // można przypisać wartość tego do jakiegoś elementu
    countDaysToEvent();
});
