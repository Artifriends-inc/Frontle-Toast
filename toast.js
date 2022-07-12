'use strict';

import {ToastManager} from "./toastManager.js";

export class Toast {
    toastManager = null;
    toastId = null;
    handler = null;
    autoClose = null;

    // required options
    html = ``;

    // custom options
    toastClass = '';
    toastContentsClass = '';
    transitionSeconds = '0.3';
    holdSeconds = '3';

    awake = () => {};
    start = () => {};
    end = () => {};

    constructor(html) {
        if(html === null) throw 'html must be entered';

        this.html = html;

        this.handler = document.querySelector('.rootPage').id;
        this.toastManager = ToastManager.getInstance();
    }

    open() {
        if(this.toastId !== null){
            // toast is already opened
            if(this.toastManager.checkOpenedStatus(this.toastId)) return;

            // animation is running
            if(this.toastManager.checkAnimationStatus(this.toastId)) return;
        }

        // get z-index
        let zIndex = this.toastManager.getZIndex();

        // set toast id
        this.toastId = 'frontleToast' + zIndex;

        // start modal open
        this.toastManager.startOpen(this.toastId);

        // add default toast css
        if(document.getElementById('frontleToastCSS') === null){
            let toastCSSElement = document.createElement('style');
            toastCSSElement.setAttribute('id', 'frontleToastCSS');
            toastCSSElement.innerHTML = `
                .frontleToast{}
                .frontleToastContents{
                    position: fixed;
                    maxWidth: 90vw;
                    width: auto;
                    height: auto;
                    text-align: center;
                    word-break: break-all;
                    top: 90%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    box-sizing: border-box;
                    overflow: hidden;
                    padding: 7px 20px 9px 20px;
                    border-radius: 500px;
                    background: rgba(90, 90, 90, 0.8);
                    font-size: 0.94rem;
                    color: #ffffff;
                    opacity: 1;
                }
            `;
            document.head.insertBefore(toastCSSElement, document.head.childNodes[0]);
        }

        // set html
        let html = `
            <div id="frontleToastContents_${this.toastId}" class="frontleToastContents ${this.toastContentsClass}" style="z-index: ${zIndex}">${this.html}</div>
        `;

        // add toast
        let toastElement = document.createElement('div');
        toastElement.setAttribute('id', this.toastId);
        toastElement.className = `frontleToast ${this.toastClass}`;
        toastElement.innerHTML = html;
        toastElement.style.zIndex = String(zIndex);
        toastElement.style.opacity = '0';
        toastElement.style.transition = `opacity ease ${this.transitionSeconds}s 0s`;
        document.getElementById(this.handler).append(toastElement);

        // run lifecycle
        this.awake();

        // set close event
        document.querySelector(`#frontleToastContents_${this.toastId}`).addEventListener('click', () => {
            this.close();
        });

        // start toast animation
        setTimeout(() => {
            let toast = document.getElementById(this.toastId);
            toast.style.opacity = '1';
        }, 0);

        // end toast animation
        setTimeout(() => {
            // end modal open
            this.toastManager.endOpen(this.toastId);

            // close toast
            this.autoClose = setTimeout(() => {
                this.close();
            }, this.holdSeconds * 1000);

            // run lifecycle
            this.start();
        }, Number(this.transitionSeconds) * 1000);
    }

    close() {
        // non toast
        if(this.toastId === null) return;

        // toast is not opened
        if(this.toastManager.checkOpenedStatus(this.toastId) === false) return;

        // animation is running
        if(this.toastManager.checkAnimationStatus(this.toastId)) return;

        // start toast close
        this.toastManager.startClose(this.toastId);

        // stop auto close
        clearTimeout(this.autoClose);

        // run lifecycle
        this.end();

        // start toast animation
        let toastElement = document.getElementById(this.toastId);
        if(toastElement !== null) toastElement.style.opacity = '0';

        // end toast animation
        setTimeout(() => {
            // remove toast
            if(toastElement !== null) toastElement.remove();

            // end modal close
            this.toastManager.endClose(this.toastId);
        }, this.transitionSeconds * 1000);
    }
}

