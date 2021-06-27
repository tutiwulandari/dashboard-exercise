import {findAllData} from "../../actions/actions";
import {connect} from "react-redux";
import {useEffect} from "react";


function DataTable2({covids, findAllData}) {

    useEffect(() => {
        findAllData()
    }, [])

    return (
        <div className="card">
            <div className="card-header border-transparent">
                <h3 className="card-title"></h3>
                <div className="card-tools">
                    <button type="button" className="btn btn-tool" data-card-widget="collapse">
                        <i className="fas fa-minus"/>
                    </button>
                    <button type="button" className="btn btn-tool" data-card-widget="remove">
                        <i className="fas fa-times"/>
                    </button>
                </div>
            </div>

            <div className="card-body p-0">
                <div className="table-responsive">
                    <table className="table m-0">
                        <thead>
                        <tr>
                            <th>Country</th>
                            <th>Incident Rate</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            covids?.data?.slice(11, 22).map((element) => {
                                return (
                            <tr>
                                <td>{element.countryRegion}</td>
                                <td>{element.incidentRate}</td>
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

export default connect(mapStateToProps, mapDispatchToProps) (DataTable2);
