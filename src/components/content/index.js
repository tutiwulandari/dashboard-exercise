import {Card, Col, Row} from "reactstrap";
import {CardBody} from "reactstrap";

import PieChart from "../../pages/pieChart";
import DataTable from "../../pages/dataTable";
import ActiveUser from "../../pages/activeUser";
import DataTable2 from "../../pages/dataTable2";
import LineGraph from "../../pages/lineGraph";


function Content() {


    return(
       <div>
          <div className="content-wrapper">
              <div className='row'>
                  <div className='col-12'>
                      <div>
                          <Row style={{marginTop:'30px'}}>
                              <Col md={6}>
                                  <Card>
                                      <CardBody >
                                          <PieChart />
                                      </CardBody>
                                  </Card>
                              </Col>
                              <Col md={6}>
                                  <Card>
                                      <CardBody style={{backgroundColor:'#0090FF'}}>
                                          <ActiveUser />
                                          <LineGraph />
                                          <br/>
                                          <br/>
                                          <br />
                                      </CardBody>
                                  </Card>
                              </Col>


                          </Row>
                          <Row>
                              <Col md={6}>
                                  <Card>
                                      <CardBody>
                                          <DataTable />
                                      </CardBody>
                                  </Card>
                              </Col>
                              <Col md={6}>
                              <Card>
                                  <CardBody>
                                      <DataTable2 />
                                  </CardBody>
                              </Card>
                              </Col>
                          </Row>
                      </div>

                  </div>

              </div>
          </div>
       </div>
    )
}


export default Content;
