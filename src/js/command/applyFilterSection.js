/**
 * @author NHN Ent. FE Development Team <dl_javascript@nhn.com>
 * @fileoverview change a shape
 */
// import snippet from 'tui-code-snippet';
import {Promise} from '../util';
import commandFactory from '../factory/command';
import {componentNames, rejectMessages, commandNames} from '../consts';

const {FILTER_SECTION} = componentNames;

/**
 * Chched data for undo
 * @type {Object}
 */
// let chchedUndoDataForSilent = null;

/**
 * Make undoData
 * @param {object} options - shape options
 * @param {Component} targetObj - shape component
 * @returns {object} - undo data
 */
// function makeUndoData(options, targetObj) {
//     const undoData = {
//         object: targetObj,
//         options: {}
//     };
// 
//     snippet.forEachOwnProperties(options, (value, key) => {
//         undoData.options[key] = targetObj[key];
//     });
// 
//     return undoData;
// }

const command = {
    name: commandNames.APPLY_FILTER_SECTION,

    /**
     * Change a shape
     * @param {Graphics} graphics - Graphics instance
     * @param {number} id - object id
     * @param {Object} options - Shape options
     *      @param {string} [options.fill] - Shape foreground color (ex: '#fff', 'transparent')
     *      @param {string} [options.stroke] - Shape outline color
     *      @param {number} [options.strokeWidth] - Shape outline width
     *      @param {number} [options.width] - Width value (When type option is 'rect', this options can use)
     *      @param {number} [options.height] - Height value (When type option is 'rect', this options can use)
     *      @param {number} [options.rx] - Radius x value (When type option is 'circle', this options can use)
     *      @param {number} [options.ry] - Radius y value (When type option is 'circle', this options can use)
     *      @param {number} [options.left] - Shape x position
     *      @param {number} [options.top] - Shape y position
     *      @param {number} [options.isRegular] - Whether resizing shape has 1:1 ratio or not
     * @param {boolean} isSilent - is silent execution or not
     * @returns {Promise}
     */
    execute(graphics, id, options) {
        const filtersectionComp = graphics.getComponent(FILTER_SECTION);
        const targetObj = graphics.getObject(id);

        if (!targetObj) {
            return Promise.reject(rejectMessages.noObject);
        }

        // if (!this.isRedo) {
        //     const undoData = makeUndoData(options, targetObj);
        // 
        //     chchedUndoDataForSilent = this.setUndoData(undoData, chchedUndoDataForSilent, isSilent);
        // }

        return filtersectionComp.apply(targetObj, options);
    },
    /**
     * @param {Graphics} graphics - Graphics instance
     * @returns {Promise}
     */
    undo() {
        return Promise.resolve();
    }
};

commandFactory.register(command);

export default command;
