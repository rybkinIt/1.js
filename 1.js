var Number = prompt('Введите  число', '')
if (Number === null) {
    alert('Вы отказались от ввода')
} else if (isNaN(Number % 2)) {
    alert('Упс, кажется, вы ошиблись')
} else if (Number % 2 === 0) {
    alert('Число четное')
} else {
    alert('Число нечетное')
}