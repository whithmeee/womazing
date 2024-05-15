export interface IModal {
    isOpen: boolean;
    setIsOpen(value: boolean): void;
    children: React.ReactNode;
}
