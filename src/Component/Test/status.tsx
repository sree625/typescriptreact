import { useState } from 'react'
import { StatusProps } from './status.type'
import Oscar from './oscar'

type NameProps = {
    name: string
}
const Status = (props: StatusProps) => {
    const [first, setfirst] = useState<NameProps[]>([])
    const [count, setCount] = useState(0)

    const handleSubmit = () => {
        setfirst([{ name: 'sreee' }])
    }

    const handleCounter = () => {
        setCount(count + 1)
        setCount(count + 1)
        setCount(count + 1)
        console.log(count, 'countttttttttt')
    }
    console.log(count, 'countttttttttt')
    const { status } = props
    return (
        <div>
            loading
            <button onClick={handleCounter}> hyyyyyyyyyyyyyyyyyyyyyyy</button>
            {/* <Oscar setCount={setCount} /> */}
        </div>
    )
}

export default Status
