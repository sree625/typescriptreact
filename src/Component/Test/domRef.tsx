import { useEffect, useRef } from 'react'

const DomRef = () => {
    const formRef = useRef<HTMLInputElement>(null!)

    useEffect(() => {
        formRef.current.focus()
    }, [])

    return (
        <div>
            DomRef
            <input type="text" ref={formRef} />
        </div>
    )
}

export default DomRef
