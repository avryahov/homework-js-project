// 1. console.log
console.log('--- console.log ---');
console.log(String(console.log)); // Выведет метаданные функции
console.log(Number(console.log)); // NaN - это явно не число
console.log(Boolean(console.log)); // true - труфи-тип

// 2. { name: 'Maxim' }
console.log('--- { name: "Maxim" } ---');
const obj = { name: 'Maxim' };
console.log(String(obj)); // чую, если явно не указано преобразование toString, то чисто значение класса укажет
console.log(Number(obj)); // NaN - это явно не число
console.log(Boolean(obj)); // true - труфи-тип

// 3. Symbol('key')
console.log('--- Symbol("key") ---');
const sym = Symbol('key');
console.log(String(sym)); // просто текст без значения
// такой же try-catch как в джава, но с оговорочками
try {
    console.log(Number(sym)); // Это не число. Во втором задании уже проходили
} catch (e) {
    console.log('Error:', e.message);
}
console.log(Boolean(sym)); // true - труфи-тип

// 4. Number (функция-конструктор)
console.log('--- Number (функция) ---');
console.log(String(Number)); // "function Number() { [native code] }"
console.log(Number(Number)); // NaN
console.log(Boolean(Number)); // true - труфи-тип

// 5. Пустая строка
console.log('--- \'\' (пустая строка) ---');
console.log(String('')); // "" - не требует объяснений
console.log(Number('')); // 0 - в JS это ноль. Проверю в Java
console.log(Boolean('')); // false - фулси-фулфи тип

// 6. 0 (число)
console.log('--- 0 ---');
console.log(String(0)); // "0" - не требует объяснений
console.log(Number(0)); // 0 - не требует объяснений
console.log(Boolean(0)); // false - однозначно

// 7. -10 (число)
console.log('--- -10 ---');
console.log(String(-10)); // "-10" - не требует объяснений
console.log(Number(-10)); // -10 - не требует объяснений
console.log(Boolean(-10)); // true - труфи-тип

// 8. '-105' (строка)
console.log('--- "-105" ---');
const strNum = "-105";
console.log(String(strNum)); // "-105" - не требует объяснений
console.log(Number(strNum)); // -105 - не требует объяснений
console.log(Boolean(strNum)); // true - труфи-тип