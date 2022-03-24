/**
 * Copyright (c) 2022 PROPHESSOR
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

export const setImmediate = () => new Promise((res) => setTimeout(res, 0));
