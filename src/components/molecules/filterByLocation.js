import { Dropdown } from "react-bootstrap"
import { useEffect, useState } from 'react'

export default function FilterByLocation(props) {
    let [locations, setLocations] = useState([{ id: '', name: "Nenhum local encontrado" }])

    useEffect(() => {
        if (props.locations) {
            setLocations(props.locations)
        }
    }, [props])

    return (
        <Dropdown>
            <Dropdown.Toggle variant="dark" id="dropdown-basic">
                Filtrar por
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {
                    locations.map((location, key) => (
                        <Dropdown.Item key={key} href={`?loc=${location.id}`}>
                            {location.name}
                        </Dropdown.Item>
                    ))
                }
            </Dropdown.Menu>
        </Dropdown>
    )
}