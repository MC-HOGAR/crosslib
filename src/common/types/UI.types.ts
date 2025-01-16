/**
 * This interface is particularly useful when you have dropdowns, filters, or other user interface elements that require display names (label) and an underlying value (value).
 */
export interface ILabelValuePair<T> {
    label: string;
    value: T;
}