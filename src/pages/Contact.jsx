import Content from "../components/Content.jsx"

export default function Contact(){
	return (
			<div className="Contact">
				<Content
				text="CONTACT US"
				banner="https://cdn.dribbble.com/users/3671336/screenshots/6646593/jelisa_1to1px_animation3.gif"
				/>

				<form action="">
					
					<label htmlFor="name-input"> Name: 
						<input type="text" id="name-input" />	
					</label>

					<label htmlFor="contact-input"> Contact: 
						<input type="text" id="contact-input"/>
					</label>

					<label htmlFor="address-input"> Address
						<input type="text" id="address-input"/>
					</label>
					
					<button className="light">Send</button>

				</form>
			</div>
		)
}