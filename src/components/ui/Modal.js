import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const Modal = ({ title, children, onClose }) => {
    return (_jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50", children: _jsxs("div", { className: "bg-white rounded-lg shadow-lg w-full max-w-md", children: [_jsxs("div", { className: "p-4 border-b border-gray-200", children: [_jsx("h2", { className: "text-lg font-medium text-gray-900", children: title }), _jsx("button", { onClick: onClose, className: "absolute top-4 right-4 text-gray-500 hover:text-gray-700", children: "\u00D7" })] }), _jsx("div", { className: "p-4", children: children })] }) }));
};
