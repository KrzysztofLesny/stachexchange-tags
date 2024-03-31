import { Pagination as MuiPagination, PaginationProps as MuiPaginationProps } from '@mui/material';

// Only include variant, size, and color
type PaginationBaseProps = Pick<MuiPaginationProps, 'color' | 'count' | 'page' | 'onChange' | 'sx'>;

// Use all except disableRipple
// type ButtonBaseProps = Omit<MuiButtonProps, "disableRipple">;

export interface PaginationProps extends PaginationBaseProps {}

export const Pagination = ({ ...rest }: PaginationProps) => <MuiPagination {...rest}></MuiPagination>;