"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Printer_1 = require("../../Printer");
const Utility_1 = require("../../Utility");
var OneOf;
(function (OneOf) {
    function print(oneOfDescriptor, fieldsDescriptor, indentLevel) {
        let oneOfName = Utility_1.Utility.oneOfName(oneOfDescriptor.getName());
        let oneOfNameUpper = oneOfName.toUpperCase();
        const printer = new Printer_1.Printer(indentLevel);
        printer.printEmptyLn();
        printer.printLn(`export enum ${oneOfName}Case {`);
        printer.printIndentedLn(`${oneOfNameUpper}_NOT_SET = 0,`);
        fieldsDescriptor.forEach(field => {
            printer.printIndentedLn(`${oneOfNameUpper} = ${field.getNumber()},`);
        });
        printer.printLn('}');
        return printer.output;
    }
    OneOf.print = print;
})(OneOf = exports.OneOf || (exports.OneOf = {}));
