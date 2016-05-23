import React from 'react'
import Nav from '../containers/Nav'
import EmailBox from '../components/EmailBox'

export default React.createClass({
  render() {
    console.log('props:', this.props)
    return (
    	<div>
    		<Nav></Nav>

				<div className='container-fluid'>
					<div className='row'>
						<div className='col-lg-offset-4 col-lg-4 col-md-offset-3 col-md-6 col-sm-offset-2 col-sm-8 test'>
			        Hello, I'm the login page!
              <EmailBox/>
			      </div>
					</div>
				</div>

    	</div>
      )
  }
})