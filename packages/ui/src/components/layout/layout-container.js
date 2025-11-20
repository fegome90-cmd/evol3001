import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { cn } from '../../lib/utils';
export var LayoutContainer = function (_a) {
    var children = _a.children, className = _a.className, sidebar = _a.sidebar;
    return (_jsxs("div", { className: cn("flex h-screen overflow-hidden bg-background", className), children: [sidebar && (_jsx("aside", { className: "w-64 hidden md:flex flex-col border-r bg-card", children: sidebar })), _jsx("main", { className: "flex-1 overflow-y-auto", children: _jsx("div", { className: "container mx-auto p-6 h-full", children: children }) })] }));
};
