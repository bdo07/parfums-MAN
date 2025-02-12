import { Children } from 'react';
import { If } from './If';
export const Show = ({ children }) => {
    let when = null;
    let otherwise = null;
    Children.forEach(children, (child) => {
        if (child.props.isTrue === undefined) {
            otherwise = child;
        }
        else if (!when && child.props.isTrue === true) {
            when = child;
        }
    });
    return (when || otherwise);
};
Show.When = If;
Show.Else = ({ render, children }) => (render ? render() : children);
