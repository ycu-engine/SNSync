import * as AvatarPrimitive from '@radix-ui/react-avatar'
import * as React from 'react'

import { cn } from '~/lib/shadcn'

const _Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full',
      className,
    )}
    {...props}
  />
))
_Avatar.displayName = AvatarPrimitive.Root.displayName

const _AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn('aspect-square h-full w-full', className)}
    {...props}
  />
))
_AvatarImage.displayName = AvatarPrimitive.Image.displayName

const _AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      'flex h-full w-full items-center justify-center rounded-full bg-muted',
      className,
    )}
    {...props}
  />
))
_AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { _Avatar, _AvatarImage, _AvatarFallback }

type Props = {
  src: string
  alt: string
  fallback?: string
  container?: React.ComponentPropsWithoutRef<typeof _Avatar>
  image?: React.ComponentPropsWithoutRef<typeof _AvatarImage>
}
export const Avatar = React.forwardRef<React.ElementRef<typeof _Avatar>, Props>(
  (props, ref) => (
    <_Avatar {...props.container} ref={ref}>
      <_AvatarImage {...props.image} src={props.src} alt={props.alt} />
      {props.fallback && <_AvatarFallback>{props.fallback}</_AvatarFallback>}
    </_Avatar>
  ),
)
