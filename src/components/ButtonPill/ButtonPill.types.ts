import { CSSProperties, ReactNode } from 'react';
import { AriaButtonProps } from '@react-types/button';

export interface Props extends AriaButtonProps {
  /**
   * Child components of this ButtonPill.
   */
  children?: ReactNode;

  /**
   * Custom class for overriding this component's CSS.
   */
  className?: string;

  /**
   * Color profile to use with this ButtonPill.
   */
  color?: 'join' | 'cancel' | 'message';

  /**
   * Whether or not this ButtonPill is disabled.
   */
  disabled?: boolean;

  /**
   * Whether or not this ButtonPill is ghosted.
   */
  ghost?: boolean;

  /**
   * Custom id for overriding this component's CSS.
   */
  id?: string;

  /**
   * Whether to use the outline variant of this ButtonPill if available.
   */
  outline?: boolean;

  /**
   * Size index of this ButtonPill.
   */
  size?: number;

  /**
   * Custom style for overriding this component's CSS.
   */
  style?: CSSProperties;
}