import {findAllActive} from "../../actions/actions";
import {connect} from "react-redux";
import {useEffect, useState} from "react";
import LineGraph from "../lineGraph";


function ActiveUser({caseActive, findAllActive}) {
    const [caseActiveIndo, setActiveIndo] = useState();

    useEffect(() => {
        findAllActive()
    }, [])

    useEffect(() => {
        const arrayCaseActiveFilter = caseActive?.data?.find(element => element.countryRegion === "Indonesia")
        setActiveIndo(arrayCaseActiveFilter)
    }, [caseActive])


    return (
        <div>
            {console.log("KASUS AKTIF INDO", caseActiveIndo)}
            <h4 style={{fontSize: '18px', color: 'white', textAlign: 'left'}}>Active Cases COVID-19 in Indonesia Right Now</h4>
            <h4 style={{fontSize: '40px', color: 'white', textAlign: 'left', marginBottom:'50px'}}>{caseActiveIndo?.active}</h4>
            <h4 style={{fontSize: '20px', color: 'white', textAlign: 'left', marginTop: '30px'}}> Active cases COVID-19 in Indonesia in the last three days</h4>
            <hr/>


        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        caseActive: state.getAllActive.data || null
    }
}

const mapDispatchToProps = {
    findAllActive
}

export default connect(mapStateToProps, mapDispatchToProps)(ActiveUser);

