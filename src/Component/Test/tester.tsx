import { AppProvider } from './appContext'
import { Counter } from './counter'
import Groot from './groot'
import { Heading } from './heading'
import Oscar from './oscar'
import Status from './status'
import Test from './test'

const Tester = () => {
    const nameProps = {
        name: {
            firstname: 'sree',
            lastname: 'c',
        },
    }

    const testerProps = {
        test: {
            first: 'testFirstName',
        },
    }

    const handleChange = (a: number) => {
        console.log('hello')
    }
    return (
        <div>
            <AppProvider>
                <Test
                    name={'sree'}
                    nameProps={nameProps}
                    testerProps={testerProps}
                />
                <Status status={'sadsa'} />
                <Heading>sSD</Heading>
                {/* <Oscar>
                <Heading>oscar is wrapped</Heading>
            </Oscar> */}
                <Groot isAvailable={true} handleChange={handleChange} />
                <Counter />
            </AppProvider>
        </div>
    )
}

export default Tester

// const products: Product[] = [
//     { id: 1, name: 'Laptop', price: 1200, inStock: true },
//     { id: 2, name: 'Smartphone', price: 800, inStock: false },
//     { id: 3, name: 'Headphones', price: 150, inStock: true },
//     { id: 4, name: 'Monitor', price: 300, inStock: true },
// ]
