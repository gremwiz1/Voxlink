const bannedWords = ['123', '321']; // Массив запрещённых слов

function validateText(inputText) {
    let text = inputText; // Получаем входной текст
    const uniqueDelimiter = 'SOME_UNIQUE_DELIMITER'; // Уникальный разделитель

    // Перебираем каждое запрещённое слово
    bannedWords.forEach(bannedWord => {
        const regExp = new RegExp(bannedWord, "g"); // Создаем RegExp для запрещённого слова
        // Строка замены, в которой запрещённое слово обёрнуто в компонент и разделители
        const replacement = `${uniqueDelimiter}<BannedWordComponent>${bannedWord}</BannedWordComponent>${uniqueDelimiter}`;
        text = text.replace(regExp, replacement); // Заменяем все вхождения запрещённого слова на строку замены
    });

    // Удаляем разделитель с начала и конца строки, если он там есть
    text = text.startsWith(uniqueDelimiter) ? text.slice(uniqueDelimiter.length) : text;
    text = text.endsWith(uniqueDelimiter) ? text.slice(0, -uniqueDelimiter.length) : text;
    // Удаляем дублирующиеся разделители
    text = text.replace(new RegExp(`${uniqueDelimiter}${uniqueDelimiter}`, "g"), uniqueDelimiter);

    return text.split(uniqueDelimiter); // Делим текст на части и возвращаем полученный массив
}

module.exports = {
    validateText,
};