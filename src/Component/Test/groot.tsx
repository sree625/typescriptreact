import React from 'react'

type GrootProps = {
    name?: string
    isAvailable: boolean
    handleChange: (a: number) => void
}

const Groot = (props: GrootProps) => {
    const { name = 'ravi', isAvailable, handleChange } = props
    return (
        <div>
            {name}

            <button onClick={() => handleChange(1)}> click</button>
        </div>
    )
}

export default Groot
