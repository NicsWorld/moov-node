/**
 * The Avatars API.
 * @tag Avatars
 */
export class Avatars {
    constructor(moov: any);
    /**
     * @type {Moov}
     * @private
     */
    private moov;
    /**
     * Gets a binary string representing an avatar.
     *
     * @param {string} uniqueId - Any unique ID associated with an account such as AccountID, RepresentativeID, Routing Number, or User ID
     * @returns {Promise<string<binary>>} - Binary representation of the avatar.
     * @tag Avatars
     *
     * @example
     * const moov = new Moov(...);
     * try {
     *   const avatar = await moov.avatars.get("...");
     * } catch (err) {
     *   // ...
     * }
     */
    get(uniqueId: string): Promise<string>;
}
//# sourceMappingURL=avatars.d.ts.map