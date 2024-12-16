import React from 'react'

const GenericTester = () => {
    const inputArray: <T>(arr: T) => T[] = (arr) => {
        return [arr]
    }
    console.log(inputArray(4))

    return <div>GenericTester</div>
}

export default GenericTester
