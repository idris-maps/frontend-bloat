/**
 * The dimensions of the window can be undefined,
 * if used on the server where no window object is
 * available.
 */
 export interface WindowDimensions {
  width: number | undefined;
  height: number | undefined;
}

/**
 * The different themes
 */
export type Theme = 'primary' | 'secondary' | 'light' | 'dark';

/**
 * The different style size modifications that are used,
 * which are used for font sizes and other attributes.
 */
export type StyleSize = 'sm' | 'base' | 'lg' | 'xl';

/**
 * Every reusable component should accept the following props.
 */
export interface CustomizableProps {
  /**
   * Accepts a string of class names that is applied to the component.
   * It is typically applied on the host element.
   */
  className?: string;
}

/**
 * A layout component has a set of props that are common
 * and have to be handled accordingly.
 */
export interface LayoutComponent {
  /**
   * If set to true, it wraps the list of children
   * inside a container component.
   */
  contained?: boolean;

  /**
   * Applies the sticky class to the component,
   * which sticks it to the top of the page / viewport.
   */
  sticky?: boolean;
}

/**
 * Interface representing an option of a select.
 */
export interface SelectOptionProps {
  /**
   * Contains a unique value
   */
  value: any;

  /**
   * Contains a descriptive text of the country.
   */
  label: string;

  /**
   * Contains a short description in form of numbers or initials,
   * for a longer label.
   */
  code?: string;
}

/**
 * Represents a function of an unknown amount of arguments.
 */
export type UnknownFunction = (...args: unknown[]) => void;

/**
 * input related types
 */
export type SupportedInputType = 'text' | 'number' | 'email' | 'password' | 'tel' | 'url';
export type SupportedInputValueType = string | number | string[] | undefined;

/**
 * The possible four directions.
 */
export type Direction = 'top' | 'bottom' | 'right' | 'left';
