/**
 * Copyright (c) 2022 PROPHESSOR
 * 
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import ByteTools from './ByteTools';

/**
 * @param {HTMLInputElement} input
 * @returns {DataView | null}
 */
export const readFileFromInput = (input) => new Promise(res => {
    const { files } = input;

    if (!files.length) return res(null);

    const reader = new FileReader();

    reader.onload = (ev) => {
        return res(new DataView(ev.target.result));
    };

    reader.readAsArrayBuffer(files[0]);
});

/**
 * 
 * @param {HTMLInputElement} input
 * @returns {ByteTools}
 */
export async function readByteToolsBufferFromInput(input) {
    const dataView = await readFileFromInput(input);

    return new ByteTools(dataView);
}