import React from 'react';
interface TableProps {
    className?: string;
    children: React.ReactNode;
}
export declare const Table: React.ForwardRefExoticComponent<TableProps & React.RefAttributes<HTMLTableElement>>;
interface TableHeaderProps {
    className?: string;
    children: React.ReactNode;
}
export declare const TableHeader: React.ForwardRefExoticComponent<TableHeaderProps & React.RefAttributes<HTMLTableSectionElement>>;
interface TableBodyProps {
    className?: string;
    children: React.ReactNode;
}
export declare const TableBody: React.ForwardRefExoticComponent<TableBodyProps & React.RefAttributes<HTMLTableSectionElement>>;
interface TableRowProps {
    className?: string;
    children: React.ReactNode;
}
export declare const TableRow: React.ForwardRefExoticComponent<TableRowProps & React.RefAttributes<HTMLTableRowElement>>;
interface TableHeadProps {
    className?: string;
    children: React.ReactNode;
}
export declare const TableHead: React.ForwardRefExoticComponent<TableHeadProps & React.RefAttributes<HTMLTableCellElement>>;
interface TableCellProps {
    className?: string;
    children: React.ReactNode;
}
export declare const TableCell: React.ForwardRefExoticComponent<TableCellProps & React.RefAttributes<HTMLTableCellElement>>;
export {};
