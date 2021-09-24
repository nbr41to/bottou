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
    toCenter: (): FlattenSimpleInterpolation =>
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
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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
  type DefaultTheme = AppTheme;
}