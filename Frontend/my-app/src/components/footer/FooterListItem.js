import React from 'react'

const FooterListItem = ({ text, href }) => {
    return (
        <li>
            <a href={href} class="text-white">{text}</a>
        </li>
    )
}

export default FooterListItem