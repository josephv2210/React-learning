export class ShareValueChildren {
    private value: string;

    constructor(value: string) {
        this.value = value;
    }

    getValue() {
        return this.value;
    }

    setValue(value: string) {
        if (typeof value === 'string' && value.length < 1) {
            throw new Error('Value must be a string and has to have at least a character');
        }
        this.value = value;
    }
}

export const shareValueChildren = new ShareValueChildren("");