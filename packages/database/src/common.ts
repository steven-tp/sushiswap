import { type Prisma } from '@prisma/client'

export const defaultPrismaClientOptions = {
  datasources: {
    db: {
      url: 'prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiYjNmZTc0YWEtZmI1YS00M2MzLTkwYzktNzU0ZWM3NWU2ZGQzIiwidGVuYW50X2lkIjoiYmZmNWMxZmM0ZjEwM2U4NzMwMzZlZTAxNjMyNmNiOGIxM2JiZTg0NmRhZjNlYmU2OTc5N2RjYjJkOGI2ZjBjNyIsImludGVybmFsX3NlY3JldCI6IjQ2NzBmOWQ0LThjZGUtNGIzYi04MjgxLThlYjYwNDZmYjcxZiJ9.31uV7337NgGChGK7E4e5zlQO8MNUDlKOk3eiO4BkUnA',
    },
  },
  // log: ['query'],
} satisfies Prisma.PrismaClientOptions

/**
 *
 * Deep-replaces the Prisma.Decimal type with string, which prisma actually returns.
 * Will add 'string' for null-only types, don't think we should ever come across those though.
 */
export type DecimalToString<T> = {
  [P in keyof T]: T[P] extends Prisma.Decimal | null
    ? Exclude<T[P], Prisma.Decimal> | string
    : T[P] extends unknown[]
    ? DecimalToString<T[P][0]>[]
    : T[P] extends object
    ? DecimalToString<T[P]>
    : T[P]
}
