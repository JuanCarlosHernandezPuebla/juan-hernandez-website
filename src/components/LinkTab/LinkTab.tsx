import { Tab } from '@mui/material'
import { NextLinkComposed } from '../Link'
import { LinkTabProps } from './LinkTabProps'

export default function LinkTab(props: LinkTabProps) {
    return (
        <Tab
            aria-current={props.selected && 'page'}
            component={NextLinkComposed}
            to={props.href}
            {...props}
        />
    )
}
