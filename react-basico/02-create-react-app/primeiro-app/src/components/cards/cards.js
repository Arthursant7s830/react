import Card from '../card/card'

const cardsTitle = ['Título card 1', 'Título card 2']

const showcardColor = (color) => {
    console.log(color)
}

const Cards = () => {
    return (
        <div>
            <h2>Meus cards</h2>

            <div>
                {
                cardsTitle.map((cardTitle) => (
                    <Card key={cardTitle} showCardColor= {showcardColor}>
                        <h3>{cardTitle}</h3>
                        <p>esse é o texto do card</p>
                    </Card>
                ))
                }
                
                <Card color='blue' showcardColor= {showcardColor}>
                    <h3>Card com fundo azul</h3>
                    <p>esse é o texto do card</p>
                </Card>
            </div>
        </div>
    )
}

export default Cards;
