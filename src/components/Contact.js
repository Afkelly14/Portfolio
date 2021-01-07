import React, { Component } from "react";
import * as emailjs from 'emailjs-com'
import { Button, FormFeedback, Form, FormGroup, Label, Input } from 'reactstrap';

class ContactForm extends Component {
  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
  }

handleSubmit(e) {
    e.preventDefault()
    const { name, email, subject, message } = this.state
    let templateParams = {
      from_name: email,
      to_name: 'afkelly14@gmail.com',
      subject: subject,
      message_html: message,
     }
     emailjs.send(
      'gmail',
      'contact_form',
       templateParams,
      'user_oQSCcO5czWfNLWkxhxONR'
     )
     this.resetForm()
 }
resetForm() {
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
    })
  }
handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
render() {
    return (
      <>
          <div className="contact_background">
          <h1 className="contact_heading">Get in Touch</h1>
          <div className="form_styling">
          <Form onSubmit={this.handleSubmit.bind(this)}>
            <FormGroup controlId="formBasicEmail">
              <Label className="text-muted"></Label>
              <Input
                type="email"
                name="email"
                value={this.state.email}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'email')}
                placeholder="Enter email"
              />
            </FormGroup>
<FormGroup controlId="formBasicName">
              <Label className="text-muted"></Label>
              <Input
                type="text"
                name="name"
                value={this.state.name}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'name')}
                placeholder="Name"
              />
            </FormGroup>
<FormGroup controlId="formBasicSubject">
              <Label className="text-muted"></Label>
              <Input
                type="text"
                name="subject"
                className="text-primary"
                value={this.state.subject}
                onChange={this.handleChange.bind(this, 'subject')}
                placeholder="Subject"
              />
            </FormGroup>
<FormGroup controlId="formBasicMessage">
              <Label className="text-muted">Message</Label>
              <Input
                type="textarea"
                name="message"
                className="text-primary"
                value={this.state.message}
                onChange={this.handleChange.bind(this, 'message')}
              />
            </FormGroup>
<Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          </div>
          </div>

      </>
    )
  }
}
export default ContactForm