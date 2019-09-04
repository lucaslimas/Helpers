import * as React from 'react';
import { SceneInterpolatorProps, HeaderProps } from '../../types';
declare type Props = HeaderProps & {
    leftLabelInterpolator: (props: SceneInterpolatorProps) => any;
    leftButtonInterpolator: (props: SceneInterpolatorProps) => any;
    titleFromLeftInterpolator: (props: SceneInterpolatorProps) => any;
    layoutInterpolator: (props: SceneInterpolatorProps) => any;
    theme: string;
};
declare const _default: React.ComponentType<Pick<Props, "scene" | "navigation" | "position" | "backTitleVisible" | "layoutPreset" | "scenes" | "layout" | "mode" | "transitionPreset" | "leftInterpolator" | "titleInterpolator" | "rightInterpolator" | "backgroundInterpolator" | "leftLabelInterpolator" | "leftButtonInterpolator" | "titleFromLeftInterpolator" | "layoutInterpolator" | "theme">>;
export default _default;
