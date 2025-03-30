class Dictionary {
    constructor(name) {
        this.name = name;
        this.words = {}
    }

    add(word, description) {
        if (this.words[word]) {
            return;
        }
        this.words[word] = {word, description};
    }

    remove(word) {
        if (this.words[word]) {
            delete this.words[word];
        }
    }

    get(word) {
        return this.words[word];
    }

    showAllWords() {
        Object.keys(this.words).forEach(key => {
            console.log(`${key} - ${this.get(key)?.description}`);
        });
    }
}

const dictionary = new Dictionary('Толковый словарь');
dictionary.add('JavaScript', 'популярный язык программирования');
dictionary.add('Веб-разработчик', 'Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие');

console.log(dictionary.words);
console.log("---------------------------------------------------------------------------------------------------------------------------");
dictionary.remove('JavaScript');

console.log(dictionary.words);
dictionary.showAllWords(); // Веб-разработчик - Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие
