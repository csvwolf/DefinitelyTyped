// Type definitions for React Router Native 4.0
// Project: https://github.com/ReactTraining/react-router-native
// Definitions by: Eduard Zintz <https://github.com/ezintz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export {
  match,
  matchPath,
  MemoryRouter,
  Prompt,
  Redirect,
  Route,
  RouteComponentProps,
  RouteProps,
  Router,
  RouterChildContext,
  StaticRouter,
  Switch,
  withRouter
} from 'react-router';
import * as React from 'react';
import * as H from 'history';

export interface AndroidBackButtonProps {
  children: Array<React.Component<void, void>>;
}

export class AndroidBackButton extends React.Component<AndroidBackButtonProps, void> {}

export class DeepLinking extends React.Component<{}, {}> {}

export interface LinkProps {
  component?: React.Component<void, void>;
  replace?: boolean;
  style?: any;
  to: H.LocationDescriptor;
}

export class Link extends React.Component<LinkProps, void> {}

export interface NativeRouterProps {
  getUserConfirmation?: Function;
  keyLength?: number;
}

export class NativeRouter extends React.Component<NativeRouterProps, void> {}
