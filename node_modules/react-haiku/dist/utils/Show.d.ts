import { type ReactNode } from 'react';
type Props = {
    children: ReactNode & {
        props: {
            isTrue?: boolean;
        };
    };
};
type ElseProps = {
    render?: () => ReactNode;
    children?: ReactNode;
};
export declare const Show: {
    ({ children }: Props): ReactNode;
    When: ({ isTrue, children }: {
        isTrue: boolean;
        children: ReactNode;
    }) => ReactNode;
    Else({ render, children }: ElseProps): ReactNode;
};
export {};
