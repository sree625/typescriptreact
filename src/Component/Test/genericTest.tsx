type ItemsArray = { id: number; name: string; price: number; inStock: boolean }

type ItemsProps<ElementType> = {
    items: ElementType[]
}

const GenericTest = <ElementType extends ItemsArray>({
    items,
}: ItemsProps<ElementType>) => {
    return (
        <div>
            GenericTest
            {items.map((item) => {
                return <div>{item.name}</div>
            })}
        </div>
    )
}

export default GenericTest
