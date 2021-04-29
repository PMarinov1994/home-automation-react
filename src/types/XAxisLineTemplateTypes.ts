export interface AxisPayload {
    value: any;
}

export interface XAxisLineTemplateProps {
    x?: number;
    y?: number;
    payload?: AxisPayload;
    tickFormatter?: (v: number, i?:number) => string;
}
