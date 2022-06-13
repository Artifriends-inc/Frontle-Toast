'use strict';

import {zIndexManager} from "../zindex-maximumvalue-manager/zIndexManager.js";

export class ToastManager {
    static instance = null;
    static getInstance(handler) {
        if (this.instance === null) {
            this.instance = new this();
            this.instance.init(handler);
        } else {
            if(this.instance.handler !== handler) this.instance.init(handler);
        }

        return this.instance;
    }

    zIndexManager = null;
    handler = null;
    toastCount = 0;
    openedStatus = {};
    openingStatus = {};
    closingStatus = {};

    constructor() {}

    init(handler) {
        this.zIndexManager = zIndexManager.getInstance(handler);
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


