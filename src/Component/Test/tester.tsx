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
            first: 'name',
        },
    }
    return (
        <div>
            <Test
                name={'sree'}
                nameProps={nameProps}
                testerProps={testerProps}
            />
        </div>
    )
}

export default Tester
