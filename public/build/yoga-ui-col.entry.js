import { r as registerInstance, h, H as Host } from './index-c7e43cc7.js';

const grid = {
    breakpoints: ["sm", "md", "lg", "xlg"]
};

const yogaUiColCss = ":host{grid-column:span 12}:host(.col-1){grid-column:span 1}:host(.col-2){grid-column:span 2}:host(.col-3){grid-column:span 3}:host(.col-4){grid-column:span 4}:host(.col-5){grid-column:span 5}:host(.col-6){grid-column:span 6}:host(.col-7){grid-column:span 7}:host(.col-8){grid-column:span 8}:host(.col-9){grid-column:span 9}:host(.col-10){grid-column:span 10}:host(.col-11){grid-column:span 11}:host(.col-12){grid-column:span 12}@media (min-width: 40em){:host(.col-sm-1){grid-column:span 1}:host(.col-sm-2){grid-column:span 2}:host(.col-sm-3){grid-column:span 3}:host(.col-sm-4){grid-column:span 4}:host(.col-sm-5){grid-column:span 5}:host(.col-sm-6){grid-column:span 6}:host(.col-sm-7){grid-column:span 7}:host(.col-sm-8){grid-column:span 8}:host(.col-sm-9){grid-column:span 9}:host(.col-sm-10){grid-column:span 10}:host(.col-sm-11){grid-column:span 11}:host(.col-sm-12){grid-column:span 12}}@media (min-width: 52em){:host(.col-md-1){grid-column:span 1}:host(.col-md-2){grid-column:span 2}:host(.col-md-3){grid-column:span 3}:host(.col-md-4){grid-column:span 4}:host(.col-md-5){grid-column:span 5}:host(.col-md-6){grid-column:span 6}:host(.col-md-7){grid-column:span 7}:host(.col-md-8){grid-column:span 8}:host(.col-md-9){grid-column:span 9}:host(.col-md-10){grid-column:span 10}:host(.col-md-11){grid-column:span 11}:host(.col-md-12){grid-column:span 12}}@media (min-width: 64em){:host(.col-lg-1){grid-column:span 1}:host(.col-lg-2){grid-column:span 2}:host(.col-lg-3){grid-column:span 3}:host(.col-lg-4){grid-column:span 4}:host(.col-lg-5){grid-column:span 5}:host(.col-lg-6){grid-column:span 6}:host(.col-lg-7){grid-column:span 7}:host(.col-lg-8){grid-column:span 8}:host(.col-lg-9){grid-column:span 9}:host(.col-lg-10){grid-column:span 10}:host(.col-lg-11){grid-column:span 11}:host(.col-lg-12){grid-column:span 12}}@media (min-width: 80em){:host(.col-xl-1){grid-column:span 1}:host(.col-xl-2){grid-column:span 2}:host(.col-xl-3){grid-column:span 3}:host(.col-xl-4){grid-column:span 4}:host(.col-xl-5){grid-column:span 5}:host(.col-xl-6){grid-column:span 6}:host(.col-xl-7){grid-column:span 7}:host(.col-xl-8){grid-column:span 8}:host(.col-xl-9){grid-column:span 9}:host(.col-xl-10){grid-column:span 10}:host(.col-xl-11){grid-column:span 11}:host(.col-xl-12){grid-column:span 12}}";

const YogaUiCol = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    componentWillLoad() {
        this.parseColsProp(this.cols);
    }
    getColumnClassesByBreakpoint(col, i) {
        const firstColumnClass = `col-${col}`;
        if (!i) {
            return firstColumnClass;
        }
        return col && `col-${grid.breakpoints[i - 1]}-${col}`;
    }
    getColumnClasses() {
        return this.cols && Array.isArray(this.cols)
            ? this.cols.map(this.getColumnClassesByBreakpoint).join(" ")
            : `col-${this.cols}`;
    }
    parseColsProp(cols) {
        if (cols && typeof cols === "string")
            this.cols = JSON.parse(cols);
    }
    render() {
        return (h(Host, { class: this.getColumnClasses() }, h("slot", null)));
    }
    static get watchers() { return {
        "cols": ["parseColsProp"]
    }; }
};
YogaUiCol.style = yogaUiColCss;

export { YogaUiCol as yoga_ui_col };
