interface ContentProp{
    children: any
}

export default function Content(prop:ContentProp) {
    const {children} = prop
    return (
        <div className='flex flex-col mt-7'>
        {children}
        </div>
    )
}