import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input, Row, Col, Label } from 'reactstrap';
import ReadMoreReact from 'read-more-react';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false,
          readmore : false
        };
    
        this.toggle = this.toggle.bind(this);
      }
    
      toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }

      rendertext = () => {
          if (this.state.readmore) {
              return (
                  <div>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.
                  </div>
              )
          } else {
              return (
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nun
                  </div>
              )
          }
      }

    render(){
        return(
            <div className="container mt-5">
                <div>
                    <img style={{width: 1125,height: 500}} src='main-background-untuk-home-area.jpg' />
                    <h3 class="centered">#1 Spesialis Sewa Apartement Jakarta</h3>
                </div>
                <hr></hr>
                <div class="row mt-5">
                        <div class="col-lg-4">
                            <img src="pilihan_terlengkap.svg" alt="Generic placeholder" width="140" height="140"/>
                            <h2 className="mt-2">Pilih Terlengkap</h2>
                            <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                        </div>
                        <div class="col-lg-4">
                            <img src="cicilan_12.svg" alt="Generic placeholder" width="140" height="140"/>
                            <h2 className="mt-2">Cicilan 12x</h2>
                            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
                        </div>
                    <div class="col-lg-4">
                        <img src="360_virtual.svg" alt="Generic placeholder" width="140" height="140"/>
                        <h2 className="mt-2">360 Virtual Tour</h2>
                        <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                    </div>
                    <Button color="success" className='btn btn-block mb-3' onClick={this.toggle}>Titipkan Unit</Button>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>List Your Apartment Now !</ModalHeader>
                        <ModalBody>
                            <Form>
                                <Label>Nama</Label>
                                <Input/>
                                <Label>Email</Label>
                                <Input/>
                                <Row form>
                                <Col md={6}>
                                    <FormGroup>
                                    <Label>Phone</Label>
                                    <Input type="text" name="city" id="exampleCity"/>
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                    <Label for="exampleState">Whatsapp</Label>
                                    <Input type="text" name="state" id="exampleState"/>
                                    </FormGroup>
                                </Col>
                                </Row>
                                <Label>Status</Label>
                                <Input type="select" name="select" id="exampleSelect">
                                    <option>status1</option>
                                    <option>status2</option>
                                    <option>status3</option>
                                    <option>status4</option>
                                    <option>status5</option>
                                </Input>
                                <Label>Apartement Name</Label>
                                <Input/>
                                <Label>Bedroom</Label>
                                <Input/>
                                <Label>Bathroom</Label>
                                <Input/>
                                <Label>Unit Number</Label>
                                <Input/>
                                <Label>View</Label>
                                <Input/>
                                <Label>Floor</Label>
                                <Input/>
                                <Label>Area</Label>
                                <Input/>
                                <Label>Tower</Label>
                                <Input/>
                                <Label>View</Label>
                                <Input type="select" name="select" id="exampleSelect">
                                    <option>condition1</option>
                                    <option>condition2</option>
                                    <option>condition3</option>
                                    <option>condition4</option>
                                    <option>condition5</option>
                                </Input>
                            </Form>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.toggle}>Do Something</Button>
                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </div>
                <h1><center>Sewa Apartment Jakarta</center></h1>
                    {this.rendertext()}
                <button className="btn btn-block btn-secondary" onClick={()=>this.setState({readmore:!this.state.readmore})}>Read More</button>
            </div>
        )
    }

}

export default Home