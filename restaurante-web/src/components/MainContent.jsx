export default function MainContent({children, onClick}){
    return(
        <section onClick={onClick}>
            {children}
        </section>
    )
}