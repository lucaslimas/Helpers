/// <reference path="../../../../types/@react-navigation/core.d.ts" />
import * as React from 'react';
import { Animated } from 'react-native';
import { ThemeContext } from '@react-navigation/core';
declare class HeaderTitle extends React.Component<React.ComponentProps<typeof Animated.Text>> {
    static contextType: React.Context<import("@react-navigation/core").SupportedThemes>;
    context: React.ContextType<typeof ThemeContext>;
    render(): JSX.Element;
}
export default HeaderTitle;
