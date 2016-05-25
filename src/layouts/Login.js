import React from 'react'
import TextInput from '../components/TextInput'
import { Link } from 'react-router'

export default React.createClass({
  getInitialState() {
    return {
      validEmail: false
    }
  },

  validateEmail(email) {
    // This would normally be an async call to the server
    if (email === "jeff@focus21.io") {
      // Get account info
      let accountInfo = {
        email: "jeff@focus21.io",
        profilePicture: "https://d2yvv6a7kcdl71.cloudfront.net/56d0cdac085677b4173a8df1/assets/1A73C9D5-4391-4E78-942B-F8A39B2EAB0C.png",
        name: "Jeffery Aramini"
      }
      console.log(accountInfo)

      // Update store with account info

      // Update state
      this.setState({validEmail: true})
    }
  },

  emailTextLoseFocus(event) {
    this.validateEmail(event.currentTarget.value)
  },

  emailTextChange(event) {
    this.emailTextValue = event.currentTarget.value
  },

  render() {
    let emailIcon = "https://d2yvv6a7kcdl71.cloudfront.net/56d0cdac085677b4173a8df1/assets/337416CB-9120-4CBB-AA5D-1C92DE3E809D.png"
    let passwordIcon = "https://d2yvv6a7kcdl71.cloudfront.net/56d0cdac085677b4173a8df1/assets/BFB74C9D-C974-48F8-B26D-0F2238162527.png"

    let buttonText = "NEXT"
    if (this.state.validEmail) {
      buttonText = "SIGN IN"
    }

    return (
      <div className='login'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='login__mainContainer col-lg-offset-4 col-lg-4 col-md-offset-3 col-md-6 col-sm-offset-2 col-sm-8'>
              <TextInput iconSrc={emailIcon} placeholder='EMAIL' onLoseFocus={this.emailTextLoseFocus}
                onTextChange={this.emailTextChange}/>
              <TextInput iconSrc={passwordIcon} placeholder='PASSWORD' password={true}/>
              <button className='login__button'>{buttonText}</button>
              <div>
                <Link className='login__helpText' to="/about">Need help?</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      )
  }
})