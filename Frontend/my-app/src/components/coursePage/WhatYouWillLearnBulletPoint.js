import React from 'react'

const WhatYouWillLearnBulletPoint = ({ text }) => {
    return (
        <li className="flex items-start lg:col-span-1">
            <div className="flex-shrink-0">
                <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                    <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                    </path>
                </svg>
            </div>
            <p className="ml-3 text-sm leading-5 text-gray-700">
                {text}
            </p>
        </li>
    )
}

export default WhatYouWillLearnBulletPoint