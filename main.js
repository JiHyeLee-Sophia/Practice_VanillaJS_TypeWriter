class typeWriter {
    constructor(textShow, textItems, timer) {
        this.textShow = textShow;
        this.textItems = textItems;
        this.timer = timer;
        this.word = '';
        this.wordIndex = 0;
        this.letter = '';
        this.isDeleting = false;
    }
    type() {
        //index for word from textItems
        const current = this.wordIndex % this.textItems.length;
        //word from textItems using current as index
        this.word = this.textItems[current];
        if (!this.isDeleting) {
            this.letter = this.word.substring(0, this.letter.length + 1);
            this.textShow.innerHTML = `<span>${this.letter}</span>`;
            this.timer=400;
            if(this.letter===this.word){
                this.timer=1000;
                this.isDeleting=true;
            }
        } else{
            //deleting
            this.letter = this.word.substring(0, this.letter.length - 1);
            this.textShow.innerHTML = `<span>${this.letter}</span>`;
            this.timer=150;
            if(this.letter===''){
                this.isDeleting=false;
                this.wordIndex++;
            }
        }
        setTimeout(()=>this.type(),this.timer);
    }
}

function init() {
    const textShow = document.querySelector('.textShow'),
        textItems = JSON.parse(textShow.getAttribute('text-items')),
        timer = parseInt(textShow.getAttribute('timer'));
    const newType = new typeWriter(textShow, textItems, timer);
    setTimeout(() => newType.type(), 1000);
}
document.addEventListener('DOMContentLoaded', init);
