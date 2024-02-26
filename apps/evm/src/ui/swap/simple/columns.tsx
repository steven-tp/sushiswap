import { Button, LinkExternal, SkeletonText } from "@sushiswap/ui";
import { ColumnDef } from "@tanstack/react-table";
import { shortenAddress } from "sushi/format";
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid'

export const DATE_COLUMN = {
  id: 'date',
  header: 'DATE',
  cell: (props: any) => props.row.original.date,
  meta: {
    skeleton: <SkeletonText fontSize="lg" />
  }
}

export const TYPE_COLUMN = {
  id: 'type',
  header: 'TYPE',
  cell: (props: any) => props.row.original.type,
  meta: {
    skeleton: <SkeletonText fontSize="lg" />
  }
}

export const AMOUNT_IN_COLUMN = {
  id: 'amountIn',
  header: 'Amount In',
  cell: (props: any) => `${props.row.original.amountIn} ETH`,
  meta: {
    skeleton: <SkeletonText fontSize="lg" />
  }
}

export const AMOUNT_OUT_COLUMN = {
  id: 'amountOut',
  header: 'Amount Out',
  cell: (props: any) => `${props.row.original.amountOut} U2U`,
  meta: {
    skeleton: <SkeletonText fontSize="lg" />
  }
}

export const PRICE_COLUMN = {
  id: 'price',
  header: 'PRICE (ETH/U2U)',
  cell: (props: any) => props.row.original.price,
  meta: {
    skeleton: <SkeletonText fontSize="lg" />
  }
}

export const MAKER_COLUMN = {
  id: 'maker',
  header: 'MAKER',
  cell: (props: any) => (
    <div title={`${props.row.original.maker}`}>{shortenAddress(props.row.original.maker)}</div>
  ),
  meta: {
    skeleton: <SkeletonText fontSize="lg" />
  }
}

export const TXN_COLUMN = {
  id: 'txn',
  header: 'TXN',
  cell: (props: any) => (
    <LinkExternal
    href={'javscript:;'}
  >
    <Button
      asChild
      variant="link"
      size="sm"
      className="!font-medium !text-secondary-foreground"
      title={`${props.row.original.txn}`}
    >
      {shortenAddress(props.row.original.txn)}
      <ArrowTopRightOnSquareIcon className="w-4 h-4" />
    </Button>
  </LinkExternal>
  ),
  meta: {
    skeleton: <SkeletonText fontSize="lg" />
  }
}

export const ADDRESS_COLUMN = {
  id: 'address',
  header: 'Address',
  cell: (props: any) => (
    <div title={`${props.row.original.address}`}>{shortenAddress(props.row.original.address)}</div>
  ),
  meta: {
    skeleton: <SkeletonText fontSize="lg" />
  }
}

export const PERCENT_COLUMN = {
  id: 'percent',
  header: '%',
  cell: (props: any) => `${props.row.original.percent}%`,
  meta: {
    skeleton: <SkeletonText fontSize="lg" />
  }
}

export const AMOUNT_COLUMN = {
  id: 'percent',
  header: 'AMOUNT',
  cell: (props: any) => (
    <div className="flex items-center gap-4">
      <span className="inline-block min-w-[60px]">{props.row.original.minAmount}M</span>
      <div className="relative h-4 w-[240px] bg-gray-500 rounded-2xl">
        <span className={`absolute left-0 top-0 h-full bg-green-400 rounded-2xl w-[${props.row.original.percent}%]`}></span>
      </div>
      <span className="inline-block min-w-[60px]">{props.row.original.maxAmount}M</span>
    </div>
  ),
  meta: {
    skeleton: <SkeletonText fontSize="lg" />
  }
}

export const TNXS_COLUMN = {
  id: 'txn',
  header: 'TNXS/EXP',
  cell: (props: any) => (
    <div className="inline-flex items-center gap-2">
      <LinkExternal
        href={'javscript:;'}
      >
        <Button
          asChild
          variant="link"
          size="sm"
          className="!font-medium !text-secondary-foreground"
        >
          Tnxs
        </Button>
      </LinkExternal>
      /
      <LinkExternal
        href={'javscript:;'}
      >
        <Button
          asChild
          variant="link"
          size="sm"
          className="!font-medium !text-secondary-foreground"
        >
          Exp
        </Button>
      </LinkExternal>
    </div>
  ),
  meta: {
    skeleton: <SkeletonText fontSize="lg" />
  }
}