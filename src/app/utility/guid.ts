export class Guid {
    static newGuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(character) {
            const random = Math.random() * 16 | 0;
            const value = character === 'x' ? random : (random & 0x3 | 0x8);
            return value.toString(16);
        });
    }
}
