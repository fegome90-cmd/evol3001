import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
export var Chip = function (_a) {
    var label = _a.label, selected = _a.selected, onClick = _a.onClick;
    return (_jsx("button", { onClick: onClick, className: "\n        px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ease-in-out\n        border select-none focus:outline-none focus:ring-2 focus:ring-primary/50\n        ".concat(selected
            ? 'bg-primary text-white border-primary shadow-md scale-[1.02]'
            : 'bg-white text-slate-600 border-slate-200 hover:border-primary/50 hover:bg-slate-50', "\n      "), "aria-pressed": selected, children: label }));
};
export var Card = function (_a) {
    var children = _a.children, _b = _a.className, className = _b === void 0 ? '' : _b;
    return (_jsx("div", { className: "bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden ".concat(className), children: children }));
};
export var SectionHeader = function (_a) {
    var title = _a.title;
    return (_jsx("h3", { className: "text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 ml-1", children: title }));
};
