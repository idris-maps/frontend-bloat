import React, { CSSProperties } from 'react';
import classNames from 'classnames';
import { Theme } from '@react-components-attempt/types';
import './Avatar.scss';

/**
 * The class name of the block element (BEM).
 */
const BLOCK_CLASSNAME = 'avatar';

export interface Props {
  /**
   * Includes the content of the component.
   */
  children: React.ReactNode;

  /**
   * Additional classNames that can be added.
   */
  className?: string;

  /**
   * Sets additional inline styles onto the element.
   * E.g. It can be used to set the background color.
   */
  style?: CSSProperties;

  /**
   * Overrides the color if both values are defined.
   */
  theme?: Theme;

  /**
   * A title attribute can be set on the avatar.
   */
  title?: string;
}

/**
 * Displays the given elements in a round container.
 * It is especially useful for shorter text like initials.
 */
const Avatar: React.FunctionComponent<Props> = (props: Props) => {
  const {
    children,
    className,
    style,
    theme,
    title,
  } = props;

  const classes = classNames(
    BLOCK_CLASSNAME,
    className,
    {
      [`${BLOCK_CLASSNAME}--${theme}`]: theme,
    },
  );

  return (
    <span
      className={classes}
      style={style}
      title={title}
    >
      {children}
    </span>
  );
};

export default Avatar;
