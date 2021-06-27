import {findAllActive,getAllCaseActiveByDate1, getAllCaseActiveByDate2} from "../../actions/actions";
import {useEffect, useState} from "react";
import {connect} from "react-redux";
import {Bar} from "react-chartjs-2";


function LineGraph({findAllActive, getAllCaseActiveByDate1, getAllCaseActiveByDate2, date1, date2, date3}) {
   const[caseActiveDate1, setActiveDate1] = useState();
    const[caseActiveDate2, setActiveDate2] = useState();
    const[caseActiveDate3, setActiveDate3] = useState();


    useEffect(() => {
        findAllActive()
        getAllCaseActiveByDate1()
        getAllCaseActiveByDate2()
    }, [])

    useEffect(() => {
        const arrayFilterDate1 = date1?.data?.find(element => element.countryRegion === "Indonesia")
        setActiveDate1(arrayFilterDate1)
    }, [caseActiveDate1])


    useEffect(() => {
        const arrayFilterDate2 = date2?.data?.find(element => element.countryRegion === "Indonesia")
        setActiveDate2(arrayFilterDate2)
    }, [caseActiveDate2])


    useEffect(() => {
        const arrayFilterDate3 = date3?.data?.find(element => element.countryRegion === "Indonesia")
        setActiveDate3(arrayFilterDate3)
    }, [caseActiveDate3])


    const state = {
        labels:['3', '2', '1'],
        datasets:[
            {
                label: 'Active Cases COVID-19',
                backgroundColor:[
                    '#292961',
                    '#FFDEAD',
                    '#63FAFF'
                ],
                hoverBackgroundColor:[
                    '#000080',
                    '#FFDEAD',
                    '#63FAFF'

                ],
                data:[caseActiveDate1?.active, caseActiveDate2?.active, caseActiveDate3?.active]
            }
        ]
    }

    return (
        <div>
            {console.log("case active", caseActiveDate3)}
            <Bar
                data={state}
                options={{
                    title:{
                        display:true,
                        text: 'Update Kasus COVID-19 di Dunia',
                        fontsize:20,
                    },
                    legend:{
                        display: true,
                        position:'top'
                    }
                }}
            />
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        //call reducer
        date1: state.getCaseActiveByDate.data || null,
        date2: state.getActiveByDate.data || null,
        date3: state.getAllActive.data || null,
    }
}

const mapDispatchToProps = {
    //call action
    findAllActive, getAllCaseActiveByDate1,getAllCaseActiveByDate2
}

export default connect(mapStateToProps, mapDispatchToProps)(LineGraph);
