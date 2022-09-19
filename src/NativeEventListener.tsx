import { ReactElement, createElement, useMemo, useEffect } from "react";
import { TextStyle, View, ViewStyle, DeviceEventEmitter } from "react-native";

import { Style } from "@mendix/pluggable-widgets-tools";

import { NativeEventListenerProps } from "../typings/NativeEventListenerProps";
import { createEventListenerObjects } from "./util/eventlist";

export interface CustomStyle extends Style {
    container: ViewStyle;
    label: TextStyle;
}

export function NativeEventListener({ eventList }: NativeEventListenerProps<CustomStyle>): ReactElement {
    const events = useMemo(() => createEventListenerObjects(eventList), [eventList]);

    useEffect(() => {
        if (!events || events.length === 0) {
            return;
        }

        events.forEach(eventObj => {
            DeviceEventEmitter.addListener(eventObj.eventName, eventObj.handler);
        });

        return () => {
            events.forEach(eventObj => {
                DeviceEventEmitter.removeListener(eventObj.eventName, eventObj.handler);
            });
        };
    }, [events]);

    return <View />;
}
