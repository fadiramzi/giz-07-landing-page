import BodyPart5part from "./BodyPart5part"

const Bodypart5 = () => {
    return (
        <div className={'BodyPart5Parent'}>
            <div className={'bodyTop'}>
                <div style={{fontSize: '1em', marginBlock: '0em'}}>TOP PRODUCTS</div>
                <div style={{fontSize: '2em',fontWeight: 'bold',marginBlock: '0em'}}>Trending This Week</div>
            </div>
            <BodyPart5part />
            <BodyPart5part />
        </div>
    )
}

export default Bodypart5
