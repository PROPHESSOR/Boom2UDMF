/**
 * ByteTools.js: Browser
 * Copyright (c) 2020 PROPHESSOR
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

export default class ByteTools {
    /**
     *
     * @param {DataView} view - DataView (new DataView(ArrayBuffer))
     */
    constructor(view) {
        this.buffer = view;
        this.offset = 0;
    }

    // basics
    get length() {
        return this.buffer.byteLength;
    }

    tell() {
        return this.offset;
    }

    /**
     *
     * @param {number} offset
     * @param {'START'|'CUR'} mode
     */
    seek(offset, mode = 'START') {
        switch (mode) {
            case 'CUR':
                return this.offset += offset;
            case 'START':
            default:
                return this.offset = offset;
        }
    }

    // read

    readString(length = Infinity) {
        let string = '';

        for (let i = 0; i < length; i++) {
            const char = this.readUInt8();

            if (length === Infinity && char === 0) return string;

            string += String.fromCharCode(char);
        }

        return string;
    }

    // int8

    readInt8() {
        const tmp = this.buffer.getInt8(this.offset);

        this.offset += 1;

        return tmp;
    }

    readUInt8() {
        const tmp = this.buffer.getUint8(this.offset);

        this.offset += 1;

        return tmp;
    }


    // int16

    readInt16() {
        const tmp = this.buffer.getInt16(this.offset, true);

        this.offset += 2;

        return tmp;
    }

    readUInt16() {
        const tmp = this.buffer.getUint16(this.offset, true);

        this.offset += 2;

        return tmp;
    }

    // int32

    readInt32() {
        const tmp = this.buffer.getInt32(this.offset, true);

        this.offset += 4;

        return tmp;
    }

    readUInt32() {
        const tmp = this.buffer.getUint32(this.offset, true);

        this.offset += 4;

        return tmp;
    }

    // seek

    // int8

    seekInt8() {
        return this.buffer.getInt8(this.offset);
    }

    seekUInt8() {
        return this.buffer.getUint8(this.offset);
    }


    // int16

    seekInt16() {
        return this.buffer.getInt16(this.offset, true);
    }

    seekUInt16() {
        return this.buffer.getUint16(this.offset, true);
    }

    // int32

    seekInt32() {
        return this.buffer.getInt32(this.offset, true);
    }

    seekUInt32() {
        return this.buffer.getUint32(this.offset, true);
    }

    // skip

    // int8

    skipInt8() {
        return this.offset += 1;
    }


    // int16

    skipInt16() {
        return this.offset += 2;
    }

    // int32

    skipInt32() {
        return this.offset += 4;
    }
}