import People from "./People";

const PeopleList = ({data_api}) => {
    
    return (
        <>
        {
        !!data_api ? data_api.map(item => {
            return <People 
                        key={item.id} 
                        name={item.name}
                        nationality={item.nationality} 
                        died={item.died}
                        
                    />
        }) 
        : 'ss'
        } 
        </>
    )
}

export default PeopleList;