import type {MousePitchHandler, MouseRotateHandler} from '../mouse';

/**
 * The `DragRotateHandler` allows the user to rotate the map by clicking and
 * dragging the cursor while holding the right mouse button or `ctrl` key.
 */
export class DragRotateHandler {

    _mouseRotate: MouseRotateHandler;
    _mousePitch: MousePitchHandler;
    _pitchWithRotate: boolean;

    /**
     * @param {Object} [options]
     * @param {number} [options.bearingSnap] The threshold, measured in degrees, that determines when the map's
     *   bearing will snap to north.
     * @param {bool} [options.pitchWithRotate=true] Control the map pitch in addition to the bearing
     * @private
     */
    constructor(options: {
        pitchWithRotate: boolean;
    }, mouseRotate: MouseRotateHandler, mousePitch: MousePitchHandler) {
        this._pitchWithRotate = options.pitchWithRotate;
        this._mouseRotate = mouseRotate;
        this._mousePitch = mousePitch;
    }

    /**
     * Enables the "drag to rotate" interaction.
     *
     * @example
     * map.dragRotate.enable();
     */
    enable() {
        this._mouseRotate.enable();
        if (this._pitchWithRotate) this._mousePitch.enable();
    }

    /**
     * Disables the "drag to rotate" interaction.
     *
     * @example
     * map.dragRotate.disable();
     */
    disable() {
        this._mouseRotate.disable();
        this._mousePitch.disable();
    }

    /**
     * Returns a Boolean indicating whether the "drag to rotate" interaction is enabled.
     *
     * @returns {boolean} `true` if the "drag to rotate" interaction is enabled.
     */
    isEnabled() {
        return this._mouseRotate.isEnabled() && (!this._pitchWithRotate || this._mousePitch.isEnabled());
    }

    /**
     * Returns a Boolean indicating whether the "drag to rotate" interaction is active, i.e. currently being used.
     *
     * @returns {boolean} `true` if the "drag to rotate" interaction is active.
     */
    isActive() {
        return this._mouseRotate.isActive() || this._mousePitch.isActive();
    }
}
