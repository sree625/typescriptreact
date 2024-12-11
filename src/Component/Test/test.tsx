type NameProps = {
    name: {
        firstname: string
        lastname: string
    }
}
type TesterProps = {
    test: {
        first: string
    }
}
type TestProps = {
    name: string
    nameProps: NameProps
    testerProps: TesterProps
}
const Test = (props: TestProps) => {
    const { name, nameProps, testerProps } = props
    return (
        <div>
            TesttttttttttttS
            <h1> {name}</h1>
            <span> {nameProps.name.firstname}</span>
            <span> {testerProps.test.first}</span>
        </div>
    )
}

export default Test
