import { ComponentProps } from 'react';
import cx from 'classnames';

const COMPONENT_CLASSNAME = 'app-button';

export type AppButtonColorTheme = 'primary' | 'secondary';

export type AppButtonSizeTheme = 'md';

export type AppButtonProps = Omit<ComponentProps<'button'>, 'color'> & {
  color?: AppButtonColorTheme;
  size?: AppButtonSizeTheme;
  isProcessing?: boolean;
};

export const AppButton = ({
  className,
  type = 'button',
  color = 'primary',
  size = 'md',
  isProcessing,
  disabled,
  children,
  ...rest
}: AppButtonProps) => {
  return (
    <button
      type={type}
      disabled={(disabled || isProcessing) as boolean}
      className={cx(
        COMPONENT_CLASSNAME,
        `${COMPONENT_CLASSNAME}-color-${color}`,
        `${COMPONENT_CLASSNAME}-size-${size}`,
        className
      )}
      {...rest}
    >
      {children}
      {isProcessing && <>Loading...</>}
    </button>
  );
};
