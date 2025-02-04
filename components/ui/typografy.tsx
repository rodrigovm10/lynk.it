import { cn } from '@/lib/utils'

export const TypographyH1 = ({
  children,
  className,
  ref,
  ...props
}: React.ComponentProps<'h1'>) => {
  return (
    <h1
      ref={ref}
      className={cn('scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl', className)}
      {...props}
    >
      {children}
    </h1>
  )
}

export const TypographyP = ({ children, className, ref, ...props }: React.ComponentProps<'h1'>) => {
  return (
    <p
      className={cn('leading-7 [&:not(:first-child)]:mt-6', className)}
      {...props}
    >
      {children}
    </p>
  )
}
