import 'styled-components';

import {
  css,
  CSSObject,
  FlattenSimpleInterpolation,
  SimpleInterpolation,
} from 'styled-components';

export const theme = {
  name: 'Base Theme',
  fonts: {},
  colors: {},
  mixins: {
    flexCenter: (): FlattenSimpleInterpolation =>
      css`
        display: flex;
        align-items: center;
        justify-content: center;
      `,
    box: (): FlattenSimpleInterpolation =>
      css`
        padding: 16px 20px;
        margin: 12px;
        border: 1px solid #444;
        border-radius: 4px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
      `,
    neumorphism: (): FlattenSimpleInterpolation =>
      css`
        background-color: #8cc7f6;
        border-radius: 8px;
        box-shadow: -8px -8px 16px 0 #b9dcf9, 8px 8px 16px 0 #5eb0f2;
      `,
  },
  media: {
    sp: (
      first: CSSObject | TemplateStringsArray,
      ...interpolations: SimpleInterpolation[]
    ): FlattenSimpleInterpolation => css`
      @media (max-width: 768px) {
        ${css(first, ...interpolations)}
      }
    `,
  },
} as const;

type AppTheme = typeof theme;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends AppTheme {}
}
