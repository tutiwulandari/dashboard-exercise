import {findAll} from "../../actions/actions";
import {useEffect} from "react";
import {connect} from "react-redux";
import {Pie} from "react-chartjs-2";


function PieChart({findAll, dashboards}) {

    useEffect( () => {
        findAll()
    },[])


    const state = {
        labels:['Confirmed', 'Recovered', 'Deaths'],
        datasets:[
            {
                label: 'Jumlah COVID 19',
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
                data:[dashboards?.data?.confirmed?.value, dashboards?.data?.recovered?.value, dashboards?.data?.deaths?.value]
            }
        ]
    }

    return(

        <div>
            <Pie
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
    return{
        //call reducers
        dashboards: state.findAll.data || null,
        error: state.findAll.error,
    }
}

const mapDispatchToProps = {
    //call actions
    findAll
}
export default connect(mapStateToProps, mapDispatchToProps)(PieChart)
