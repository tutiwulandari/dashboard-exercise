import {findAllData} from "../../actions/actions";
import {connect} from "react-redux";
import {useEffect} from "react";


function DataTable({covids, findAllData}) {
    useEffect(() => {
        findAllData()
    },[])
    console.log(covids)

    return (
        <div className="card">
            {console.log("INI DATAA", covids)}
            <div className="card-header border-transparent">
                <h3 className="card-title" style={{fontWeight:'bold'}}> COVID-19 in the World </h3>
                <div className="card-tools">
                    <button type="button" className="btn btn-tool" data-card-widget="collapse">
                        <i className="fas fa-minus" />
                    </button>
                    <button type="button" className="btn btn-tool" data-card-widget="remove">
                        <i className="fas fa-times" />
                    </button>
                </div>
            </div>
            <div className="card-body p-0">
                <div className="table-responsive">
                    <table className="table m-0">
                        <thead>
                        <tr>
                            <th>Country</th>
                            <th> Confirmed</th>
                            <th> Recovered </th>
                            <th>Deaths </th>

                        </tr>
                        </thead>
                        <tbody>
                        {
                            covids?.data?.slice(11,22).map((element) => {
                                return(
                                <tr>
                                    <td>{element.countryRegion}</td>
                                    <td>{element.confirmed}</td>
                                    <td>{element.recovered}</td>
                                    <td>{element.deaths}</td>
                                </tr>
                                )
                            })

                        }
                        </tbody>
                    </table>

                </div>

            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        covids: state.findAllDataCovid.data || null,
        error: state.findAllDataCovid.error
    }
}

const mapDispatchToProps = {
    findAllData
}

export default connect(mapStateToProps, mapDispatchToProps)(DataTable);

