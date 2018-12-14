/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { filter } from 'rxjs/operators';
import * as i0 from "@angular/core";
export class NgGuideWalkLibService {
    constructor() {
        this.activeSteps = 0;
        this.eventWalkSubject = new Subject();
        this.currentStep = null;
        this._config = {};
    }
    /**
     * @return {?}
     */
    get config() {
        return this._config;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    set config(config) {
        this._config = config;
    }
    /**
     * @return {?}
     */
    register() {
        this.activeSteps++;
    }
    /**
     * @return {?}
     */
    unregister() {
        this.activeSteps--;
    }
    /**
     * @param {?} step
     * @return {?}
     */
    isLast(step) {
        return (this.activeSteps) === step;
    }
    /**
     * @return {?}
     */
    stopGuide() {
        this.closeCurrentStep();
        this.currentStep = undefined;
    }
    /**
     * @return {?}
     */
    startGuide() {
        this.currentStep = 1;
        this.invokeStep(this.currentStep);
    }
    /**
     * @param {?} stepNum
     * @return {?}
     */
    invokeStep(stepNum) {
        this.closeCurrentStep();
        this.currentStep = stepNum;
        this.eventWalkSubject.next({ step: stepNum, event: 'open' });
    }
    /**
     * @return {?}
     */
    closeCurrentStep() {
        if (this.currentStep) {
            this.eventWalkSubject.next({ step: this.currentStep, event: 'close' });
        }
    }
    /**
     * @return {?}
     */
    nextGuide() {
        this.closeCurrentStep();
        this.currentStep++;
        this.invokeStep(this.currentStep);
    }
    /**
     * @param {?} stepNum
     * @return {?}
     */
    getStepObservable(stepNum) {
        return this.eventWalkSubject.asObservable().pipe(filter(item => item.step === stepNum));
    }
}
NgGuideWalkLibService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NgGuideWalkLibService.ctorParameters = () => [];
/** @nocollapse */ NgGuideWalkLibService.ngInjectableDef = i0.defineInjectable({ factory: function NgGuideWalkLibService_Factory() { return new NgGuideWalkLibService(); }, token: NgGuideWalkLibService, providedIn: "root" });
if (false) {
    /** @type {?} */
    NgGuideWalkLibService.prototype.activeSteps;
    /** @type {?} */
    NgGuideWalkLibService.prototype.eventWalkSubject;
    /** @type {?} */
    NgGuideWalkLibService.prototype.currentStep;
    /** @type {?} */
    NgGuideWalkLibService.prototype._config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZ3VpZGUtd2Fsay1saWIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWd1aWRlLXdhbGsvIiwic291cmNlcyI6WyJsaWIvbmctZ3VpZGUtd2Fsay1saWIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFNeEMsTUFBTSxPQUFPLHFCQUFxQjtJQWFoQztRQVpRLGdCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLHFCQUFnQixHQUF1QixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ3JELGdCQUFXLEdBQWtCLElBQUksQ0FBQztRQUNsQyxZQUFPLEdBQUcsRUFBRSxDQUFDO0lBU0wsQ0FBQzs7OztJQVBqQixJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFDRCxJQUFJLE1BQU0sQ0FBQyxNQUFNO1FBQ2YsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7SUFDeEIsQ0FBQzs7OztJQUdELFFBQVE7UUFDTixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7OztJQUNELFVBQVU7UUFDUixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFDRCxNQUFNLENBQUMsSUFBSTtRQUNULE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssSUFBSSxDQUFDO0lBQ3JDLENBQUM7Ozs7SUFDRCxTQUFTO1FBQ1AsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7SUFDL0IsQ0FBQzs7OztJQUNNLFVBQVU7UUFFZixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7OztJQUNNLFVBQVUsQ0FBQyxPQUFlO1FBQy9CLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDO1FBQzNCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQy9ELENBQUM7Ozs7SUFDTyxnQkFBZ0I7UUFDdEIsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztTQUN4RTtJQUNILENBQUM7Ozs7SUFFTSxTQUFTO1FBQ2QsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Ozs7O0lBQ00saUJBQWlCLENBQUMsT0FBZTtRQUN0QyxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzFGLENBQUM7OztZQXJERixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7Ozs7SUFFQyw0Q0FBd0I7O0lBQ3hCLGlEQUE2RDs7SUFDN0QsNENBQTBDOztJQUMxQyx3Q0FBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBXYWxrRXZlbnQgfSBmcm9tICcuL25nLWd1aWRlLnR5cGVzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTmdHdWlkZVdhbGtMaWJTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBhY3RpdmVTdGVwcyA9IDA7XG4gIHByaXZhdGUgZXZlbnRXYWxrU3ViamVjdDogU3ViamVjdDxXYWxrRXZlbnQ+ID0gbmV3IFN1YmplY3QoKTtcbiAgcHJpdmF0ZSBjdXJyZW50U3RlcDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgX2NvbmZpZyA9IHt9O1xuXG4gIGdldCBjb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZztcbiAgfVxuICBzZXQgY29uZmlnKGNvbmZpZykge1xuICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG4gIHJlZ2lzdGVyKCkge1xuICAgIHRoaXMuYWN0aXZlU3RlcHMrKztcbiAgfVxuICB1bnJlZ2lzdGVyKCkge1xuICAgIHRoaXMuYWN0aXZlU3RlcHMtLTtcbiAgfVxuICBpc0xhc3Qoc3RlcCkge1xuICAgIHJldHVybiAodGhpcy5hY3RpdmVTdGVwcykgPT09IHN0ZXA7XG4gIH1cbiAgc3RvcEd1aWRlKCkge1xuICAgIHRoaXMuY2xvc2VDdXJyZW50U3RlcCgpO1xuICAgIHRoaXMuY3VycmVudFN0ZXAgPSB1bmRlZmluZWQ7XG4gIH1cbiAgcHVibGljIHN0YXJ0R3VpZGUoKSB7XG4gIFxuICAgIHRoaXMuY3VycmVudFN0ZXAgPSAxO1xuICAgIHRoaXMuaW52b2tlU3RlcCh0aGlzLmN1cnJlbnRTdGVwKTtcbiAgfVxuICBwdWJsaWMgaW52b2tlU3RlcChzdGVwTnVtOiBudW1iZXIpIHtcbiAgICB0aGlzLmNsb3NlQ3VycmVudFN0ZXAoKTtcbiAgICB0aGlzLmN1cnJlbnRTdGVwID0gc3RlcE51bTtcbiAgICB0aGlzLmV2ZW50V2Fsa1N1YmplY3QubmV4dCh7IHN0ZXA6IHN0ZXBOdW0sIGV2ZW50OiAnb3BlbicgfSk7XG4gIH1cbiAgcHJpdmF0ZSBjbG9zZUN1cnJlbnRTdGVwKCkge1xuICAgIGlmICh0aGlzLmN1cnJlbnRTdGVwKSB7XG4gICAgICB0aGlzLmV2ZW50V2Fsa1N1YmplY3QubmV4dCh7IHN0ZXA6IHRoaXMuY3VycmVudFN0ZXAsIGV2ZW50OiAnY2xvc2UnIH0pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBuZXh0R3VpZGUoKSB7XG4gICAgdGhpcy5jbG9zZUN1cnJlbnRTdGVwKCk7XG4gICAgdGhpcy5jdXJyZW50U3RlcCsrO1xuICAgIHRoaXMuaW52b2tlU3RlcCh0aGlzLmN1cnJlbnRTdGVwKTtcbiAgfVxuICBwdWJsaWMgZ2V0U3RlcE9ic2VydmFibGUoc3RlcE51bTogbnVtYmVyKTogT2JzZXJ2YWJsZTxXYWxrRXZlbnQ+IHtcbiAgICByZXR1cm4gdGhpcy5ldmVudFdhbGtTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpLnBpcGUoZmlsdGVyKGl0ZW0gPT4gaXRlbS5zdGVwID09PSBzdGVwTnVtKSk7XG4gIH1cbn1cbiJdfQ==