/**
 * This file was generated from NativeEventListener.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { ActionValue, DynamicValue, EditableValue } from "mendix";

export interface EventListType {
    eventName: DynamicValue<string>;
    dataAttribute?: EditableValue<string>;
    onEventAction?: ActionValue;
}

export interface EventListPreviewType {
    eventName: string;
    dataAttribute: string;
    onEventAction: {} | null;
}

export interface NativeEventListenerProps<Style> {
    name: string;
    style: Style[];
    eventList: EventListType[];
}

export interface NativeEventListenerPreviewProps {
    className: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    eventList: EventListPreviewType[];
}
