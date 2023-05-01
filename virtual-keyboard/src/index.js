class VirtualKeyboard {
    constructor() {
        this.keys = [
            ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Bksp'],
            ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', "'", 'Del'],
            ['Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\\', 'Enter'],
            ['Shift', '/', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ",", '.', '/', '\u2191', 'Shift'],
            ['Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '\u2190', '\u2193', '\u2192']
        ];

        this.textarea = document.createElement('textarea');
        this.textarea.classList.add('textarea');
        this.textarea.disabled = true;
    }

    init() {
        const keyboard = document.createElement('div');
        keyboard.classList.add('keyboard');

        for (let row of this.keys) {
            const rowEl = document.createElement('div');
            rowEl.classList.add('keyboard-row');
            for (let key of row) {
                const keyButton = document.createElement('div');
                keyButton.classList.add('key');
                keyButton.textContent = key;

                keyButton.addEventListener('mousedown', (event) => {
                    this.onKeyPress(event.target, key);
                    console.log('mousedoun');
                });

                keyButton.addEventListener('mouseup', (event) => {
                    event.target.classList.remove('active-button');
                });

                window.addEventListener('keydown', (event) => {
                    if (event.code.slice(3) === key) {
                        this.onKeyPress(keyButton, key);
                    }
                });
                document.addEventListener('keyup', () => {
                    keyButton.classList.remove('active-button');
                });

                if (key === ' ') {
                    keyButton.classList.add('space-button');
                }
                rowEl.append(keyButton);
            }
            keyboard.append(rowEl);
        }

        document.body.append(keyboard);
        document.body.append(this.textarea);
    }

    onKeyPress(target, key) {
        console.log(key);
        target.classList.add('active-button');

        switch (key) {
            case 'Bksp':
                this.textarea.value = this.textarea.value.slice(0, -1);
                break;
            case 'Tab':
                this.textarea.value += '    ';
                break;
            case 'Caps Lock':
                break;
            case 'Enter':
                this.textarea.value += '\n';
                break;
            case 'Alt': return;
            case 'Ctrl': return;
            case 'Shift': return;
            case 'Win':
                break;
            case 'Del':
                this.textarea.value = '';
                break;
            default: this.textarea.value += key;
        }
    }
}



const virtualKeyboard = new VirtualKeyboard();

virtualKeyboard.init();






