const VectorLine = props => {

    const externalClass = props.className

    return (
        <svg className={externalClass} xmlns="http://www.w3.org/2000/svg" width="414" height="2" viewBox="0 0 414 2" fill="none">
            <path d="M0 1H414" stroke="url(#paint0_linear_13_46)" />
            <defs>
                <linearGradient id="paint0_linear_13_46" x1="414" y1="1.00238" x2="0" y2="1" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#343045" />
                    <stop offset="0.348958" stopColor="#C0B7E8" />
                    <stop offset="0.6875" stopColor="#8176AF" />
                    <stop offset="1" stopColor="#343045" />
                </linearGradient>
            </defs>
        </svg>
    )
}

export default VectorLine