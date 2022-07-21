'use strict';

import {zIndexManager} from "./util/zIndexManager.js";

export class ToastManager {
    static _instance = null;
    constructor() {
        const handler = document.querySelector('.rootPage').id;

        if (ToastManager._instance) {
            if(ToastManager._instance.handler !== handler) ToastManager._instance.init(handler);
            return ToastManager._instance;
        }

        this.init(handler);
        ToastManager._instance = this;
    }

    zIndexManager = null;
    handler = null;
    toastCount = 0;
    openedStatus = {};
    openingStatus = {};
    closingStatus = {};

    init(handler) {
        this.zIndexManager = new zIndexManager();
        this.handler = handler;
        this.toastCount = 0;
        this.openedStatus = {};
        this.openingStatus = {};
        this.closingStatus = {};
    }

    getZIndex() {
        return this.zIndexManager.getZIndex();
    }

    startOpen(toastId) {
        this.openingStatus[toastId] = true;
        this.toastCount++;
        this.zIndexManager.setZIndex(1);
    }

    endOpen(toastId) {
        this.openingStatus[toastId] = false;
        this.openedStatus[toastId] = true;
    }

    startClose(toastId) {
        this.closingStatus[toastId] = true;
        if(this.toastCount > 0) this.toastCount--;
    }

    endClose(toastId) {
        this.closingStatus[toastId] = false;
        this.openedStatus[toastId] = false;
    }

    checkOpenedStatus(toastId) {
        return this.openedStatus[toastId];
    }

    checkAnimationStatus(toastId) {
        // animation is running
        if(this.openingStatus[toastId] || this.closingStatus[toastId]) return true;
        // animation is not running
        else return false;
    }
}


